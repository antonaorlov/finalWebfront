const NewTaskView = (props) => {
  const {handleChange, handleSubmit, error } = props;

  return (
    <div className="root">
      <div className="formContainer">
        <div className="formTitle">
          <h2 style={{backgroundColor:"#47A992",color:"#482121",fontFamily:"courier",margin:0,padding:50}}>
            New Task
          </h2>
        </div>
        <form style={{backgroundColor:"#47A992",color:"#482121",fontFamily:"courier",margin:0,padding:80}}>
          <label style= {{color:'#11153e', fontWeight: 'bold'}}>Description: </label>
          <input type="text" name="description" onChange ={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Priority Level: </label>
          <input type="text" name="priority" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>employeeId: </label>
          <input type="text" name="employeeId" onChange={(e) => handleChange(e)} />
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
        <div style={{backgroundColor:"#47A992",color:"#482121",fontFamily:"courier",margin:0,padding:300}}></div>
      </div>
    
  )
}

export default NewTaskView;
