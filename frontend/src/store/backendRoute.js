import { createSlice } from "@reduxjs/toolkit";

const prodSlice = createSlice({
    name: "prod",
    initialState: {
        link: "http://localhost:9005"
    }
});

export default prodSlice.reducer;