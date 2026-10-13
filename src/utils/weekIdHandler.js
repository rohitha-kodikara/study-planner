import { formatDate } from './helpers'
import { PLANNER_START_DATE } from './data'

export function createWeekId(index) {
  return `week-${String(index + 1).padStart(4, '0')}`
}

export function createWeekLabel(index) {
  const startDate = new Date(PLANNER_START_DATE)

  startDate.setDate(startDate.getDate() + index * 7)

  const endDate = new Date(startDate)
  endDate.setDate(endDate.getDate() + 6)

  return `${formatDate(startDate)} – ${formatDate(endDate)}`
}

export function handleNextWeek({
  currentWeekIndex,
  setCurrentWeekIndex,
  setWeeksData
}) {
  const nextIndex = currentWeekIndex + 1

  setWeeksData((previousWeeks) => {
    if (previousWeeks[nextIndex]) {
      return previousWeeks
    }

    return [
      ...previousWeeks,
      {
        id: createWeekId(nextIndex),
        label: createWeekLabel(nextIndex),
        sessions: []
      }
    ]
  })

  setCurrentWeekIndex(nextIndex)
}

export function handlePreviousWeek({ setCurrentWeekIndex }) {
  setCurrentWeekIndex((previousIndex) => {
    return Math.max(previousIndex - 1, 0)
  })
}