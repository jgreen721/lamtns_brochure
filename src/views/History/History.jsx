import React, {useState,useEffect} from 'react'
import {useLocation, Link} from "react-router-dom"
import {historyBg,logo,carousel1,carousel2} from "../../const"
import "./History.css";
import MobileMenu from '../../components/MobileMenu';
import {motion} from "framer-motion"

const History = () => {
  const gallery=[
    {id:1,img:carousel1},
    {id:2,img:carousel2},
    {id:3,img:carousel1},
    {id:4,img:carousel2},
  ]
  const [counter,setCounter] = useState(0)
  const [showMenu, setShowMenu] = useState(false)

  const location = useLocation()




  const handleChangePic=()=>{
      setCounter(counter === 1 ? 0 : 1)
  


  }
  return (
    <motion.div initial={{x:'100vw'}} animate={{x:"0",transition:{duration:2}}} exit={{x:'-100vw',transition:{duration:1}}} className="view">
      <div className="view-overlay">
<img className="bg-img" src={historyBg} alt="" />
      </div>
      <div className="view-content">
        <nav className="gray-bg">
          <div className="nav-icon-div">
            <Link to="/">
          <img className="nav-logo" src={logo} alt="" />
          </Link>
          <div>
            <h4 className="nav-h4">Los Angeles</h4>
            <h4 className="nav-h4">Mountains</h4>
          </div>
          </div>
<div className="nav-burger-col">
          <ul className="nav-links">
            <li className="nav-item">
                <Link className="nav-link black" to="/history">History</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link black" to="/team">Team</Link>
            </li>
        </ul>
        <svg onClick={()=>setShowMenu(!showMenu)} height="50" width="50" className={!showMenu ? "mobile open" : "mobile close"}>
          <rect x="5" y="15" width="90" height="2" stroke="black" className="line line1"></rect>
          <rect x="5" y="25" width="90" height="2" stroke="black"  className="line line2"></rect>
          <rect x="5" y="35" width="90" height="2" stroke="black" className="line line3"></rect>
        </svg>
        <MobileMenu showMenu={showMenu}/>
</div>
        </nav>
        <section className="history-header">
          <div className="page-div">
          <h1 className="view-h1">01</h1>
          <div className="path-col">
          <h5 className="pathname-h5">{location.pathname.split("/")[1].toUpperCase()}</h5>
          <div className="square"></div>
          </div>
          </div>
          <p className="blurb">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga deleniti quae sunt corrupti fugit eligendi consequatur magnam pariatur ut. Molestiae dolor placeat sint voluptatum, dolorum ad distinctio maiores. Soluta provident odit sit ipsa perferendis, quisquam enim non quia praesentium laudantium fugiat, dolor eum nemo voluptates, mollitia esse quaerat accusamus fugit.</p>
        </section>
      </div>
      <div className="gallery-row">
        <ul className="gallery">
          {gallery.map(g=>(
            <li key={g.id} className="gallery-item">
              <img src={g.img} className="gallery-img" alt="gallery-img"/>
            </li>
          ))}
        </ul>

      </div>
      <div className="mobile-carousel">
          <button  onClick={()=>handleChangePic(0)} className="carousel-btn">Prev</button>
          {/* <img className="gallery-img" src={gallery[counter].img} alt="" /> */}
          {gallery.map((g,i)=>(
            <li key={g.id} className={counter == i ? "gallery-item-mobile show" : "hide"}>
              <img src={g.img} className="gallery-img" alt="gallery-img"/>
            </li>
          ))}
          <button  onClick={()=>handleChangePic(1)} className="carousel-btn">Next</button>
        </div>
    </motion.div>
  )
}

export default History