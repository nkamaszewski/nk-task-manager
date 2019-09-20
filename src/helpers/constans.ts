import { User } from "../types/types";

export const API_ENDPOINT = "https://jsonplaceholder.typicode.com/todos";

export const USERS: User[] = [
  { name: "Alice", id: 1 },
  { name: "Bob", id: 2 },
  { name: "Frank", id: 3 }
];

export const DEFAULT_ERROR_MESSAGE = "Something gone wrong, refresh browser";
