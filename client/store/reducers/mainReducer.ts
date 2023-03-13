import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from ".."

interface IMainReducer {
    theme: string
}

const initialState: IMainReducer = {
    theme: 'dark'
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state, action: PayloadAction<string>) => {
            state.theme = action.payload
        }
    }
})

export const {
    changeTheme
} = themeSlice.actions

export const getThemeValue = (state: RootState) => state.themeReducer.theme

export default themeSlice.reducer