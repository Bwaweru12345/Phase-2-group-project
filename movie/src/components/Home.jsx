// This is the landing page

import React from "react";
import Body from "./Body";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Sort from "./Sort";
import Filter from "./Filter";


const Home = () => {
    return (

        <div>
            <Navbar/>
            <Sort/>
            <Body/>
            <Filter/>
            <Contact/>
        </div>
        


        // =======begin of footer==============

        // =======end of footer================


    );
}

export default Home;