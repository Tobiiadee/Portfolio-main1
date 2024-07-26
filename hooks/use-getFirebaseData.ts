/** @format */

import { useState, useEffect } from "react";
import {
  ref,
  get,
  query,
  limitToFirst,
  onValue,
  off,
  DataSnapshot,
  DatabaseReference,
} from "firebase/database";
import { database } from "@/firebaseConfig";
import { ProjectReturnType } from "@/lib/types/types";

export interface DynamicObject {
  [key: string]: any; // This allows the object to have any number of properties with any type
}

// In-memory cache
const cache: { [key: string]: ProjectReturnType } = {};

const useGetFirebaseData = (locationId?: string, limit?: number | null) => {
  const [data, setData] = useState<ProjectReturnType>({});
  const [loading, setLoading] = useState(true);
  const [noData, setNoData] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    if (!locationId) return;

    let dbQuery: DatabaseReference | ReturnType<typeof query>;

    const fetchUserData = async () => {
      setLoading(true);
      setError(null);

      // Check if data is in the cache
      if (cache[locationId] && !limit) {
        setData(cache[locationId]);
        setLoading(false);
        return;
      }

      try {
        const dbRef = ref(database, locationId);
        dbQuery = limit ? query(dbRef, limitToFirst(limit)) : dbRef;
        const snapshot = await get(dbQuery);

        if (snapshot.exists()) {
          const fetchedData = snapshot.val();
          // Update state and cache
          setData(fetchedData);
          if (!limit) {
            cache[locationId] = fetchedData;
          }
        } else {
          console.log("No data available");
          setNoData(true);
          setLoading(false);
        }
      } catch (error) {
        setError(error);
        setLoading(false);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
    // Revalidate data in real-time
    const handleValueChange = (snapshot: DataSnapshot) => {
      if (snapshot.exists()) {
        const updatedData = snapshot.val();
        setData(updatedData);
        setLoading(false);
        if (!limit) {
          cache[locationId] = updatedData;
        }
      } else {
        setNoData(true);
        setLoading(false);
      }
    };

    dbQuery = limit
      ? query(ref(database, locationId), limitToFirst(limit))
      : ref(database, locationId);
    onValue(dbQuery, handleValueChange);

    return () => {
      // Clean up listener on unmount
      off(dbQuery, "value", handleValueChange);
    };
  }, [locationId, limit]);

  return { data, loading, error, noData };
};

export default useGetFirebaseData;
