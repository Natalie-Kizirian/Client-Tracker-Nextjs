import { AiOutlineHome, AiOutlineBars } from "react-icons/ai";
import { LuUserRound, LuCalendar } from "react-icons/lu";

import NavLink from "./nav-link";
export default function Navbar() {
  return (
    <nav className="bg-secondary shadow-navbar  rounded-2xl p-2 w-full">
      <ul className="flex items-center justify-evenly gap-2">
        <li>
          <NavLink href="/dashboard">
            <AiOutlineHome className="text-xl" />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink href="/clients">
            <LuUserRound className="text-xl" />
            Clients
          </NavLink>
        </li>
        <li>
          <NavLink href="/calendar">
            <LuCalendar className="text-xl" />
            Calendar
          </NavLink>
        </li>
        <li>
          <NavLink href="/services">
            <AiOutlineBars className="text-xl" />
            Services
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
