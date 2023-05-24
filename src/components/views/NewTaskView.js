const NewTaskView = (props) => {
  const {handleChange, error } = props;

  return (
    <div className="root">
      <div className="formContainer">
        <div className="formTitle">
          <h2 className="element">
            New Task
          </h2>
        </div>
        <form>
          <label className="element"> Description: </label>
          <input className="input" type="text" name="description" onChange ={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label className="element">Priority Level: </label>
          <input  className="input" type="text" name="priority" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label className="element">employeeId: </label>
          <input className="input" type="text" name="employeeId" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <button type="submit">
          <span class="transition"></span>
            <span class="gradient"></span>
            Submit
          </button>
          <br/>
          <br/>
        </form>
        {error!=="" && <p>{error}</p>}
        </div>
        <div></div>
      </div>
    
  )
}

export default NewTaskView;
