import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

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
          <select className="h-10 pr-12 bg-white text-black border rounded border-black shadow-md outline-none">
            <option>Alphabetical A-Z</option>
            <option>Overall Rating</option>
          </select>
        </div>
        <div className="grid grid-cols-3 gap-12">
          <div className="text-black bg-elective-card rounded-lg shadow-md py-7 px-6">
            <div className="flex justify-between">
              <h2 className="font-bold text-2xl">COMP1511</h2>
              <div>
                <span className="text-search-bar text-2xl">★★★★★</span>
                <p className="text-gray-600 text-xs">69 reviews</p>
              </div>
            </div>
            <p className="text-sm h-16">Programming Fundamentals</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-term-tags rounded-full py-1 px-2 text-xs">
                Term 1
              </span>
              <span className="bg-term-tags rounded-full py-1 px-2 text-xs">
                Term 2
              </span>
              <span className="bg-term-tags rounded-full py-1 px-2 text-xs">
                Term 3
              </span>
            </div>
          </div>
          <div className="text-black bg-elective-card rounded-lg shadow-md py-7 px-6">
            <div className="flex justify-between">
              <h2 className="font-bold text-2xl">COMP1511</h2>
              <div>
                <span className="text-search-bar text-2xl">★★★★★</span>
                <p className="text-gray-600 text-xs">69 reviews</p>
              </div>
            </div>
            <p className="text-sm h-16">Programming Fundamentals</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-term-tags rounded-full py-1 px-2 text-xs">
                Term 1
              </span>
              <span className="bg-term-tags rounded-full py-1 px-2 text-xs">
                Term 2
              </span>
              <span className="bg-term-tags rounded-full py-1 px-2 text-xs">
                Term 3
              </span>
            </div>
          </div>
          <div className="text-black bg-elective-card rounded-lg shadow-md py-7 px-6">
            <div className="flex justify-between">
              <h2 className="font-bold text-2xl">COMP1511</h2>
              <div>
                <span className="text-search-bar text-2xl">★★★★★</span>
                <p className="text-gray-600 text-xs">69 reviews</p>
              </div>
            </div>
            <p className="text-sm h-16">Programming Fundamentals</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-term-tags rounded-full py-1 px-2 text-xs">
                Term 1
              </span>
              <span className="bg-term-tags rounded-full py-1 px-2 text-xs">
                Term 2
              </span>
              <span className="bg-term-tags rounded-full py-1 px-2 text-xs">
                Term 3
              </span>
            </div>
          </div>
          <div className="text-black bg-elective-card rounded-lg shadow-md py-7 px-6">
            <div className="flex justify-between">
              <h2 className="font-bold text-2xl">COMP1511</h2>
              <div>
                <span className="text-search-bar text-2xl">★★★★★</span>
                <p className="text-gray-600 text-xs">69 reviews</p>
              </div>
            </div>
            <p className="text-sm h-16">Programming Fundamentals</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-term-tags rounded-full py-1 px-2 text-xs">
                Term 1
              </span>
              <span className="bg-term-tags rounded-full py-1 px-2 text-xs">
                Term 2
              </span>
              <span className="bg-term-tags rounded-full py-1 px-2 text-xs">
                Term 3
              </span>
            </div>
          </div>
          <div className="text-black bg-elective-card rounded-lg shadow-md py-7 px-6">
            <div className="flex justify-between">
              <h2 className="font-bold text-2xl">COMP1511</h2>
              <div>
                <span className="text-search-bar text-2xl">★★★★★</span>
                <p className="text-gray-600 text-xs">69 reviews</p>
              </div>
            </div>
            <p className="text-sm h-16">Programming Fundamentals</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-term-tags rounded-full py-1 px-2 text-xs">
                Term 1
              </span>
              <span className="bg-term-tags rounded-full py-1 px-2 text-xs">
                Term 2
              </span>
              <span className="bg-term-tags rounded-full py-1 px-2 text-xs">
                Term 3
              </span>
            </div>
          </div>
          <div className="text-black bg-elective-card rounded-lg shadow-md py-7 px-6">
            <div className="flex justify-between">
              <h2 className="font-bold text-2xl">COMP1511</h2>
              <div>
                <span className="text-search-bar text-2xl">★★★★★</span>
                <p className="text-gray-600 text-xs">69 reviews</p>
              </div>
            </div>
            <p className="text-sm h-16">Programming Fundamentals</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-term-tags rounded-full py-1 px-2 text-xs">
                Term 1
              </span>
              <span className="bg-term-tags rounded-full py-1 px-2 text-xs">
                Term 2
              </span>
              <span className="bg-term-tags rounded-full py-1 px-2 text-xs">
                Term 3
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
