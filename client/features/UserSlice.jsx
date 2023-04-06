import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";
//import { AsyncStorage } from "react-native";

let initialState = {
  //getting our token from localStorage
  //token: AsyncStorage.getItem("token"),
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
};

export const register = createAsyncThunk(
  "user/register",
  async (values, { rejectWithValue }) => {
    try {
      const resp = await axios.post(
        "http://192.168.155.12:5000/api/register",
        {
          email: values.email,
          firstName: values.firstName,
          lastName: values.lastName,
          password: values.password,
        }
      );
      return resp.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk(
  "user/login",
  async (values, { rejectWithValue }) => {
    try {
      const resp = await axios.post(
        "http://192.168.155.12:5000/api/login",
        {
          email: values.email,
          password: values.password,
        }
      );
      // await AsyncStorage.setItem("token", resp.data);
      return resp.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadState(state, action) {
      const token = state.token;
      if (token) {
        const user = jwtDecode(token); // decode the token....
        return {
          ...state,
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          password: user.password,
          loginStatus: "",
        };
      }
    },
    logOut(state, action) {
      return {
        ...state,
        token: "",
        id: "",
        email: "",
        firstName: "",
        lastName: "",
        registerStatus: "",
        registerError: "",
        loginStatus: "",
        loginError: "",
      };
    },

    clearLoginStatus(state, action) {
      return {
        ...state,
        loginStatus: "",
      };
    },
  },
  extraReducers: (Builder) => {
    Builder.addCase(register.pending, (state, action) => {
      return {
        ...state,
        registerStatus: "pending",
        registerError: "",
      };
    });

    Builder.addCase(register.fulfilled, (state, action) => {
      return {
        ...state,

        registerStatus: "success",
        registerError: "",
      };
    });

    Builder.addCase(register.rejected, (state, { payload }) => {
      return {
        ...state,

        registerStatus: "rejected",
        registerError: payload,
      };
    });

    // LOGIN ACTION UPDATE

    Builder.addCase(login.pending, (state, { payload }) => {
      return {
        ...state,
        loginStatus: "pending",
      };
    });

    Builder.addCase(login.fulfilled, (state, { payload }) => {
      if (payload) {
        user = jwtDecode(payload);
      }
      return {
        ...state,
        token: payload,
        loginStatus: "success",
      };
    });

    Builder.addCase(login.rejected, (state, action) => {
      return {
        ...state,
        loginStatus: "rejected",
        loginError: action.payload,
      };
    });
  },
});

export default userSlice.reducer;
export const { loadState, logOut, clearLoginStatus } = userSlice.actions;
