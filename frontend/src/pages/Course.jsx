import { React, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export const Course = () => {
  const [enrolled, setenrolled] = useState(false);
  const studentEmail = localStorage.getItem("user");
  const [student, setStudent] = useState({ email: studentEmail });
  const { courseid } = useParams();
  const [course, setCourse] = useState([]);
  const fetchData = async () => {
    const resp = await axios.get(
      `http://localhost:3000/api/course/${courseid}`
    );
    setCourse(resp.data);
    console.log(resp.data);
  };

  const handleSubmit = async () => {
    // const resp = await axios.post(
    //   `http://localhost:3000/api/student/${student.id}/course/${courseid}`
    // );
    alert("Course Enrolled");
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {/* <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#e32f2f] to-[#e48484] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div> */}
      <div className="flex mt-11 mx-28 gap-40">
        <img className="h-96 w-96" src={course.imgurl} alt="Course" />
        <div>
          <div className="text-8xl ">{course.tittle}</div>
          <div className="text-xl mt-4 ">{course.description}</div>
          <div className="text-5xl my-11"> $ {course.price}</div>
          <button
            onClick={handleSubmit}
            type="button"
            className="rounded-lg bg-blue-800 text-3xl  px-9 py-4  font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-blue-600"
          >
            Enroll Now
          </button>
        </div>
      </div>
      {/* <div
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
      </div> */}
    </>
  );
};
