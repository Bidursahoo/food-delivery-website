import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import CardDisplay from "../components/CardDisplay";

export default function Home() {
  const [search , setSearch]= useState('');


  return (
    <div>
      <div>
        <Navbar search = {search} setSearch = {setSearch} />
      </div>
      <div>
        <Carousel />
      </div>
      <div className="container">
        <CardDisplay search = {search}/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
