import { createAsyncThunk } from "@reduxjs/toolkit";

const backUrl = "http://54.79.43.64:4000/";

export const menuSearch = createAsyncThunk("menu/search", async () => {
  const response = await fetch(backUrl + "menu/search", {
    method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
  });

  return response.json();
});
