// import { database } from "@/firebaseConfig";
// import { ref, set, get, child } from "firebase/database";

// // Write data
// set(ref(database, 'users/' + userId), {
//   username: name,
//   email: email,
//   profile_picture : imageUrl
// });

// // Read data
// const dbRef = ref(database);
// get(child(dbRef, `users/${userId}`)).then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });
