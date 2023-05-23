
const NewTaskView = (props) => {
  const {handleChange, handleSubmit, error } = props;

  return (
    <div className="root">
      <div className="formContainer">
        <div className="formTitle">
          <h2  className="h21" style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
            New Task
          </h2>
        </div>
        <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
          <label className="labels-1" style= {{color:'#11153e', fontWeight: 'bold'}}>Description </label>
          <input className="input1" type="text" name="title" onChange ={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label className="labels-1" style={{color:'#11153e', fontWeight: 'bold'}}>Priority </label>
          <input className="input1" type="text" name="timeslot" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label className="labels-1" style={{color:'#11153e', fontWeight: 'bold'}}>IsComplete </label>
          <input className="input1" type="text" name="instructorId" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <button type="submit">
            Submit
          </button>
          <br/>
          <br/>
        </form>
        {error!=="" && <p>{error}</p>}
        </div>
      </div>
    
  )
}

export default NewTaskView;

