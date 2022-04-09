import React, {useState, useEffect} from "react";
import './CreateItem.css';
import Axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";


function CreateItem () {

    const [item_id, set_id] = useState("");
    const [item_name, set_name ] = useState("");
    const [item_description, set_description] = useState("");
    const [item_price, set_price ] = useState("");
    const [item_stock, set_stock] = useState("");
    const [item_sale, set_sale] = useState("");
    const [item_sale_price, set_sale_price] = useState("");
    const [file, setFile] = useState("");
    const [fileName, setFileName] = useState("");

    let navigate = useNavigate();

    const createItem = () => {
        alert("Item submitted");

        Axios.post("api/insert/item", {
            id : item_id,
            name : item_name,
            description : item_description,
            price : item_price,
            stock : item_stock,
            sale : item_sale,
            sale_price : item_sale_price,
            //image : item_image
        });

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

    return (
        <div className="create_item">
                <h1 className="heading"> Create <span>Item</span></h1>
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
                            placeholder="Item Name"
                            required
                        />

                        <span className="input_label">Item Name:</span>
                        <input 
                            value={item_name} 
                            onChange={event => set_name(event.target.value)}
                            className="item_input" 
                            type="text"
                            placeholder="Item Name"
                            required 
                        />

                        <span className="input_label" >Item Description:</span>
                        <input 
                            value={item_description} 
                            onChange={event => set_description(event.target.value)}
                            className="item_input" 
                            type="text"
                            placeholder="Item Description"
                            required
                        />


                        <span className="input_label" >Item Price</span>
                        <input 
                            value={item_price} 
                            onChange={event => set_price(event.target.value)}
                            className="item_input" 
                            type="text"
                            placeholder="Item Price"
                            required
                        />

                        <span className="input_label" >Item Stock:</span>
                        <input 
                            value={item_stock} 
                            onChange={event => set_stock(event.target.value)}
                            className="item_input" 
                            type="text"
                            placeholder="Item Stock"
                            required
                        />

                        <span className="input_label" >On Sale:</span>
                        <input 
                            value={item_sale} 
                            onChange={event => set_sale(event.target.value)}
                            className="item_input" 
                            type="text"
                            placeholder="On Sale?"
                            required
                        />

                        <span className="input_label" >Item On Sale Price</span>
                        <input 
                            value={item_sale_price} 
                            onChange={event => set_sale_price(event.target.value)}
                            className="item_input" 
                            type="text"
                            placeholder="Item Sale Price"
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

                        <button className="btn" type="submit" onClick={uploadImage} >Create Item</button>
                    {/*</form>*/}

                </div>
        </div>
    );  
}

export default CreateItem;