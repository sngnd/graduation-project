import { createClient } from "pexels";

const API_KEY = process.env.REACT_APP_API_KEY;
let client: any;

if (API_KEY !== undefined) {
  client = createClient(API_KEY);
}

export { client };
