import { createClient } from "pexels";
//API_KEY = 563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf
const API_KEY = process.env.REACT_APP_API_KEY;
let client: any;

if (API_KEY !== undefined) {
  client = createClient(API_KEY);
}

export { client };
