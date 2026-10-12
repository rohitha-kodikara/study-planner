
import { subjectTone } from '../../utils/data'

const Session = ({ session }) => {

  return (
    <div
       
        className={`rounded-[7px] px-[8px] py-[6px] text-[14px] leading-[17px] mb-2 ${
  subjectTone[session.subject] || 'bg-gray-500 text-white'
}`}
          >
           <p className="font-semibold">{session.title}</p>
           <p>{session.subject} · {session.duration} hrs</p>
    </div>
  )
}

export default Session
