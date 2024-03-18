import useFetch from "../hooks/useFetch"


const CreateWord = () => {
    const days=useFetch("http://localhost:3000/days")

  return (
  <form>
    <div className="input_area">
    <label>Eng</label>
    <input type='text' placeholder="computer"/>
    </div>
    <div className="input_area">
    <label>Kor</label>
    <input type='text' placeholder="컴퓨터"/>
    </div>

    <div className="input_area">
    <label>Day</label>
    <select>
  
    {days.map(day=>(

        <option key={day.id} value={day.day}>{day.day}</option>
    ))}
    </select>
    </div>
    <button>저장</button>
  </form>
  )
}

export default CreateWord

