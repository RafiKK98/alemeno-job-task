import { useState } from "react";
import { useSelector } from "react-redux"
import EnrolledCourseCard from "../components/EnrolledCourseCard";

const Dashboard = () => {

    const { enrolledCourses } = useSelector(store => store.enrolled);
    const [ count, setCount ] = useState(0);

    const handleSetCountPlus = () => {
        setCount((count) => count + 1);
    }

    const percentage = (count / enrolledCourses.length) * 100;

    return (
        <section className="">
            <h2 className="my-5 text-3xl font-semibold pl-4 lg:text-center lg:pl-0">Dashboard</h2>
                {enrolledCourses.length > 0 && (
                    <div className="max-w-6xl mx-auto my-12 border border-white p-7">
                        <p className="text-lg">
                        Your Progress: {Math.floor(percentage)}%
                        </p>
                        <progress
                            value={count}
                            max={enrolledCourses.length}
                            className="w-full h-6"
                        >
                        10%
                        </progress>
                    </div>
                )}
                <div className="max-w-5xl flex items-center justify-center m-auto flex-wrap gap-12">
                {enrolledCourses.length > 0 ? (
                    enrolledCourses.map((course) => (
                    <EnrolledCourseCard
                        key={course.id}
                        course={course}
                        onClick={handleSetCountPlus}
                    />
                    ))
                ) : (
                    <h1 className="text-center text-2xl tracking-[.625em]">
                    You have not enrolled in any course yet.
                    </h1>
                )}
                </div>
        </section>
    )
}

export default Dashboard