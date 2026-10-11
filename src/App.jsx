
import Header from "./components/header/Header"
import AddSessionForm from './components/AddSessionForm'
import WeekColumns from "./components/week-columns/WeekColumns"
import ProgressChart from "./components/progress-chart/ProgressChart"
import Footer from "./components/footer/Footer"




const hours = [
  { subject: 'React', value: '7h', width: 'w-[58%]', color: 'bg-[#8274dd]' },
  { subject: 'Maths', value: '3h', width: 'w-[26%]', color: 'bg-[#1da378]' },
  { subject: 'English', value: '3h', width: 'w-[26%]', color: 'bg-[#db6136]' },
]



function App() {
  return (
    <main className="fixed inset-0 overflow-auto bg-[#121212] font-sans text-[#f5f5f5]">
      <div className="mx-auto min-h-full w-full max-w-[912px] px-4 py-7 sm:px-5">
        <Header />

        <AddSessionForm />

        <WeekColumns />

        <ProgressChart hours={hours} />
    
        <Footer />
      </div>
    </main>
  )
}

export default App
