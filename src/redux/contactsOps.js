import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ErrorMessage } from "formik";

axios.defaults.baseURL = "https://663c6b1417145c4d8c362498.mockapi.io/";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact1 = createAsyncThunk(
    "contacts/addContact",
    async (newContact, thunkAPI) => {
try {
    const response = await axios.post("/contacts", newContact)
    return response.data;
} catch (error) {
    return thunkAPI.rejectWithValue(error.message);
}
    }
)