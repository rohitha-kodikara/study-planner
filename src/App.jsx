
import Header from "./components/header/Header"
import AddSessionForm from './components/AddSessionForm'
import WeekColumns from "./components/week-columns/WeekColumns"
import ProgressChart from "./components/progress-chart/ProgressChart"
import Footer from "./components/footer/Footer"


import { useState } from "react"

import {
  createWeekLabel,
  handleNextWeek,
  handlePreviousWeek
} from "./utils/weekIdHandler"



const hours = [
  { subject: 'React', value: '7h', width: 'w-[58%]', color: 'bg-[#8274dd]' },
  { subject: 'Maths', value: '3h', width: 'w-[26%]', color: 'bg-[#1da378]' },
  { subject: 'English', value: '3h', width: 'w-[26%]', color: 'bg-[#db6136]' },
]




function App() {
  const [weeksData, setWeeksData] = useState([])
  const[currentWeekIndex, setCurrentWeekIndex] = useState(0);
   const [formData, setFormData] = useState({
    title: '',
    subject: '',
    day: '',
    duration: '',
  });

  

// const[selectedWeekId, setSelectedWeekId] = useState('week-0001');

function goToNextWeek() {
  handleNextWeek({
    currentWeekIndex,
    setCurrentWeekIndex,
    setWeeksData
  })
}

function goToPreviousWeek() {
  handlePreviousWeek({
    setCurrentWeekIndex
  })
}

const currentWeek = weeksData[currentWeekIndex]
//const currentWeekId = currentWeek?.id


const currentWeekSessions = currentWeek?.sessions?.length > 0 ? currentWeek : null
const sessionData = currentWeekSessions?.sessions ?? [];


 function handleFormChange(e) {
    const { name, value } = e.target;

    setFormData((previousFormData) => ({
      ...previousFormData,
      [name]: value,
    }));
  }

function handleSubmit(e) {
  e.preventDefault();
  const newSession = {
      id: `s-${Math.floor(Math.random() * 1000)}`,
      title: formData.title,
      subject: formData.subject,
      day: formData.day,
      duration: parseInt(formData.duration, 10),
    };

  const updatedSessionData = [...sessionData, newSession];
  
 setWeeksData(prevWeeksData => {
    const updatedWeeksData = [...prevWeeksData];
    updatedWeeksData[currentWeekIndex] = {
      ...updatedWeeksData[currentWeekIndex],
      sessions: updatedSessionData
    };
    return updatedWeeksData;
  });

  setFormData({
      title: '',
      subject: '',
      day: '',
      duration: '',
    });

}

const durationBySubject = sessionData.reduce((totals, session) => {
  const { subject, duration } = session;

  totals[subject] = (totals[subject] || 0) + duration;

  return totals;
}, {});




  return (
    <main className="fixed inset-0 overflow-auto bg-[#121212] font-sans text-[#f5f5f5]">
      <div className="mx-auto min-h-full w-full max-w-[912px] px-4 py-7 sm:px-5">
        <Header 
           currentWeekIndex={currentWeekIndex}
          handleNextWeek={goToNextWeek}
          handlePreviousWeek={goToPreviousWeek}
          createWeekLabel={createWeekLabel}
        />

        <AddSessionForm 
         formData={formData}
      handleFormChange={handleFormChange}
        handleSubmit={handleSubmit}
         />

        <WeekColumns currentWeekSessions={currentWeekSessions} />

        <ProgressChart durationBySubject={durationBySubject} />
    
        <Footer />
      </div>
    </main>

  )
}

export default App
