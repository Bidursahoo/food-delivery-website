import React from "react";

export default function Card(props) {
  let option = props.item.options;
  let priceOptions = Object.keys(option[0]);

  return (
    <div
      className="card mt-3"
      style={{ width: "18rem", maxHeight: "360px" }}
    >
      <img src={props.item.img} className="card-img-top img-temp"  alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.item.name}</h5>
        <p className="card-text">
          {props.item.description}
        </p>
        <div className="container w-100">
          <select
            className="m-2 h-100  bg-warning rounded"
            name=""
            id=""
          >
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

          <select className="m-2 h-100  bg-warning rounded">
            <option typeof="default" value="">
              Select
            </option>
            {priceOptions.map((data)=>{
              console.log(data)
              return <option key={data} value={data}>{data}</option>
            })}
          </select>
          <div className="d-inline h-100 fs-5">total Price</div>
        </div>
      </div>
    </div>
  );
}
