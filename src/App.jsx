
import './App.css'
import Console from './assets/components/Console';
import HomePage from './assets/components/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Members from './assets/components/Members';
import mentordata from "./assets/components/MentorsData"
import SquadMatesdata from "./assets/components/SquadMates"
import Memories from './assets/components/Memories';
import MemoryData from './assets/components/MemoriesData';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/console" element={<Console/>} />
        <Route path="/members" element={<Members mentordata={mentordata}  SquadMatesdata={SquadMatesdata}/>} />
        <Route path='/memories' element={<Memories MemoryData={MemoryData}/>}/>
      </Routes>
    </Router>
  )
}

export default App
