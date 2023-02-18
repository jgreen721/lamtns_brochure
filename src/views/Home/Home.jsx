import React, {useState} from 'react'
import "./Home.css"
import {Link} from "react-router-dom"
import { homefrontbg,homebackbg,logo } from '../../const'
import MobileMenu from '../../components/MobileMenu'
import {motion} from "framer-motion";


const Home = () => {

    const [showMenu, setShowMenu] = useState(false)
  return (
<motion.div initial={{y:'100vh'}} animate={{y:"0",transition:{duration:2}}} exit={{y:'-100vh',transition:{duration:1}}} className="view">
    <div className="view-overlay">
        <img className="homebackbg" src={homebackbg} alt="" />
        <img className="homefrontbg" src={homefrontbg} alt="bg-img" />



          <div className="view-content">
    <nav>
        <img className="nav-logo" src={logo} alt="" />
        <ul className="nav-links">
            <li className="nav-item">
                <Link className="nav-link white" to="/history">History</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link white" to="/team">Team</Link>
            </li>
        </ul>
        <svg onClick={()=>setShowMenu(!showMenu)} height="50" width="50" className={!showMenu ? "mobile open" : "mobile close"}>
          <rect x="5" y="15" width="90" height="2" stroke="white" className="line line1"></rect>
          <rect x="5" y="25" width="90" height="2" stroke="white"  className="line line2"></rect>
          <rect x="5" y="35" width="90" height="2" stroke="white" className="line line3"></rect>
        </svg>
        <MobileMenu showMenu={showMenu}/>
    </nav>
    
    <header>
        <h1 className="home-h1">LOSANGELES</h1>
        <h1 className="home-h1 bold">MOUNTAINS</h1>
    </header>
</div> 
    </div>


{/* <div className="view-content">
    <nav>
        <img className="nav-logo" src={logo} alt="" />
        <ul className="nav-links">
            <li className="nav-item">
                <Link className="nav-link white" href="/history">History</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link white" href="/team">Team</Link>
            </li>
        </ul>
    </nav>
    
    <header>
        <h1 className="home-h1">LOSANGELES</h1>
        <h1 className="home-h1 bold">MOUNTAINS</h1>
    </header>
</div> */}
    
    
</motion.div>
  )
}

export default Home