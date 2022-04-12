import { Navigate, useNavigate } from "react-router-dom";

function AdminUser(){

  let navigate = useNavigate();
    const Orders = () => {
    navigate("/orders")
  }
    const Items = () => {
    navigate("/menu:admin")
  }

  //<<button className="btn" type="submit" onClick={sortByPrice}>Sort By Price</button>
 
  return (
    <div>
      <h1>Admin Page</h1>
      <button className="btn" type="submit" onClick={Orders} >See Orders</button>
      <button className="btn" type="submit" onClick={Items} >See Items</button>
    </div>
  );
};
  
export default AdminUser;