import React from 'react'
import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'


const WeekMover = () => {
  return (
    <div className="flex items-center gap-2 text-[16px] font-semibold">
            <button
              aria-label="Previous week"
              className="flex h-[35px] w-[40px] cursor-pointer items-center justify-center rounded-[11px] border border-[#46515b] bg-[#202a33] text-[#e6e6e6] shadow-[0_3px_10px_rgba(0,0,0,0.16)]"
            >
              <ChevronLeft className="h-[19px] w-[19px]" />
            </button>
            <span className="px-0.5 whitespace-nowrap">Oct 12 - Oct 18</span>
            <button
              aria-label="Next week"
              className="flex h-[35px] w-[40px] cursor-pointer items-center justify-center rounded-[11px] border border-[#46515b] bg-[#202a33] text-[#e6e6e6] shadow-[0_3px_10px_rgba(0,0,0,0.16)]"
            >
              <ChevronRight className="h-[19px] w-[19px]" />
            </button>
          </div>
  )
}

export default WeekMover
