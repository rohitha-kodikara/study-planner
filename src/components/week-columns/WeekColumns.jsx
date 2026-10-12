
import {weekdays} from '../../utils/data'

import DayColumn from './DayColumn'




const WeekColumns = ({ currentWeekSessions }) => {
  

  
  
 if (!currentWeekSessions) {
    return (
      <section className="flex min-h-[480px] items-center justify-center rounded-[16px] border border-[#3c4247] bg-[#121212]">
        <p className="text-[24px] font-semibold text-[#b8c0c8]">No planned sessions for this week yet!</p>
      </section>
    )
  }
  return (
    <section className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7 lg:gap-2">
      {
        weekdays.map((day) => {
          const daySessions = currentWeekSessions.sessions.filter((session) => session.day === day);
          return (
            <DayColumn key={day} daySessions={daySessions} day={day} />
          )
        }
        )
      }
     
    
    </section>
  )
}

export default WeekColumns
