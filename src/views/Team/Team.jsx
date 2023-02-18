import React, {useState,useEffect} from 'react'
import {useLocation, Link} from "react-router-dom"
import {teamBg,teamBg2,logo} from "../../const"
import "./Team.css";
import MobileMenu from '../../components/MobileMenu';
import {motion} from "framer-motion"



const variants={
  initial:{
    translateX:"-100vw"
  },
  animate:{
    translateX:"0vw",
    transition:{
      duration:'1s ease'
    }
  },
  exit:{
    translateX:"-100vw"
  }
}

const Team = () => {
  const [imgs,setImgs] = useState([teamBg,teamBg2])
  const [counter,setCounter] = useState(1)
  const [showMenu, setShowMenu] = useState(false)

  const location = useLocation()

console.log(imgs)



  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:2}}} exit={{opacity:0,transition:{duration:1}}} className="view flex-col">
        <section className="team-header"> 
          <div className="page-col">
          <h1 className="team-h1 gray">02</h1>
         
          <div className="col">
          <h5 className="pathname-h5">{location.pathname.split("/")[1].toUpperCase()}</h5>
          <div className="square"></div>
          </div>
          </div>
          <p className="team-blurb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus esse earum ex eius impedit illo molestiae ab. Et, minima ratione. Necessitatibus, recusandae ducimus. Voluptate, porro.</p>
        
        </section>
        <div className="option-bar">
          <div>
          <button onClick={()=>setCounter(0)} className={counter == 0 ? "mtn-btn selected" : "mtn-btn"}>Mountain1</button>
          <button onClick={()=>setCounter(1)} className={counter == 1 ? "mtn-btn selected" : "mtn-btn"}>Mountain2</button>
          </div>
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
        </div>
        <main className="main">
          {imgs.map((image,idx)=>(
            <img key={image} className={counter == idx ? "main-bg-img reveal" : "main-bg-img"} src={image} />
            ))}
            <div className="sched-card">
              <h3 className="sched-header">Schedule</h3>
              <ul className="sched-list">
                <li className="sched-item">
                  <p className="date">25 Nov 2016</p>
                  <p className="activity">Vestibulum viverra</p>
                </li>
                <li className="sched-item">
                  <p className="date">28 Nov 2016</p>
                  <p className="activity">Vestibulum viverra</p>
                </li>
                <li className="sched-item mt-2">
                  <p className="date">18 Dec 2016</p>
                  <p className="activity">Vestibulum viverra</p>
                </li>
                <li className="sched-item mt-2">
                  <p className="date">7 Jan 2107 </p>
                  <p className="activity">Vestibulum viverra</p>
                </li>
              </ul>
            </div>
        </main>


        <footer>
        <Link to="/">

        <div className="nav-icon-div">
          <img className="nav-logo" src={logo} alt="" />
         
          <div>
            <h4 className="nav-h4">Los Angeles</h4>
            <h4 className="nav-h4">Mountains</h4>
          </div>
          </div>
          </Link>
          <h3 className="footer-text">Copyright 2014All Rights Reserved</h3>
        </footer>
    </motion.div>
  )
}

export default Team