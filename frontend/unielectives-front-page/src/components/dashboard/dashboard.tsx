function Dashboard() {
  return (
    <div className="h-full w-full flex flex-col items-center mt-8 ml-14">
      <div className=" w-5/6 flex flex-col gap-4">
        <p className="text-lg text-black">DevSoc presents</p>
        <h1 className="text-7xl text-header-blue font-bold">unilectives</h1>
        <p className="text-xl text-black font-bold">
          Your one-stop shop for UNSW course and elective reviews.
        </p>
        <div className="border-solid border-2 border-blue-500">
          <input
            type="text"
            className="w-full bg-white text-black h-8 placeholder-blue-500"
            placeholder="Search for a course e.g. COMP1511"
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
