/** @format */
import { GetServerSideProps } from "next";
import { ref, get, child } from "firebase/database";
import { database } from "@/firebaseConfig";
import { ProjectsData } from "../types/types";
// export function generateStaticParams() {}

export async function getAllProject() {
  const response = await fetch("");
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  const data = await response.json();
  return data;
}

interface ProjectsPageProps {
  projects: ProjectsData;
}

export const getServerSideProps: GetServerSideProps<
  ProjectsPageProps
> = async () => {
  const dbRef = ref(database);
  const snapshot = await get(child(dbRef, `projects`));

  let projects: ProjectsData = {};
  if (snapshot.exists()) {
    projects = snapshot.val();
  }

  return {
    props: {
      projects,
    },
  };
};

// const fetchUserData = async () => {
//   try {
//     const dbRef = ref(database);
//     const snapshot = await get(child(dbRef, `/${locationId}`));
//     if (snapshot.exists()) {
//       return snapshot.val();
//     } else {
//       console.log("No data available");
//     }
//   } catch (error) {
//     console.error(error);
//   } finally {
//   }
// };

// return { data, loading, error, noData };
