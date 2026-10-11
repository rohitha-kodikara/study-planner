import React from 'react'
import {
  CalendarDays,

} from 'lucide-react'

const Logo = () => {
  return (
     <div className="flex items-center gap-3">
            <CalendarDays className="h-6 w-6 text-white" strokeWidth={2.2} />
            <h1 className="text-[23px] font-semibold tracking-[-0.02em]">Study Planner</h1>
          </div>
  )
}

export default Logo
