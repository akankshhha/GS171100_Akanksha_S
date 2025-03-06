import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    user: string | null
    isAutheticated: boolean
}

const initialState: AuthState = {
    user: null,
    isAutheticated: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            state.user = action.payload
            state.isAutheticated = true
        },
        logout: (state) => {
            state.user = null
            state.isAutheticated = false
        }
    }
})

export const {login, logout} = authSlice.actions
export default authSlice.reducer