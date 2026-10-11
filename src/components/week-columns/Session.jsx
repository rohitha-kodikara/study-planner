import React from 'react'
import { subjectTone } from '../../utils/data'

const Session = ({ session }) => {
  return (
    <div
        key={session.title}
        className={`rounded-[7px] px-[8px] py-[6px] text-[14px] leading-[17px] ${subjectTone[session.subject]}`}
          >
                      <p className="font-semibold">{session.title}</p>
                      <p>{session.subject} · {session.duration}</p>
                    </div>
  )
}

export default Session
