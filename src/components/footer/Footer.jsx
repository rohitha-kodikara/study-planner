import React from 'react'
import WeekEraser from './WeekEraser'

const Footer = ({ clearWeekSessions }) => {
  return (
    
        <div className="mt-2 flex justify-end">
          <WeekEraser clearWeekSessions={clearWeekSessions} />
        </div>
  )
}

export default Footer
