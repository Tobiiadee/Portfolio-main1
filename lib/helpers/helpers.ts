/** @format */

import { v4 as uuidv4 } from "uuid";
import { ProjectReturn } from "../types/types";
import { database } from "../../firebaseConfig";
import { remove, getDatabase, ref, update } from "firebase/database";
import { toast } from "sonner";

// Sanitize data to remove undefined values
export const sanitizeData = <T>(obj: T): T => {
  if (obj === null || obj === undefined) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => sanitizeData(item)) as unknown as T;
  }

  if (typeof obj === "object") {
    return Object.keys(obj).reduce((acc, key) => {
      const value = (obj as any)[key];
      if (value !== undefined) {
        (acc as any)[key] = sanitizeData(value);
      }
      return acc;
    }, {} as T);
  }

  return obj;
};

//Generate path for sending data to firebase
export const generatePath = (path: string) => {
  const uID = uuidv4();
  const generatedPath = `${path}/${uID}`;
  return { generatedPath, uID };
};

// Define a generic type for the object
type AnyObject = { [key: string]: any };

// Define the function with type annotations
export const getAllKeys = <T extends AnyObject>(obj: T): any[] => {
  return Object.keys(obj).map((key) => obj[key]);
};

export const filterCompletedProjects = (
  projects: ProjectReturn[]
): ProjectReturn[] => {
  return projects.filter((project) => project.stage === "completed");
};
export const filterOngoingProjects = (
  projects: ProjectReturn[]
): ProjectReturn[] => {
  return projects.filter((project) => project.stage === "ongoing");
};

export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date string");
  }

  // Get the month and year separately
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date
  );
  const year = new Intl.DateTimeFormat("en-US", { year: "numeric" }).format(
    date
  );

  // Return the formatted date
  return `${month}, ${year}`;
}

export async function deleteProject(projectId: string) {
  const projectRef = ref(database, `projects/${projectId}`);

  return remove(projectRef)
    .then(() => {
      toast.success("Project deleted successfully");
      console.log("Project deleted successfully.");
    })
    .catch((error) => {
      toast.error("unable to delete project");
      console.error("Error deleting project: ", error);
    });
}
export async function deleteContactRequest(contactId: string) {
  const projectRef = ref(database, `contacts/${contactId}`);

  return remove(projectRef)
    .then(() => {
      toast.success("Contact request deleted successfully");
      console.log("Contact request deleted successfully.");
    })
    .catch((error) => {
      toast.error("unable to delete contact request");
      console.error("Error deleting contact request: ", error);
    });
}

export const updateRequestStatus = (path: string, newData: any) => {
  const db = getDatabase();
  const dataRef = ref(db, `contacts/${path}`);

  update(dataRef, newData)
    .then(() => {
      console.log("Status updated successfully!");
    })
    .catch((error) => {
      toast.error("Error updating status!");
      console.error("Error updating data: ", error);
    });
};
