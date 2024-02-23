import UnilectivesIcon from './unilectives-icon/unilectives-icon';
import {
  BookOpenIcon,
  ShieldCheckIcon,
  BarsArrowUpIcon,
  UserCircleIcon,
  MoonIcon,
  ArrowRightEndOnRectangleIcon,
} from '@heroicons/react/24/outline';

function Navbar() {
  return (
    <div className="fixed left-0 top-0 flex h-full w-20 flex-col items-center justify-between overflow-hidden bg-gray-50 text-black">
      <div className="flex flex-col gap-2 pt-3">
        <UnilectivesIcon className="h-12 w-12 p-2" />
        <div className="flex flex-col gap-2 border-t-2 pt-2">
          <BookOpenIcon className="h-12 w-12 p-3" />
          <ShieldCheckIcon className="h-12 w-12 p-3" />
        </div>
      </div>
      <div className="flex flex-col gap-4 pb-12">
        <BarsArrowUpIcon className="h-12 w-12 rotate-90 p-3" />
        <UserCircleIcon className="h-12 w-12 p-3" />
        <MoonIcon className="h-12 w-12 p-3" />
        <ArrowRightEndOnRectangleIcon className="h-12 w-12 p-3" />
      </div>
    </div>
  );
}

export default Navbar;
