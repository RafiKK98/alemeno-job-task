import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import CoursePage from "./pages/CoursePage"
import Dashboard from "./pages/Dashboard"
import Header from "./components/Header"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { loadingData, setError, settingData } from "./redux/reducers/courseSlice"

const App = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((store) => store.course);
  console.log(error);
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        dispatch(loadingData(true));
        const response = await fetch('/courseData.json');
        if (!response.ok) {
          throw new Error(`Server did not respond`);
        }
        const data = await response.json();
        console.log(data);
        dispatch(settingData(data.courses));
      } catch(error) {
        dispatch(setError(error.message))
      } finally {
        dispatch(loadingData(false));
      }
    }
    fetchCourses();
  }, [dispatch]);

  return (
    <main className="max-w-7xl mx-auto">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<h1 className="text-center text-6xl font-semibold">Coming soon!</h1>} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
