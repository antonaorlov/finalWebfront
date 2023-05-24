import { Link } from 'react-router-dom';



const HomePageView = () => {
  return (
    <div>
      <h6 style={{backgroundColor:"#47A992",color:"#482121",fontFamily:"courier",margin:0,padding:50}}>Final Project</h6>
      <Link style={{backgroundColor:"#7A3E3E",color:"#EEEEEE",fontFamily:"courier",display:"block",padding:35}} to={'/employees'} > All Employees </Link>
      <Link style={{backgroundColor:"#482121",color:"#EEEEEE",fontFamily:"courier",display:"block",padding:35}} to={'/tasks'} > All Tasks </Link>
      <h6 style={{backgroundColor:"#47A992",color:"#482121",fontFamily:"courier",margin:0,padding:300}}></h6>
    </div>
  );    
}




export default HomePageView;