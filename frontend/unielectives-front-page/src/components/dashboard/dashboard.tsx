import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

import courses from "../../assets/courses.json";

function Dashboard() {
  return (
    <div className="h-full w-full flex flex-col items-center mt-12 ml-14">
      <div className=" w-5/6 flex flex-col gap-4">
        <p className="text-sm text-black">DevSoc presents</p>
        <h1 className="text-7xl text-header-blue font-bold">unilectives</h1>
        <p className="text-md text-black font-bold">
          Your one-stop shop for UNSW course and elective reviews.
        </p>
        <div className="mb-8">
          <div className="border-solid border-2 rounded border-search-bar flex items-center mt-8 mb-4">
            <MagnifyingGlassIcon className="w-6 h-6 text-search-bar mx-2" />
            <input
              type="text"
              className="w-full bg-white text-search-bar h-8 placeholder-search-bar pl-2 py-2 outline-none"
              placeholder="Search for a course e.g. COMP1511"
            />
          </div>
          <div className="flex justify-between border border-gray-500 rounded-md w-56 py-2 px-4 shadow-md text-sm text-gray-500">
            <span>Sort By</span>
            <span>
              <ChevronDownIcon className="w-5 h-5" />
            </span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-12">
          {courses.map((course) => {
            return (
              <div className="text-black bg-elective-card rounded-lg shadow-md py-7 px-6">
                <div className="flex justify-between">
                  <h2 className="font-bold text-2xl">
                    COMP{course.course_code}
                  </h2>
                  <div className="relative text-star-unfilled">
                    <span className="text-2xl">★★★★★</span>
                    <span
                      className="absolute inset-0 text-star-filled text-2xl overflow-clip"
                      style={{ width: `${(course.average_stars / 5) * 100}%` }}
                    >
                      ★★★★★
                    </span>
                    <p className="text-xs">{course.total_reviews} reviews</p>
                  </div>
                </div>
                <p className="text-sm h-16 mt-2">{course.course_title}</p>
                <div className="flex flex-wrap gap-2">
                  {course.offered_terms.map((term) => {
                    return (
                      <span className="bg-term-tags rounded-full py-1 px-2 text-xs">
                        {term}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
