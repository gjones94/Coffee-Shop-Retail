import { Navigate, useNavigate } from "react-router-dom";


function AdminUser(){
    const [InEmail,setInEmail] = useState("")
    const [Email,setEmail] = useState("")
    const [Password,setPassword]= useState("")
    const [FirstName,setFirstName] = useState("")
    const [LastName,setLastName] = useState("")
    const [Phone,setPhone] = useState("")
    const [Address,setAddress] = useState("")
    const [OldEmail,setOldEmail] = useState("")
    const [OldPassword,setOldPassword]= useState("")
    const [OldFirstName,setOldFirstName] = useState("")
    const [OldLastName,setOldLastName] = useState("")
    const [OldPhone,setOldPhone] = useState("")
    const [OldAddress,setOldAddress] = useState("")
    const [UserID,setUserID] = useState("")
    const [Response,setResponse] = useState("")

    const [UserList, makeList] = useState([])

    const findUser =() =>{
   
        Axios.post("/api/admin/user/find",{

            email: InEmail
            
        }).then((response) => {

          if (response == ""){
            setResponse("User was not found")
             }else{ 
                makeList(response.data)
                console.log(response.data)
                console.log("here")
                UserList.map(val => {

                  
                  setUserID(val.user_id)
                  setOldEmail(val.user_email)
                  setOldFirstName(val.user_first_name)
                  setOldLastName(val.user_last_name)
                  setOldAddress(val.user_address)
                  setOldPhone(val.phone)
                  setOldPassword(val.password)
                 
                });
            }
        });
   
    }
        const updateUser = () =>{
          setUserID(UserID)
            if(Email == ""){
                setEmail(OldEmail)
            }
            if(FirstName == ""){
                setFirstName(OldFirstName)
            }
            if(LastName == ""){
                setLastName(OldLastName)
            }
            if(Phone == ""){
                setPhone(OldPhone)
            }
            if(Address == ""){
                setAddress(OldAddress)
            }
            if(Password == ""){
                setPassword(OldPassword)
            }

            Axios.post("/api/admin/user/update",{
                email:Email,
                firstname:FirstName,
                lastname:LastName,
                phone:Phone,
                address:Address,
                password:Password,
                userID:UserID

            })

        }


    return(

      
        <div className = 'inputs'>
            <h1>email of user</h1>
            <input  
                type="text"
                name="InEmail"
                onChange={(e)=> {
                    setInEmail(e.target.value)
                }}/>

  let navigate = useNavigate();
    const Orders = () => {
    navigate("/orders")
  }
    const Items = () => {
    navigate("/menu:1")
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



export default AdminUser