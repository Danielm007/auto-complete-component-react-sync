import { User } from "../models/user";

export const callToApi = (url: string, method: string) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Unexpected Error");
        }
      })
      .then((data) => resolve(data.users as User[]))
      .catch((err) => reject(err));
  });
};
