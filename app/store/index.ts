import {configureStore} from '@reduxjs/toolkit'

import User from "./user";
import Skills from "./skills";
import Services from './services';
import Client from "./client";
import Experience from "./experience";

export const store = configureStore({
    reducer: {
        user: User,
        skills: Skills,
        services: Services,
        experience: Experience,
        client: Client,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch