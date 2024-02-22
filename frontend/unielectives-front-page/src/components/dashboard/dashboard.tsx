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
        <div>
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
      </div>
    </div>
  );
}

export default Dashboard;
