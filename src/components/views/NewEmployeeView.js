const NewEmployeeView = (props) => {
    const { handleChange, handleSubmit, error } = props;
  
    return (
      <div style={{backgroundColor:"#7A3E3E",color:"#EEEEEE",fontFamily:"courier",margin:0,padding:80}} className="root">
        <div className="formContainer">
          <div className="formTitle">
            <h2
              style={{
                fontWeight: "bold",
                fontFamily: "Courier, sans-serif",
                fontSize: "20px",
                color: "#11153e",
              }}
            >
              New Employee
            </h2>
          </div>
          <form style={{ textAlign: "center" }} onSubmit={(e) => handleSubmit(e)}>
            <label style={{ color: "#11153e", fontWeight: "bold" }}> First Name: </label>
            <input
              type="text"
              name="firstname"
              onChange={(e) => handleChange(e)}
            />
            <br />
            <br />
  
            <label style={{ color: "#11153e", fontWeight: "bold" }}> Last Name: </label>
            <input
              type="text"
              name="lastname"
              onChange={(e) => handleChange(e)}
            />
            <br />
            <br />
  
            <label style={{ color: "#11153e", fontWeight: "bold" }}> Department: </label>
            <input
              type="text"
              name="department"
              onChange={(e) => handleChange(e)}
            />
            <br />
            <br />
  
            <label style={{ color: "#11153e", fontWeight: "bold" }}> Id: </label>
            <input
              type="number"
              name="id"
              onChange={(e) => handleChange(e)}
            />
            <br />
            <br />
  
            <button type="submit">Submit</button>
            <br />
            <br />
          </form>
          {error !== "" && <p>{error}</p>}
        </div>
        <h1 style={{backgroundColor:"#7A3E3E",color:"#EEEEEE",fontFamily:"courier",margin:0,padding:300}}> </h1>
      </div>
    )
  }
  
  export default NewEmployeeView;