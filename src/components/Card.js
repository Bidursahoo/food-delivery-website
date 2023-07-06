import React, { useState } from "react";
import { useCart, useDispatchCart } from "./ContextReducer";
export default function Card(props) {
  let option = props.item.options;
  let priceOptions = Object.keys(option[0]);
  let dispatch = useDispatchCart();
  const [qnt , setQnt] = useState(0);
  const [size , setSize] = useState("");
  const data = useCart();


  const handleChange = (event)=>{
    const {value , name} = event.target;
    if(name === "size"){
      setSize(value);
      
    }else if(name === "quantity"){
      setQnt(event.target.value);
    }
    
  }

  const handleCart= ()=> {
    if(qnt === ""){
      alert("Please Select A valid Quantity");
    }else if(size ===""){
      alert("Please Enter a valid Size");
    }else{
      let food =[];
      for(const item of data){
        if(item.id === props.item._id){
          food =item;
          break;
        }
      }
      if(food !== []){
        if(food.size === size){
          dispatch({type:"UPDATE" , id:props.item._id , qnt:qnt , price:qnt * parseInt(option[0][size])})
        }else{
          dispatch({type:"ADD" , id:props.item._id , name:props.item.name , qnt:qnt , size:size , price:qnt * parseInt(option[0][size])}) 
        }
      }
      else{
        dispatch({type:"ADD" , id:props.item._id , name:props.item.name , qnt:qnt , size:size , price:qnt * parseInt(option[0][size])})
      }
      
    }
  }
  
  
  
  
  
  return (
    <div className="card mt-3" style={{ width: "18rem", maxHeight: "460px" }}>
      <img src={props.item.img} className="card-img-top img-temp" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.item.name}</h5>
        <p className="card-text">{props.item.description}</p>
        {localStorage.getItem("authTocken") ? (
          <div>
            <div className="container w-100">
              <select className="m-2 h-100  bg-warning rounded" id="" onChange={handleChange} name="quantity">
                <option typeof="default" value="">
                  Quantity
                </option>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>

              <select className="m-2 h-100  bg-warning rounded" onChange={handleChange} name="size">
                <option typeof="default" value="">
                  Select
                </option>
                {priceOptions.map((data) => {
                  return (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  );
                })}
              </select>
              <div className="d-inline h-100 fs-5" >Rs.{(size !== "" && qnt !== 0)? qnt * parseInt(option[0][size]) : "NaN"}/-</div>
            </div>
            <hr />
            <button
              className="btn btn-success justify-center ms-2"
              onClick={handleCart}
            >
              Add To Cart
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
