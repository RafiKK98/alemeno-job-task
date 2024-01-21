import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./reducers/courseSlice";
import enrolledReducer from "./reducers/enrolledSlice";


const store = configureStore({
    reducer: {
        course: courseReducer,
        enrolled: enrolledReducer,
    },
});

export default store;