import { useSelector } from "react-redux"
import CourseCard from "./CourseCard";

const Courses = () => {

    const {filteredCourses, courses, searchQuery, error} = useSelector(store => store.course);

    return (
        <div className="grid grid-cols-3 items-center gap-5">
            { error && (
                <h1>{error}: Server is not responding!</h1>
            )}
            {
                filteredCourses.length === 0 && searchQuery === '' && 
                courses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))
            }
            {
                filteredCourses.length > 0 && 
                filteredCourses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))
            }
            {
                filteredCourses.length === 0 && searchQuery.length !== 0 && (
                    <>
                        <h1>We don&apos;t have this course yet...</h1>
                    </>
                )
            }
        </div>
    )
}

export default Courses