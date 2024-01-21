import { useState } from "react";
import { useDispatch } from "react-redux"
import Button from "./Button";
import { addEnrolledCourse } from "../redux/reducers/enrolledSlice";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
    const dispatch = useDispatch();
    const [enrolled, setEnrolled] = useState(false);
    
    const handleAddEnroll = course => {
        dispatch(addEnrolledCourse(course));
        setEnrolled(true);
    }
    
    return (
        <div className="card h-full bg-base-300 shadow-xl">
            <figure className="px-5 pt-5">
                <Link to={`course?id=${course.id}`}>
                    <img src={course.thumbnail} alt="Shoes" className="rounded-xl" />
                </Link>
            </figure>
            <div className="card-body text-justify">
                <h2 className="card-title font-bold">{course.name}</h2>
                <p>{course.description}</p>
                <p>{course.schedule}, {course.duration}</p>
                <div className="flex justify-end items-center">
                    <p className="text-lg font-semibold">${course.price}</p>
                    {!enrolled && (
                        <Button type="primary" onClick={() => handleAddEnroll(course)}>
                            Enroll now
                        </Button>
                    )}
                    {enrolled && <Button type="neutral">Enrolled</Button>}
                </div>
            </div>
        </div>
    )
}

export default CourseCard