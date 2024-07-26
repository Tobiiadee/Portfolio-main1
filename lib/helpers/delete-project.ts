/** @format */

import { database } from "../../firebaseConfig";
import { ref, remove } from "firebase/database";
import { toast } from "sonner";

// /**
//  * Deletes a project from Firebase Realtime Database.
//  * @param {string} projectId - The ID of the project to delete.
//  * @returns {Promise<void>} - A promise that resolves when the project is deleted.
//  */

export async function DeleteProject(projectId: string) {
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

export async function DeleteFeedback(feedbackId: string) {
  const feedbackRef = ref(database, `feedbacks/${feedbackId}`);

  return remove(feedbackRef)
    .then(() => {
      toast.success("Feedback deleted successfully");
      console.log("Feedback deleted successfully.");
    })
    .catch((error) => {
      toast.error("unable to delete feedback");
      console.error("Error deleting feedback: ", error);
    });
}
