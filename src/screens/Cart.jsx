import React from "react";
import { Link } from "react-router-dom";
import { useCart, useDispatchCart } from "../components/ContextReducer";
// impost Delete from './boot'
export default function Cart() {
  const data = useCart();
  const dispatch = useDispatchCart();
  const handleCheckOut = () => {};
  let totalPrice = data.reduce((total, food) => total + food.price, 0);
  return (
    <div>
      {data.length !== 0 ? (
        <div>
          <div className="container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md">
            <table className="table table-hover ">
              <thead className=" text-success fs-4">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Option</th>
                  <th scope="col">Amount</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {data.map((food, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{food.name}</td>
                    <td>{food.qtn}</td>
                    <td>{food.size}</td>
                    <td>{food.price}</td>
                    <td>
                      <button
                        type="button"
                        className="btn bg-danger text-white"
                        onClick={() => {
                          dispatch({ type: "REMOVE", index: index });
                        }}
                      >
                        X
                      </button>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              <h1 className="fs-2">Total Price: Rs.{totalPrice}/-</h1>
            </div>
            <div>
              <button
                className="btn bg-success text-white mt-5 "
                onClick={handleCheckOut}
              >
                {" "}
                Check Out 😍{" "}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-secondary text-center fs-1">
          Your Cart is Empty 🥕 <br />
          <Link to="/" className="btn bg-success text-white">
            Add Items
          </Link>
        </div>
      )}
    </div>
  );
}
