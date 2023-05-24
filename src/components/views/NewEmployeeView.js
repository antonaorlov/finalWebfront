const NewEmployeeView = (props) => {
    const { handleChange, handleSubmit, error } = props;
  
    return (
      <div>
        <div className="formContainer">
          <div className="formTitle">
            <h2 className="element">
              New Employee
            </h2>
          </div>
          <form style={{ textAlign: "center" }} onSubmit={(e) => handleSubmit(e)}>
            <label className='element' style={{ color: "#11153e", fontWeight: "bold" }}> First Name: </label>
            <input
              type="text"
              name="firstname"
              className="input"
              onChange={(e) => handleChange(e)}
            />
            <br />
            <br />
  
            <label className='element'  style={{ color: "#11153e", fontWeight: "bold" }}> Last Name: </label>
            <input
              type="text"
              name="lastname"
              className="input"
              onChange={(e) => handleChange(e)}
            />
            <br />
            <br />
      
            <label className='element' style={{ color: "#11153e", fontWeight: "bold" }}> Department: </label>
            <input 
              type="text"
              className="input"
              name="department"
              onChange={(e) => handleChange(e)}
            />
            <br />
            <br />
       

            <label className='element label' style={{ color: "#11153e", fontWeight: "bold" }}> Id: </label>
         
            <input
              type="number"
              className="input"
              name="id"
              onChange={(e) => handleChange(e)}
            />
        
            <br />
            <br />
          
  
            <button type="submit">
            <span class="transition"></span>
            <span class="gradient"></span>
              Submit</button>
            <br />
            <br />
          </form>
          {error !== "" && <p>{error}</p>}
        </div>
      
      </div>
    )
  }
  
  export default NewEmployeeView;