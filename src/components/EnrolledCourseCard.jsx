import { useState } from "react"
import Button from "./Button";

const EnrolledCourseCard = ({ course, onClick }) => {

    const [completed, setCompleted] = useState(false);

    const handleSetCompleted = () => {
        setCompleted(c => !c);
        onClick();
    }

    return (
        <div className="flex h-full bg-base-300 shadow-xl rounded-xl ">
            <figure className="w-1/2 py-5 pl-5">
                <img src={course.thumbnail} alt="" className="w-full h-full rounded-xl" />
            </figure>
            <div className="w-1/2 flex flex-col justify-evenly mx-2">
                <div className="flex flex-col justify-start items-start text-justify gap-4 mx-2">
                    <h2 className="text-3xl font-bold">{course.name}</h2>
                    <p className="text-lg">{course.description}</p>
                    <p className="text-lg"><span className="font-semibold">Instructor:</span> {course.instructor}</p>
                    <p className="text-xl"><span className="font-semibold">Price:</span> $3499</p>
                </div>
                <div className="">
                    <div>
                        {!completed && (
                            <Button type="info" onClick={handleSetCompleted}>
                                Mark as Completed
                            </Button>
                        )}
                        {completed && <Button type="success">Completed</Button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnrolledCourseCard