import AddRecords from "./Component/AllRecords";
import Records from "./Component/AddRecords";
import EditRecords from "./Component/EditRecords";
import NavBar from "./Component/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScanQR from "./Component/ScanQR";
import RecordList from "./Component/RecordList";
import AddItem from "./Component/AddItem";
import AllResult from "./Component/AllResult";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={AddRecords} />
        <Route exact path="/add" component={Records} />
        <Route exact path="/list" component={RecordList} />
        <Route exact path="/item" component={AddItem} />
        <Route exact path="/result" component={AllResult} />
        <Route exact path="/scan" component={ScanQR} />
        <Route exact path="/edit/:id" component={EditRecords} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
