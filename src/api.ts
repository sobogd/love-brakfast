import { createAsyncThunk } from "@reduxjs/toolkit";

const backUrl = "https://server.rests.app/";

export const menuSearch = createAsyncThunk("menu/search", async () => {
  const response = await fetch(backUrl + "menu/get/{companyId}?companyId=3", {
    method: "GET",
  });

  return response.json();
});
