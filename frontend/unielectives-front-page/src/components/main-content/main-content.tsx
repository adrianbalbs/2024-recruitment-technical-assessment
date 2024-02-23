import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

import courses from '../../assets/courses.json';

function MainContent() {
  return (
    <div className="ml-14 mt-12 flex h-full w-full flex-col items-center">
      <div className=" flex w-5/6 flex-col gap-4">
        <p className="text-sm text-black">DevSoc presents</p>
        <h1 className="text-7xl font-bold text-header-blue">unilectives</h1>
        <p className="text-md font-bold text-black">
          Your one-stop shop for UNSW course and elective reviews.
        </p>
        <div className="mb-8">
          <div className="mb-4 mt-8 flex items-center rounded border-2 border-solid border-search-bar">
            <MagnifyingGlassIcon className="mx-2 h-6 w-6 text-search-bar" />
            <input
              type="text"
              className="h-8 w-full bg-white py-2 pl-2 text-search-bar placeholder-search-bar outline-none"
              placeholder="Search for a course e.g. COMP1511"
            />
          </div>
          <div className="flex w-56 justify-between rounded-md border border-gray-500 px-4 py-2 text-sm text-gray-500 shadow-md">
            <span>Sort By</span>
            <span>
              <ChevronDownIcon className="h-5 w-5" />
            </span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-12">
          {courses.map((course) => {
            return (
              <div className="rounded-lg bg-elective-card px-6 py-7 text-black shadow-md">
                <div className="flex justify-between">
                  <h2 className="text-2xl font-bold">
                    COMP{course.course_code}
                  </h2>
                  <div className="relative text-star-unfilled">
                    <span className="text-2xl">★★★★★</span>
                    <span
                      className="absolute inset-0 overflow-clip text-2xl text-star-filled"
                      style={{ width: `${(course.average_stars / 5) * 100}%` }}
                    >
                      ★★★★★
                    </span>
                    <p className="text-xs">{course.total_reviews} reviews</p>
                  </div>
                </div>
                <p className="mt-2 h-16 text-sm">{course.course_title}</p>
                <div className="flex flex-wrap gap-2">
                  {course.offered_terms.map((term) => {
                    return (
                      <span className="rounded-full bg-term-tags px-2 py-1 text-xs">
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

export default MainContent;
