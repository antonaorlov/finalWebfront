import { Link } from 'react-router-dom';



const HomePageView = () => {
  return (
    <div className="bodyelement">
    <h6 className='element'>Final Project</h6>
    <div className="box">
    <Link to={'/employees'} > All Employers </Link>
    <Link to={'/tasks'} > All Tasks </Link>
    </div>
    
  </div>
  );    
}




export default HomePageView;