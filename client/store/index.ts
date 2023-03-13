import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import chartsReducer from './reducers/chartsReducer'
import themeReducer from './reducers/mainReducer'

export const store = configureStore({
  reducer: {
    chartsData: chartsReducer,
    themeReducer
  }
})
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;