import { createSlice } from "@reduxjs/toolkit";

const dummySlice = createSlice({
  name: "dummy",
  initialState: { ok: true },
  reducers: {},
});

export default dummySlice.reducer;
