import React, {useState, useEffect} from "react";
import './CreateItem.css';
import Axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";


function CreateItem () {

    const [item_id, set_id] = useState("");
    const [item_type, set_type] = useState("");
    const [item_name, set_name ] = useState("");
    const [item_description, set_description] = useState("");
    const [item_price, set_price ] = useState("");
    const [item_stock, set_stock] = useState("");
    const [item_sale, set_sale] = useState("");
    const [item_sale_price, set_sale_price] = useState("");
    const [image_file, setImageFile] = useState("");
    const [image_name, setImageName] = useState("");

    let navigate = useNavigate();

    const createItem = () => {
        uploadImage();

        Axios.post("api/insert/item", {
            id : item_id,
            type : item_type,
            name : item_name,
            description : item_description,
            price : item_price,
            stock : item_stock,
            sale : item_sale,
            sale_price : item_sale_price,
            image : image_name
        });

    }
    const uploadImage = event => {
        const data = new FormData();

        data.append('name', image_name);
        data.append('image', image_file); 

        /* debug purposes
        Axios.post("https://httpbin.org/anything", data, {
            
        }).then(res => console.log(res)).catch(err => console.log(err));
        */

        Axios.post("/api/upload/image", 
            data, 
            {
                headers: {
                    "Content-type": "multipart/form-data"
                },
            }
        ).then(res => console.log(res)).catch(err => console.log(err));
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

                        <span className="input_label">Item Type:</span>
                        <input 
                            value={item_type} 
                            onChange={event => set_type(event.target.value)}
                            className="item_input" 
                            type="text"
                            placeholder="Item Type"
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
                            onChange={event => {
                                const file = event.target.files[0];
                                const name = file.name;
                                setImageFile(file);
                                setImageName(name);
                            }}
                            name="Upload File"
                            className="item_input" 
                            type="file"
                            required
                        />

                        <button className="btn" type="submit" onClick={createItem} >Create Item</button>
                    {/*</form>*/}

                </div>
        </div>
    );  
}

export default CreateItem;