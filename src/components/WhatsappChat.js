import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faRotateRight,
  faAngleLeft,
  faAngleRight,
  faAngleRight,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { dummyData } from "../dummy";
import chatHead from "../assets/img/chatHead.png";
import chat from "../assets/img/chat.png";

WhatsappChat = () => {
  return (
    <div className="ml-[275px] mr-9 text-gray-700">
      <div className="flex justify-between pt-6 items-center">
        <div className="flex w-60 justify-between items-center">
          <p>Dashboard</p>
          <FontAwesomeIcon icon={faAngleRight} />
          <p>Whatsapp Chat</p>
        </div>
        <div>
          <button className="ml-3 bg-green-600 text-white p-2 rounded-md">
            <FontAwesomeIcon icon={faCalendarCheck} /> Schedule Appointment
          </button>
        </div>
      </div>

      <div className="flex border-l-2 h-[70vh]">
        <div className="flex flex-col pt-6">
          <input
            class="placeholder:text-slate-400 block bg-white mx-5 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search Patient"
            type="text"
            name="search"
          />
          <button className="shadow-md bg-green-600 p-2 rounded-md text-white my-2 mx-5">
            + Add New Patient
          </button>
          <ul className="flex flex-col">
            {dummyData.map((e) => {
              return (
                <Link
                  to={
                    "/whatsappChat/" +
                    e.name.split(" ")[0].toLowerCase() +
                    "chat"
                  }
                  className="p-2 w-full text-start border-b-2"
                >
                  <button className="focus:bg-fuchsia-100 ">{e.name}</button>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col pt-2 ">
        <img src={chatHead} alt="ChatHead"  className="w-full"/>
            <img src={chat} alt="Chat" className="h-[64vh] object-cover object-top"/>
        </div>
      </div>
    </div>
  );
};
export default WhatsappChat;
