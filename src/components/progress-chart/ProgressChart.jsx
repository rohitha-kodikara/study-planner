import React from 'react'

const ProgressChart = ({ hours }) => {
  return (
     <section className="mt-[15px] rounded-[16px] border border-[#303030] bg-[#171717] px-[15px] pb-[14px] pt-[15px]">
          <div className="mb-[9px] flex items-center justify-between">
            <h2 className="text-[18px] font-semibold">Hours this week</h2>
            <span className="text-[16px] font-semibold text-[#d7e7e8]">12 hrs total</span>
          </div>
          <div className="space-y-[8px]">
            {hours.map((hour) => (
              <div key={hour.subject} className="grid grid-cols-[68px_minmax(0,1fr)_42px] items-center gap-[10px] text-[16px]">
                <span className="font-medium text-[#d6dfe0]">{hour.subject}</span>
                <div className="h-[10px] overflow-hidden rounded-full bg-[#111]">
                  <div className={`h-full rounded-full ${hour.width} ${hour.color}`} />
                </div>
                <span className="text-right font-semibold">{hour.value}</span>
              </div>
            ))}
          </div>
        </section>
  )
}

export default ProgressChart
