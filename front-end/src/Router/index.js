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
import DsaTable from '../Component/Dsa_expriment/DsaTable';
import InterviewHome from '../Component/Home/InterviewHome';
import ReactInterview from '../Component/ReactPractics/ReactInterview';
import ClassComponent from '../Component/ReactPractics/ClassComponent';
import Authentication from '../Component/Authentication/AuthenticationComp';
import AuthHome from '../Component/Authentication/AuthHome';
import SignUp from '../Component/Authentication/SignUp';
import Login from '../Component/Authentication/Login';
import ChatApp from '../Page/ChatApp/index';
import Store from '../Page/Store/index';

function index() {
  return (
    <BrowserRouter>
    <MuiNavBar  FontFamilyType={'monospace'} />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/storepage" component={Store} />
        <Route exact path="/chatapp" component={ChatApp} />
        <Route exact path="/authHome" component={AuthHome} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/interviewSelection" component={InterviewHome} />
        <Route exact path="/classComponent" component={ClassComponent} />
        <Route exact path="/authentication" component={Authentication} />
        <Route exact path="/reactInterview" component={ReactInterview} />
        <Route exact path="/dsaTable" component={DsaTable} />
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