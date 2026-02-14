import { AnimatePresence } from 'framer-motion'
import './App.css'
import Home from './screens/home'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ValentineWeek from './screens/valentine-week';
import Card from './components/Card';
function App() {
  return (
    <>
    <AnimatePresence mode="wait">
     <Router>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/valentine-week" element={<ValentineWeek/>} />
        <Route path='/card' element={<Card/>}/>
      </Routes>
     </Router>
    </AnimatePresence>
    </>
  )
}

export default App
