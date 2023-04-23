import { createAsyncThunk } from "@reduxjs/toolkit";

const backUrl = "http://server.love-breakfast.com/";

export const menuSearch = createAsyncThunk("menu/search", async () => {
  const response = await fetch(backUrl + "menu/%7BcompanyId%7D?companyId=3", {
    method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
  });

  return response.json();
});
