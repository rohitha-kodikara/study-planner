import React from 'react'

import Session from './Session'

const DayColumn = ({ day }) => {
  return (
    <article
              key={day.name}
              className={`min-h-[188px] rounded-[11px] border border-[#3c4247] p-[8px] shadow-[0_5px_16px_rgba(0,0,0,0.1)] ${day.tone}`}
            >
              <h2 className="mb-[7px] text-[16px] font-semibold">{day.name}</h2>
              {day.sessions.length > 0 ? (
                <div className="space-y-[6px]">
                  {day.sessions.map((session) => (
                    <Session key={session.title} session={session} />
                  ))}
                </div>
              ) : (
                <p className="mt-[12px] text-[14px] text-[#777]">No sessions</p>
              )}
            </article>
  )
}

export default DayColumn
