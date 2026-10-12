import React from 'react'

import Session from './Session'



const DayColumn = ({daySessions,day }) => {

  return (
    <article
            
              className={`min-h-[188px] rounded-[11px] border border-[#3c4247] p-[8px] shadow-[0_5px_16px_rgba(0,0,0,0.1)] `}
            >
              <h2 className="mb-[7px] text-[16px] font-semibold">{day}</h2>     
               {
                daySessions.length === 0 ? (
                  <p className="text-[14px] text-[#8c8c8c]">No sessions</p>
                ) : ( 
                daySessions.map((session) => (
                <div key={session.id} className="space-y-[6px]">
                <Session  session={session} />
                </div>
                )))
               } 
            </article>
  )
}

export default DayColumn
