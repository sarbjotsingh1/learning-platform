import React from "react";
import { useNavigate } from "react-router-dom";

export const Card = ({ course }) => {
  const naviagte = useNavigate();
  const handleSubmit = () => {
    naviagte(`/user/course/${course.id}`);
  };
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="flex justify-center mx-6 my-4">
          <img className="h-52 w-52" src={course.imgurl} alt="Course Image" />
        </div>
        <div className="flex justify-center my-4">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{course.tittle}</div>
          </div>
        </div>
        <div className="flex justify-center my-4">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            View Course
          </button>
        </div>
      </div>
    </div>
  );
};
