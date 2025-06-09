import axios from "axios";

const QA_URL = "https://api-qa.montra.org/moneylinkweb/";
const Prod_URL = "https://api.montra.org/moneylinkweb/";

export const api = axios.create({
  baseURL: QA_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});
