import moment from "moment";

const baseURL = "https://polls.apiblueprint.org";

export const postOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  }
};

export const dateFormatter = date => {
  return moment(new Date(date)).format("LL");
};

export const fetcher = async (endpoint, options) => {
  const url = `${baseURL}${endpoint}`;
  const response = await fetch(url, options);
  return response.json();
};
