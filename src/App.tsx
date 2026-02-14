import { AnimatePresence } from 'framer-motion'
import './App.css'
import Home from './screens/home'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ValentineWeek from './screens/valentine-week';
function App() {
  return (
    <>
    <AnimatePresence mode="wait">
     <Router>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/valentine-week" element={<ValentineWeek/>} />
        
      </Routes>
     </Router>
    </AnimatePresence>
    </>
  )
}

export default App
