import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    courses: [],
    isLoading: false,
    filteredCourses: [],
    searchQuery: "",
    error: ""
};

const courseSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        settingData(state, action) {
            state.courses = action.payload;
            state.isLoading = false;
        },
        filterData(state, action) {
            if (state.courses.length !== 0)
                state.filteredCourses =
                action.payload === ""
                    ? state.courses
                    : state.courses.filter(course =>
                        course.name
                            .toLowerCase()
                            .includes(action.payload.toLowerCase()) ||
                        course.instructor
                            .toLowerCase()
                            .includes(action.payload.toLowerCase())
                    );
        },
        loadingData(state, action) {
            state.isLoading = action.payload;
        },
        setSearchQuery(state, action) {
            state.searchQuery = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
    },
});

export default courseSlice.reducer;
export const {
    filterData,
    loadingData,
    setSearchQuery,
    settingData,
    setError
} = courseSlice.actions;