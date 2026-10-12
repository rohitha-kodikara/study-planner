import React from 'react'
import {
} from 'lucide-react'
import Logo from './Logo'
import WeekMover from './WeekMover'

const Header = ({ currentWeekIndex, handleNextWeek, handlePreviousWeek, createWeekLabel }) => {
  return (
    <header className="mb-[21px] flex items-center justify-between gap-4">
         <Logo />
        <WeekMover 
          currentWeekIndex={currentWeekIndex}
          handleNextWeek={handleNextWeek}
          handlePreviousWeek={handlePreviousWeek}
          createWeekLabel={createWeekLabel}
        />
        </header>
  )
}

export default Header
