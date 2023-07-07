import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MyOrder() {
  const [orderedData, setOrderedData] = useState([]);
  const mail = localStorage.getItem("userEmail");
  const [total, setTotal] = useState(0);
  const [dateTotals, setDateTotals] = useState({});

  useEffect(() => {
    fetch("http://localhost:3004/api/getOrderData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: mail
      })
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error: Unable to fetch data");
        }
      })
      .then((data) => {
        setOrderedData(data.data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, [mail]);

  useEffect(() => {
    let calculatedTotal = 0;
    const dateTotalsObj = {};

    orderedData.forEach((data) => {
      const date = data[0];
      let dateTotal = 0;

      data[1].forEach((order) => {
        dateTotal += order.price;
        calculatedTotal += order.price;
      });

      dateTotalsObj[date] = dateTotal;
    });

    setTotal(calculatedTotal);
    setDateTotals(dateTotalsObj);
  }, [orderedData]);

  return (
    <>
      {localStorage.getItem("authTocken") ? (
        <div>
          <Navbar />
          {orderedData.length > 0 ? (
            <>
              {orderedData.map((data, index) => {
                const date = data[0];

                return (
                  <div key={index} className="text-center">
                    <h2>{date}</h2>
                    <hr />
                    <h3>Order Details:</h3>
                    {data[1].map((order, orderIndex) => (
                      <div
                        key={orderIndex}
                        className="container card mt-4 mb-4"
                        style={{ width: "18rem" }}
                      >
                        <h4 className="card-title">{order.name}</h4>
                        <p className="card-text"> {order.qtn} {"  "} {order.size}</p>
                        <p className="card-text">Price: Rs.{order.price}/-</p>
                      </div>
                    ))}
                    <h4>Total Bill Costs: Rs.{dateTotals[date]}/-</h4>
                    <hr />
                  </div>
                );
              })}
              <h4 className="text-center">Total Bill Costs Till Date You Ordered: Rs.{total}/-</h4>
            </>
          ) : (
            <div>
              <h1 className="text-secondary">Place Your First Order now 😊</h1>
              <Link className="btn bg-success text-white" to="/">
                Place Order
              </Link>
            </div>
          )}
          <Footer />
        </div>
      ) : (
        <div>
          <h1 className="text-warning text-center">
            Where?! 😉 You need to log in to access your order
          </h1>
          <br />
          <Link className="btn bg-success text-white" to="/">
            Home
          </Link>
        </div>
      )}
    </>
  );
}
