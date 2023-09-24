import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faUser,
  faAngleRight,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
Header = () => {
  return (
    <div className="ml-[275px] mr-9 text-gray-700">
      <div className="border-b border-solid border-black flex justify-between items-center h-14 my-auto">
        <input
          class="placeholder:text-slate-400 block bg-white w-[450px] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
          type="text"
          name="search"
        />
        <div className="relative lg:max-w-sm flex w-56 justify-evenly">
          <FontAwesomeIcon icon={faQuestionCircle} />
          <FontAwesomeIcon icon={faBell} />
          <div className="flex">
            <FontAwesomeIcon icon={faUser} />

            <p className="pl-1">Ajit B...</p>
          </div>
          <select className="w-10 text-gray-500 bg-white outline-none appearance-none underline">
            <option>ENG </option>
            <option>Hindi</option>
            <option>German</option>
            <option>Spanish</option>
          </select>
        </div>
      </div>
      
    </div>
  );
};
export default Header;
