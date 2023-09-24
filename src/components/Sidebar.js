import logo from '../assets/img/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom'
import {
  faHouse,
  faCalendarCheck,
  faUserNurse,
  faWallet,
  faArrowRightFromBracket,
  faChartLine,
  faHospitalUser
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

Sidebar=()=>{
    return(
        <div className="border-solid border-r-2 border-black h-[100vw] w-60 fixed z-10">
            <img src={logo} alt="HealTether" className=' m-auto'/>
            <ul className='ml-5 flex flex-col h-96 justify-between m-5'>
                <Link to="/"><button className='focus:bg-fuchsia-100 p-2 w-full text-start'><FontAwesomeIcon icon={faHouse} /> <span className='mr-2'/> Home</button></Link>
                <Link to="/"><button className='focus:bg-fuchsia-100 p-2 w-full text-start'><FontAwesomeIcon icon={faCalendarCheck} /> <span className='mr-2'/> Appointments</button></Link>
                <Link to="/whatsappChat"><button className='focus:bg-fuchsia-100 p-2 w-full text-start'><FontAwesomeIcon icon={faWhatsapp} /> <span className='mr-2'/> Whatsapp Chat</button></Link>
                <Link to="/"><button className='focus:bg-fuchsia-100 p-2 w-full text-start'><FontAwesomeIcon icon={faHospitalUser} /> <span className='mr-2'/> Patients Record</button></Link>
                <Link to="/"><button className='focus:bg-fuchsia-100 p-2 w-full text-start'><FontAwesomeIcon icon={faUserNurse} /> <span className='mr-2'/> Manage Staff</button></Link>
                <Link to="/"><button className='focus:bg-fuchsia-100 p-2 w-full text-start'><FontAwesomeIcon icon={faWallet} /> <span className='mr-2'/> Payments</button></Link>
                <Link to="/"><button className='focus:bg-fuchsia-100 p-2 w-full text-start'><FontAwesomeIcon icon={faChartLine} /> <span className='mr-2'/> Analytics</button></Link>
                <Link to="/"><button className='focus:bg-fuchsia-100 p-2 w-full text-start'><FontAwesomeIcon icon={faArrowRightFromBracket} /> <span className='mr-2'/> Logout</button></Link>
            </ul>
        </div>
    )
}

export default Sidebar