import { Button } from "@mui/material";
import { useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const filterArray = [
  "Last day",
  "Last 7 days",
  "Last 30 days",
  "Last month",
  "Last years",
];

const Table = () => {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState(0);

  return (
    <div className="w-full mx-auto ">
      <div className="relative overflow-x-auto sm:rounded-lg min-h-[300px]">
        <div className="flex items-center justify-between pb-4">
          <div>
            <button
              id="dropdownRadioButton"
              data-dropdown-toggle="dropdownRadio"
              className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              type="button"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <svg
                className="w-4 h-4 mr-2 text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                ></path>
              </svg>
              {filterArray[filter]}
              <svg
                className="w-3 h-3 ml-2"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              id="dropdownRadio"
              className={`z-10 w-48 ${
                !open && "hidden"
              } bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 `}
              data-popper-reference-hidden=""
              data-popper-escaped=""
              data-popper-placement="top"
              style={{
                position: "absolute",
                top: 0,
                margin: "0px",
                transform: "translate(0px, 45px)",
              }}
            >
              <ul
                className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownRadioButton"
              >
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">
                    <input
                      onChange={(e) => {
                        setOpen(!open);
                        setFilter(e.target.value);
                      }}
                      id="filter-radio-example-1"
                      type="radio"
                      value={0}
                      name="filter-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="filter-radio-example-1"
                      className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                    >
                      Last day
                    </label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input
                      onChange={(e) => {
                        setOpen(!open);
                        setFilter(e.target.value);
                      }}
                      id="filter-radio-example-2"
                      type="radio"
                      value={1}
                      name="filter-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="filter-radio-example-2"
                      className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                    >
                      Last 7 days
                    </label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input
                      onChange={(e) => {
                        setOpen(!open);
                        setFilter(e.target.value);
                      }}
                      id="filter-radio-example-3"
                      type="radio"
                      value={2}
                      name="filter-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="filter-radio-example-3"
                      className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                    >
                      Last 30 days
                    </label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input
                      onChange={(e) => {
                        setOpen(!open);
                        setFilter(e.target.value);
                      }}
                      id="filter-radio-example-4"
                      type="radio"
                      value={3}
                      name="filter-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="filter-radio-example-4"
                      className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                    >
                      Last month
                    </label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input
                      onChange={(e) => {
                        setOpen(!open);
                        setFilter(e.target.value);
                      }}
                      id="filter-radio-example-5"
                      type="radio"
                      value={4}
                      name="filter-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="filter-radio-example-5"
                      className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                    >
                      Last year
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for items"
            />
          </div>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 shadow-md rounded-xl border border-slate-200 dark:border-slate-800">
          <TableHeader />
          <tbody>
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
