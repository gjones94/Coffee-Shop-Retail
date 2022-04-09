import React, {useState, useEffect} from "react";
import './CreateItem.css';
import Axios from 'axios';
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";


function ModifyItem () {

    const [item_id, set_id] = useState("");
    const [item_type, set_type] = useState("");
    const [item_name, set_name ] = useState("");
    const [item_description, set_description] = useState("");
    const [item_price, set_price ] = useState("");
    const [item_stock, set_stock] = useState("");
    const [item_sale, set_sale] = useState("");
    const [item_sale_price, set_sale_price] = useState("");
    const [file, setFile] = useState("");
    const [fileName, setFileName] = useState("");
    const [isLoading, setLoading] = useState(true);

    let navigate = useNavigate();

    let {id} = useParams();

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = () =>{
        Axios.get("/api/get/inventory").then( //calls the backend server.js with this api command
            (response) => {
                let items = JSON.parse(JSON.stringify(response.data));
                console.log(items);

                items.map(item => {
                    if(item.item_id === id){
                        set_id(item.item_id);
                        set_type(item.item_type);
                        set_name(item.item_name);
                        set_description(item.item_description);
                        set_price(item.item_price);
                        set_stock(item.item_stock);
                        set_sale(item.item_onsale);
                        set_sale_price(item.item_saleprice)
                    }
                    
                });

                loaded();
            }
        );
    }

    const modifyItem = () => {
        console.log("Param_id is", id);
        console.log("Item id is", item_id);
        
        console.log("Updated Parameters");
        console.log(item_id);
        console.log(item_type);
        console.log(item_name);
        console.log(item_description);
        console.log(item_price);
        console.log(item_stock);
        console.log(item_sale);
        console.log(item_sale_price);

        Axios.post("api/modifyItem", {
            id : item_id,
            name : item_name,
            type : item_type,
            description : item_description,
            price : item_price,
            stock : item_stock,
            sale : item_sale,
            sale_price : item_sale_price,
            //image : item_image
        });

    }

    const loading = () =>{
        setLoading(true);
    }

    const loaded = () => {
        setLoading(false);
    }


    const uploadImage = async e => {
        e.preventDefault();
        const data = new FormData();
        console.log("File", file);

        data.append('file',file); 
        data.append('key', 'value');

        for(var pair in data.entries()){
            console.log(pair[0]+', '+pair[1]);
        }

        await axios.post("/api/upload/image", data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

    const inputFileChange = e =>{
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    }

    if (isLoading){
        //returns only this until data is done loading
        return <div className="App">Fetching Data...</div>;
    }

    return (
        <div className="create_item">
                <h1 className="heading"> Modify <span>Item</span></h1>
                <div className="create_page">

                    <div className="logo">
                        <img className="create_logo" src="./images/logo.png" alt="" />
                    </div>

                    {/*<form>*/}

                        <span className="input_label" >Item ID:</span>
                        <input 
                            value={item_id} 
                            onChange={event => set_id(event.target.value)}
                            className="item_input" 
                            type="text"
                            placeholder={item_id}
                            required
                        />

                        <span className="input_label">Item Type:</span>
                        <input 
                            value={item_type} 
                            onChange={event => set_type(event.target.value)}
                            className="item_input" 
                            type="text"
                            placeholder={item_type}
                            required 
                        />

                        <span className="input_label">Item Name:</span>
                        <input 
                            value={item_name} 
                            onChange={event => set_name(event.target.value)}
                            className="item_input" 
                            type="text"
                            placeholder={item_name}
                            required 
                        />

                        <span className="input_label" >Item Description:</span>
                        <textarea
                            value={item_description} 
                            onChange={event => set_description(event.target.value)}
                            className="item_description" 
                            placeholder={item_description}
                            required
                        />


                        <span className="input_label" >Item Price</span>
                        <input 
                            value={item_price} 
                            onChange={event => set_price(event.target.value)}
                            className="item_input" 
                            type="text"
                            placeholder={item_price}
                            required
                        />

                        <span className="input_label" >Item Stock:</span>
                        <input 
                            value={item_stock} 
                            onChange={event => set_stock(event.target.value)}
                            className="item_input" 
                            type="text"
                            placeholder={item_stock}
                            required
                        />

                        <span className="input_label" >On Sale:</span>
                        <input 
                            value={item_sale} 
                            onChange={event => set_sale(event.target.value)}
                            className="item_input" 
                            type="text"
                            placeholder={item_sale}
                            required
                        />

                        <span className="input_label" >Item On Sale Price</span>
                        <input 
                            value={item_sale_price} 
                            onChange={event => set_sale_price(event.target.value)}
                            className="item_input" 
                            type="text"
                            placeholder={item_sale_price}
                            required
                        />

                        <span className="input_label" >Item Image</span>
                        <input 
                            onChange={inputFileChange}
                            name="Upload File"
                            className="item_input" 
                            type="file"
                            required
                        />

                        <button className="btn" type="submit" onClick={modifyItem} >Update Item</button>
                    {/*</form>*/}

                </div>
        </div>
    );  
}

export default ModifyItem;