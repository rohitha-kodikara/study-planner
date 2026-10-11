const days = [
  {
    name: 'Mon',
    tone: 'bg-[#191919]',
    sessions: [
      { title: 'Hooks', subject: 'React', duration: '2h' },
      { title: 'Algebra', subject: 'Maths', duration: '1h' },
    ],
  },
  {
    name: 'Tue',
    tone: 'bg-[#191919]',
    sessions: [{ title: 'Essay draft', subject: 'English', duration: '2h' }],
  },
  {
    name: 'Wed',
    tone: 'bg-[#191919]',
    sessions: [{ title: 'Context API', subject: 'React', duration: '1h' }],
  },
  {
    name: 'Thu',
    tone: 'bg-[#191919]',
    sessions: [
      { title: 'Geometry', subject: 'Maths', duration: '2h' },
      { title: 'Mini project', subject: 'React', duration: '2h' },
    ],
  },
  { name: 'Fri', tone: 'bg-[#191919]', sessions: [] },
  {
    name: 'Sat',
    tone: 'bg-[#191919]',
    sessions: [{ title: 'Reading', subject: 'English', duration: '1h' }],
  },
  { name: 'Sun', tone: 'bg-[#191919]', sessions: [] },
]


export default days;

const subjectTone = {
  React: 'bg-[#8274dd] text-white',
  Maths: 'bg-[#1da378] text-white',
  English: 'bg-[#db6136] text-white',
}

export { subjectTone };