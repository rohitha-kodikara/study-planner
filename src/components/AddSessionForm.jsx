import {
  ChevronDown, 
} from 'lucide-react' 

const AddSessionForm = ({   handleSubmit, formData,
  handleFormChange }) => {


  return (
    <section className="mb-[15px] rounded-[16px] border border-[#36404a] bg-gradient-to-br from-[#1d252d] to-[#191d22] p-[13px_15px] shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
          <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-[minmax(0,1fr)_137px_113px_113px_142px]">
            <input
              name="title"
        value={formData.title}
        onChange={handleFormChange}
              aria-label="Title"
              placeholder="Title, e.g. Hooks revision"
              className="h-[45px] min-w-0 rounded-[8px] border border-[#46515b] bg-[#182027] px-[15px] text-[19px] text-white outline-none placeholder:text-[#89939d]"
            />
            <label className="relative">
              <span className="sr-only">Subject</span>
              <select
                name="subject"
        value={formData.subject}
        onChange={handleFormChange}
                className="h-[45px] w-full appearance-none rounded-[8px] border border-[#46515b] bg-[#202a33] px-[15px] text-[18px] font-semibold text-white outline-none">
               <option value=''>subject</option>
                <option value={'Maths'}>Maths</option>
                <option value={'React'}>React</option>
                <option value={'English'}>English</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-3 h-5 w-5" />
            </label>
            <label className="relative">
              <span className="sr-only">Day</span>
              <select
              name="day"
        value={formData.day}
        onChange={handleFormChange}
                className="h-[45px] w-full appearance-none rounded-[8px] border border-[#46515b] bg-[#202a33] px-[15px] text-[18px] font-semibold text-white outline-none">
                <option value=''>day</option>
                <option value="Mon">Mon</option>
                <option value="Tue">Tue</option>
                <option value="Wed">Wed</option>
                <option value="Thu">Thu</option>
                <option value="Fri">Fri</option>
                <option value="Sat">Sat</option>
                <option value="Sun">Sun</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-3 h-5 w-5" />
            </label>
            <label className="relative">
              <span className="sr-only">Duration</span>
              <select
           name="duration"
        value={formData.duration}
        onChange={handleFormChange}
                className="h-[45px] w-full appearance-none rounded-[8px] border border-[#46515b] bg-[#202a33] px-[15px] text-[18px] font-semibold text-white outline-none">
                <option value=''>dur</option>
                <option value="2">2 hrs</option>
                <option value="3">3 hrs</option>
                <option value="4">4 hrs</option>
                <option value="5">5 hrs</option>
                <option value="6">6 hrs</option>
                <option value="8">8 hrs</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-3 h-5 w-5" />
            </label>
            <button  className="h-[45px] cursor-pointer rounded-[8px] border border-[#63bca7] bg-gradient-to-r from-[#239b7a] to-[#1c806d] px-4 text-[16px] font-semibold text-white shadow-[0_4px_12px_rgba(29,163,120,0.2)]">
              Add session
            </button>
          </div>
          </form>
        </section>
  )
}

export default AddSessionForm
