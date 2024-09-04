import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const CardAdmin = ({ course }) => {
  const naviagte = useNavigate();
//   const handleDelete = async() => {
//     const resp = await axios.delete(    
//         console.log(id);
//         `http://localhost:3000/api/course/${course.id}`
//       );
//   };
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="flex justify-center mx-6 mt-4">
          <img className="h-52 w-52" src={course.imgurl} alt="Course Image" />
        </div>
        <div className="flex justify-center">
          <div className="px-6 py-2">
            <div className="font-bold text-xl mb-2">{course.tittle}</div>
          </div>
        </div>
        <div className="flex justify-center my-2">
          <div className="px-6 py-2">
            <div className="font-bold text-xl mb-2">{course.price}</div>
          </div>
        </div>
        <div className="flex justify-center my-2">
          <Link
            to={`/admin/course/${course.id}`}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Update Course
          </Link>
        </div>
        {/* <div className="flex justify-center my-4">
          <button
=            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Delete Course
          </button>
        </div> */}
      </div>
    </div>
  );
};
