import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom";

const CoursePage = () => {

    const { courses, isLoading } = useSelector(store => store.course);
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('id');
    const courseData = courses.length > 0 && courses.filter(course => course.id == id);
    const [currentCourse, setCurrentCourse] = useState(courseData);

    useEffect(() => {
        setSearchParams(params => {
            params.set('id', id);
            return params
        });
        const courseData = courses.length > 0 && courses.filter(course => course.id == id);
        console.log(courseData);
        setCurrentCourse(courseData);
    }, [courses, id, setSearchParams]);

    const {
        name,
        instructor,
        description,
        enrollmentStatus,
        thumbnail,
        duration,
        schedule,
        location,
        prerequisites,
        syllabus,
        students,
    } = currentCourse[0];

    return (
        <>
            {
                isLoading ? 
                <span className="loading loading-spinner loading-lg"></span>
                :
                <section className="mb-10">
                    <h2 className="my-5 text-3xl font-semibold pl-4 lg:text-center lg:pl-0">Course Details</h2>
                    <div className="max-w-6xl m-auto flex flex-col rounded-xl text-lg border border-gray-500 gap-2 p-5 bg-base-300">
                        <figure className="rounded-xl">
                            <img src={thumbnail} alt={name} className="w-full h-72 rounded-xl object-cover mr-5" />
                        </figure>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="border border-white rounded-xl py-4 px-4 space-y-1 text-justify">
                                <h2 className="text-3xl font-bold">{name}</h2>
                                <p className="text-xl"><span className="font-semibold">Instructor:</span> {instructor}</p>
                                <p className="text-xl"><span className="font-semibold">Description: </span>{description}</p>
                                <p className="text-xl"><span className="font-semibold">Enrollment Status: </span>{enrollmentStatus}</p>
                                <p className="text-xl"><span className="font-semibold">Duration: </span>{duration}</p>
                                <p className="text-xl"><span className="font-semibold">Schedule: </span>{schedule}</p>
                                <p className="text-xl"><span className="font-semibold">Location: </span>{location}</p>
                            </div>
                            <div className="border border-white rounded-xl py-4 px-4 text-justify">
                                <h3 className="text-2xl font-bold">Prerequisites:</h3>
                                <ul className="list-disc pl-5">
                                    {prerequisites.map((prerequisite, index) => (
                                        <li className="list-item text-xl" key={index}>
                                            
                                            {prerequisite}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="border border-white rounded-xl py-4 px-4 text-justify">
                                <h3 className="text-2xl font-bold">Syllabus:</h3>
                                <ul className="pl-2.5">
                                    {syllabus.map((item) => (
                                        <li key={item.week}>
                                            <strong>Week {item.week}:</strong> {item.topic} - {item.content}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="border border-white rounded-xl py-4 px-4 text-justify">
                                <h3 className="text-2xl font-bold">Students:</h3>
                                <ul className="pl-2.5">
                                    {students.map((student) => (
                                        <li key={student.id}>
                                            <span className="font-semibold">{student.name}</span> - <span className="italic">{student.email}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    )
}

export default CoursePage