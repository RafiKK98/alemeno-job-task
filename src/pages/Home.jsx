import { useSelector } from "react-redux"
import Courses from "../components/Courses";

const Home = () => {

    const { isLoading, error } = useSelector(store => store.course);

    return (
        <section className="mb-10">
            <h2 className="my-5 text-3xl font-semibold pl-4 lg:text-center lg:pl-0">Available Courses</h2>
            { isLoading ? <span className="loading loading-spinner loading-lg"></span> : <Courses />}
        </section>
    )
}

export default Home