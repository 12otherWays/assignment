import React from "react";

function ArticleInput() {
  return (
    <div className="w-11/12 mt-4">
      <form>
        <div>
          <label for="title" className="block mb-2 font-semibold">
            Title
          </label>
          <input
            type="text"
            id="title"
            className=" border border-gray-300 text-sm block w-full p-2.5"
            required
          />
        </div>
        <div>
          <label for="textarea" className="block mt-6 mb-2 font-semibold">
            Content
          </label>
          <textarea
            type="textarea"
            id="textarea"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5"
            required
          />
        </div>
        <div className="flex justify-end mt-6">
          <button className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-700 dark:hover:bg-blue-900 dark:focus:ring-blue-900 mr-4">
            Save draft
          </button>
          <button className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-700 dark:hover:bg-blue-900 dark:focus:ring-blue-900">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
}

export default ArticleInput;
