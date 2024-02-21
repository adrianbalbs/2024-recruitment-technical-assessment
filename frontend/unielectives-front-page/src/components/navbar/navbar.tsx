import UnilectivesIcon from "./unilectives-icon/unilectives-icon";
import {
  BookOpenIcon,
  ShieldCheckIcon,
  BarsArrowDownIcon,
  UserCircleIcon,
  MoonIcon,
  ArrowRightEndOnRectangleIcon,
} from "@heroicons/react/24/outline";

function Navbar() {
  return (
    <div className="h-full w-20 bg-gray-100 top-0 left-0 text-black fixed flex flex-col justify-between items-center overflow-hidden">
      <div className="flex flex-col gap-2 pt-3">
        <UnilectivesIcon className="w-12 h-12 p-2" />
        <div className="flex flex-col gap-2 border-t-2 pt-2">
          <BookOpenIcon className="w-12 h-12 p-3" />
          <ShieldCheckIcon className="w-12 h-12 p-3" />
        </div>
      </div>
      <div className="flex flex-col gap-4 pb-12">
        <BarsArrowDownIcon className="w-12 h-12 p-3" />
        <UserCircleIcon className="w-12 h-12 p-3" />
        <MoonIcon className="w-12 h-12 p-3" />
        <ArrowRightEndOnRectangleIcon className="w-12 h-12 p-3" />
      </div>
    </div>
  );
}

export default Navbar;
