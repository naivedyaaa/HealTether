import { dummyData } from "../dummy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faRotateRight,
  faAngleLeft,
  faAngleRight,
  faAngleRight,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom'
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
PatientRecord = () => {
  return (
    <div className="ml-[275px] mr-9 text-gray-600">
      <div className="flex justify-between py-6 border-b border-solid border-gray-400 items-center">
        <div className="flex w-60 justify-between items-center">
          <p>Dashboard</p>
          <FontAwesomeIcon icon={faAngleRight} />
          <p>Patients Record</p>
        </div>
        <div className="">
          <button className="shadow-md text-green-600 p-2 rounded-md ">
            + Add New Patient
          </button>
          <button className="ml-3 bg-green-600 text-white p-2 rounded-md">
            <FontAwesomeIcon icon={faCalendarCheck} /> Schedule Appointment
          </button>
        </div>
      </div>
      <div className="flex mt-4 justify-between">
          <p>{dummyData.length} results found</p>
        <div className="flex items-center w-64 justify-evenly ">
        <button><FontAwesomeIcon icon={faRotateRight} /> Refresh</button>
        <p>1-20 of 50</p>
        <FontAwesomeIcon icon={faAngleLeft} />
        <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>

      <table className="table-fixed w-full border-2 border-solid border-white border-separate border-spacing-y-3">
        <thead className="mr-10 bg-fuchsia-700 h-10 text-white">
          <tr>
            <th>Patient</th>
            <th>Contact</th>
            <th>Last Visited</th>
            <th>App. Type</th>
            <th>Payment Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((e) => {
            return (
                // <Link to={"/"+e.name.split(" ")[0].toLowerCase()}>
              <tr className="text-center bg-fuchsia-100 h-11 border">
                <td>{e.name}</td>
                <td>{e.contact}</td>
                <td>{e.lastVisited}</td>
                <td>{e.applicationType}</td>
                <td>{e.paymentStatus}</td>
                <td>
                  <FontAwesomeIcon icon={faWhatsapp} />{" "}
                  <span className="px-1" />
                  <FontAwesomeIcon icon={faTrash} />
                </td>
              </tr>
            //   </Link>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PatientRecord;
