import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function Thread() {
  const [first, setFirst] = useState(true);

  function handleClick() {
    setFirst(!first);
  }
  return (
    <div className="w-11/12">
      <div className="flex flex-col">
        <div className="flex flex-row mb-6 mt-2">
          <IoIosArrowDown
            style={{ height: "24px", width: "24px", marginRight: "4px" }}
            onClick={handleClick}
          />
          <h1 className="font-bold">Thread A</h1>
        </div>
        <div
          className={
            first ? "m-4 h-0 hidden" : "m-4 flex flex-row justify-around"
          }
        >
          <div className="flex flex-col">
            <label for="title" className="block mb-2 font-medium">
              Sub Thread 1
            </label>
            <textarea
              type="text"
              id="title"
              className=" border border-gray-300 text-sm block w-full p-2.5"
              placeholder="Enter Text Here"
              required
            />
            <div className="flex flex-row justify-between w-3/5 mt-4 self-end">
              <img
                src="https://sdlms.deepthought.education/assets/uploads/files/files/eureka-moment.svg"
                alt=""
              />
              <img
                src="https://sdlms.deepthought.education/assets/uploads/files/files/answer.svg"
                alt=""
              />
              <img
                src="https://sdlms.deepthought.education/assets/uploads/files/files/question.svg"
                alt=""
              />
              <img
                src="https://sdlms.deepthought.education/assets/uploads/files/files/root-of-thought.svg"
                alt=""
              />
            </div>
          </div>
          <div>
            <label for="title" className="block mb-2 font-medium">
              Sub Interpretation 1
            </label>
            <textarea
              type="text"
              id="title"
              className=" border border-gray-300 text-sm block w-full p-2.5"
              placeholder="Enter Text Here"
              required
            />
            <div>dropdown</div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-6">
        <button className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-700 dark:hover:bg-blue-900 dark:focus:ring-blue-900 mr-4">
          + New Thread
        </button>
      </div>
    </div>
  );
}

export default Thread;
