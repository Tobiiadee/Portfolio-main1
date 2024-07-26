/** @format */

import React, { useEffect, useState } from "react";
// import useGetFirebaseData from "./use-getFirebaseData";
// import { getAllKeys } from "@/lib/helpers/helpers";
import { ref, get, child } from "firebase/database";
import { database } from "@/firebaseConfig";

import { ProjectReturn } from "@/lib/types/types";

//Todo: Complete the check for using paths from firebase
//Todo: Use project Id instead, i.e map through the array of projects and return the match

export default function useGetProject(projectId: string) {
  //Fetch projects from firebase
  // const { data } = useGetFirebaseData("projects");
  const [data, setData] = useState<ProjectReturn>();
  const [loading, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const dbRef = ref(database);
        const snapshot = await get(child(dbRef, `projects/${projectId}`));
        if (snapshot.exists()) {
          setLoading(false);
          setData(snapshot.val());
        } else {
          console.log("No data available");
          setLoading(false);
          setNoData(true);
          return null;
        }
      } catch (error) {
        setError(true);
        setLoading(false);
        console.error("Error fetching project:", error);
        throw error;
      }
    };

    fetchData();
  }, [projectId]);

  return { data, loading, noData, error };
}
