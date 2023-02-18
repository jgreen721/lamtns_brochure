import {Routes, Route, useLocation } from "react-router-dom"
import {Home,History,Team} from "./views"
import {AnimatePresence} from "framer-motion";
import './App.css'

function App() {
  const location = useLocation()

  return (
    <div className="app">
      <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/team" element={<Team/>}/>
      </Routes>
      </AnimatePresence>

    </div>
  )
}

export default App
