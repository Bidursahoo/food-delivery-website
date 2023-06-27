import React from "react";

export default function Card() {
  return (
    <div
      className="card mt-3"
      style={{ width: "18rem", maxHeight: "360px" }}
    >
      <img src="https://source.unsplash.com/random/50×50/?paneer" className="card-img-top "  alt="..." />
      <div className="card-body inline">
        <h5 className="card-title">Card Title</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur,
          reiciendis.
        </p>
        <div className="container w-100">
          <select
            className="m-2 h-100  bg-warning rounded float-start"
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

          <select className="m-2 h-100  bg-warning rounded float-start">
            <option typeof="default" value="">
              Size
            </option>
            <option value="1/2">Half</option>
            <option value="1">Full</option>
          </select>
          <div className="d-inline fs-5">total Price</div>
        </div>
      </div>
    </div>
  );
}
