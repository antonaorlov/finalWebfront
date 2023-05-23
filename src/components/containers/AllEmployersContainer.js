import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllEmployersThunk } from "../../store/thunks";
import { AllEmployersView } from "../views";


function AllEmployersContainer() {
  const allEmployers = useSelector((state) => state.allEmployers);
  const dispatch = useDispatch();

  //replaces componentDidMount
  useEffect(() => {
    dispatch(fetchAllEmployersThunk());
  }, [dispatch]);

  return <AllEmployersView allEmployers={allEmployers} />;
}


export default AllEmployersContainer;