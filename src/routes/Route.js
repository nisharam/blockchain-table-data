import React, {Component} from 'react';
import { Routes, Route, Link,withRouter } from "react-router-dom";
import Header  from '../components/header/header'

function RouteComponent()  {

        return (
            <Routes>
        <Route path="/" element={<Header />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
        )
}

export default (RouteComponent)