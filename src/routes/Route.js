import React, {Component} from 'react';
import { Routes, Route, Link,withRouter } from "react-router-dom";
import Header  from '../components/header/header';
import TableBanner from '../components/tableBanner/TableBanner';

function RouteComponent()  {

        return (
            <div>
                <Header />
            <Routes>
                <Route path="/" element={<TableBanner />} />
            <Route path="/all/coins" element={<TableBanner />} />
            </Routes>
            </div>
        )
}

export default (RouteComponent)