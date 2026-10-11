
import days from '../../utils/data'

import DayColumn from './DayColumn'

const WeekColumns = () => {
  return (
    <section className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7 lg:gap-2">
          {days.map((day) => (
            <DayColumn key={day.name} day={day} />
          ))}
        </section>
  )
}

export default WeekColumns
