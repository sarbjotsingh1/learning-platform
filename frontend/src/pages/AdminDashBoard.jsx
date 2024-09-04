import { useState, useEffect } from "react";
import { Card } from "../Componets/Card";
import axios from "axios";
import { Link } from "react-router-dom";
import { CardAdmin } from "../Componets/CardAdmin";

export const AdminDashboard = () => {
  const [courses, setCourses] = useState([]);
  const fetchData = async () => {
    const resp = await axios.get("http://localhost:3000/api/course");
    setCourses(resp.data);
    console.log(resp.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Link
        type="button"
        to={`/admin/addcourse/`}
        className="rounded-md flex justify-center mx-12 my-6 bg-blue-400 px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        Add Course
      </Link>
      <div className="flex gap-12 justify-center">
        {courses.map((course) => (
          <>
            <CardAdmin key={course.id} course={course} />
          </>
        ))}
      </div>
    </>
  );
};
