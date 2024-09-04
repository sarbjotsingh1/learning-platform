import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateCourse() {
  const { courseid } = useParams();
  const naigate = useNavigate();
  const [course, setCourse] = useState({
    tittle: "",
    description: "",
    price: "",
    imgurl: "",
  });
  const [updatedCourse, setUpdatedCourse] = useState({
    tittle: "",
    description: "",
    price: "",
    imgurl: "",
  });
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.put(
        `http://localhost:3000/api/course/${courseid}`,
        updatedCourse
      );
      if (resp.status == 200) {
        alert("Course updated");
        naigate("/admin");
      } else alert("error");
    } catch (error) {
      console.log(error);
    }
  };
  const fetchData = async () => {
    const resp = await axios.get(
      `http://localhost:3000/api/course/${courseid}`
    );
    setCourse(resp.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="m-11">
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-4xl text-center font-semibold leading-7 text-gray-900">
              Update Course
            </h2>
            {/* <p className="mt-1 text-  text-center leading-6 text-gray-600">
              Enter the course details
            </p> */}

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Coursename
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Name of course"
                      defaultValue={course.tittle}
                      onChange={(e) => {
                        setUpdatedCourse({ ...course, tittle: e.target.value });
                      }}
                      autoComplete="username"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <label
                  htmlFor="price"
                  className="block mt-4 text-sm font-medium leading-6 text-gray-900"
                >
                  Price
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      id="price"
                      name="price"
                      type="number"
                      defaultValue={course.price}
                      placeholder="Price of course"
                      onChange={(e) => {
                        setUpdatedCourse({ ...course, price: e.target.value });
                      }}
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <label
                  htmlFor="imgurl"
                  className="block mt-4 text-sm font-medium leading-6 text-gray-900"
                >
                  Image Url
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      id="imgurl"
                      name="imgurl"
                      defaultValue={course.imgurl}
                      type="text"
                      placeholder="Url of imgage"
                      onChange={(e) => {
                        setUpdatedCourse({ ...course, imgurl: e.target.value });
                      }}
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    defaultValue={course.description}
                    onChange={(e) => {
                      setUpdatedCourse({
                        ...course,
                        description: e.target.value,
                      });
                    }}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Write a few sentences about course.
                </p>
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          onClick={handleUpdate}
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Update Course
        </button>
      </form>
    </div>
  );
}
