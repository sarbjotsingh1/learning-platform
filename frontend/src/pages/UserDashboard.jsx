import { useState, useEffect } from "react";
import { Card } from "../Componets/Card";
import axios from "axios";

export const UserDashboard = () => {
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
      <div className="my-10">
        <div className="flex gap-12 justify-center">
          {courses.map((course) => (
            <Card key={course.id} course={course} />
          ))}
        </div>
      </div>
      <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
    </>
  );
};
