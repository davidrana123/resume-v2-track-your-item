import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddRecords from "../Component/AllRecords";
import Records from "../Component/AddRecords";
import EditRecords from "../Component/EditRecords";
import RecordList from "../Component/RecordList";
import AddItem from "../Component/AddItem";
import AllResult from "../Component/AllResult";
import ScanQR from "../Component/ScanQR";
import ResponsiveAppBar from '../Layouts/NavBar/index';
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
import CRUD from '../Page/crud/index';
import Footer from '../Page/Footer';

function Index() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <ResponsiveAppBar FontFamilyType="monospace" />
        <div style={{ flex: 1, paddingTop: '64px' }}> {/* Adjust paddingTop to match AppBar height */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/storepage" element={<Store />} />
            <Route path="/chatapp" element={<ChatApp />} />
            <Route path="/authHome" element={<AuthHome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/interviewSelection" element={<InterviewHome />} />
            <Route path="/classComponent" element={<ClassComponent />} />
            <Route path="/authentication" element={<Authentication />} />
            <Route path="/reactInterview" element={<ReactInterview />} />
            <Route path="/dsaTable" element={<DsaTable />} />
            <Route path="/track-your-item" element={<Home />} />
            <Route path="/addRecords" element={<AddRecords />} />
            <Route path="/add" element={<Records />} />
            <Route path="/list" element={<RecordList />} />
            <Route path="/item" element={<AddItem />} />
            <Route path="/result" element={<AllResult />} />
            <Route path="/scan" element={<ScanQR />} />
            <Route path="/edit/:id" element={<EditRecords />} />
            <Route path="/oldversion1" element={<oldversion1 />} />
            <Route path="/crud" element={<CRUD />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default Index;