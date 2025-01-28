"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { kE } from "./../../../node_modules/culori/src/dlch/constants";

const MealsData = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  // for load data
  const fetchData = async () => {
    const response = await axios(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );
    console.log(response.data);
    setData(response.data.meals);
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  return (
    <div>
      <div className="w-1/2 mx-auto text-center mt-5 space-y-2">
        <h1 className="text-4xl">Our Meals</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          ipsa vero aliquam! Omnis expedita quod recusandae accusantium laborum
          officia culpa exercitationem quasi vitae. Incidunt quisquam deserunt
          non magni reiciendis nisi.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-5 px-16 mt-10">
        {data.map((meal) => (
          <div key={meal.idMeal} className="card bg-base-100 shadow-xl">
            <figure>
              <img className=""
                src={meal.strMealThumb}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealsData;
