import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function CardDisplay(props) {
  const [foodData, setFoodData] = useState([]);
  const [foodCategories, setFoodCategories] = useState([]);

  const loadData = () => {
    fetch("http://localhost:3004/api/foodData", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        // console.log(res.json())
        return res.json();
      })
      .then((resu) => {
        // console.log(resu[0]+"\nHEllo this is middle\n"+resu[1] );
        // console.log(resu)
        setFoodData(resu[0]);
        setFoodCategories(resu[1]);
        // console.log(resu[0] , resu[1])
      });
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      {foodCategories !== [] ? (
        foodCategories.map((data) => {
          return (
            <div className="row mb-3">
              <div key={data._id} className="fs-3 m-3">
                {data.CategoryName}
              </div>
              <hr />
              {foodData !== [] ? (
                foodData
                  .filter((item) => (item.CategoryName === data.CategoryName) &&(item.name.toLowerCase().includes(props.search.toLocaleLowerCase())))
                  .map((filteredItem) => {
                    return (<div key={filteredItem._id} className="col-12 col-md-6 col-lg-3">
                      <Card item={filteredItem}/>

                    </div>);
                  })
              ) : (
                <div>No Such Data</div>
              )}
            </div>
          );
        })
      ) : (
        <div>Category not Found</div>
      )}
    </>
  );
}
