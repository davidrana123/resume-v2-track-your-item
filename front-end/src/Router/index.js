import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddRecords from "../Component/AllRecords";
import Records from "../Component/AddRecords";
import EditRecords from "../Component/EditRecords";
import RecordList from "../Component/RecordList";
import AddItem from "../Component/AddItem";
import AllResult from "../Component/AllResult";
import ScanQR from "../Component/ScanQR";
// import NavBar from "../Layouts/NavBar/NavBar";
import MuiNavBar from '../Layouts/NavBar/index';
import Home from '../Page/Home/index';
import oldversion1 from '../Page/OldVersion/oldversion1';
import LandingPage from '../Component/Home/Home';

function index() {
  return (
    <BrowserRouter>
    {/* <NavBar /> */}
    <MuiNavBar  FontFamilyType={'monospace'} />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/addRecords" component={AddRecords} />
        <Route exact path="/add" component={Records} />
        <Route exact path="/list" component={RecordList} />
        <Route exact path="/item" component={AddItem} />
        <Route exact path="/result" component={AllResult} />
        <Route exact path="/scan" component={ScanQR} />
        <Route exact path="/edit/:id" component={EditRecords} />
        <Route exact path="/oldversion1" component={oldversion1} />
      </Switch>
    </BrowserRouter>
  )
}

export default index