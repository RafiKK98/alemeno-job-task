import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    enrolledCourses: []
};

const enrolledSlice = createSlice({
    name: 'enrolled',
    initialState,
    reducers: {
        addEnrolledCourse(state, action) {
            state.enrolledCourses = [...state.enrolledCourses, action.payload];
        },
    },
});

export default enrolledSlice.reducer;
export const { addEnrolledCourse } = enrolledSlice.actions;
