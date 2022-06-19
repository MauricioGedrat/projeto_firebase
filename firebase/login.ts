import { Login } from "../pages/api/login";
import { db } from "./config";
import { ref, set } from "firebase/database";

// Add a new document in collection "cities"

export const loginFirebase = async (data: Login) => {
  const result = set(ref(db, "login/" + data.nome), data);
  console.log("firebase result", result);
};
