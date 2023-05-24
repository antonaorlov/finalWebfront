import { Link } from 'react-router-dom';



const HomePageView = () => {
  return (
    <div className="bodyelement">
    <h6 className='element'>Final Project</h6>
    <div className="box">
    <Link className="element" to={'/employees'} > All Employers </Link>
    <Link className="element" to={'/tasks'} > All Tasks </Link>
    </div>
    
  </div>
  );    
}




export default HomePageView;