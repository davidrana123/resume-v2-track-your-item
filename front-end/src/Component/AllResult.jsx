import { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
  makeStyles,
  Select,
  MenuItem,
  Box,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import { getRecords, deleteRecord, addRecords, addItems } from "../Service/api";
import QRCode from "qrcode";
import { useHistory } from "react-router-dom";
import RecordList from "./RecordList";
import AddItem from "./AddItem";

//new data
const initialValue = {
  cat: "",
  desc: "",
};

// var cat = lo;
// var desc = po;
//end new data

const useStyles = makeStyles({
  fcon: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      marginTop: 24,
    },
  },
  btn: {
    width: "20%",
    margin: "5% 0 0 25%",
    "& > *": {
      marginTop: 20,
    },
  },
});

const AllResult = () => {
  const [Details, setDetails] = useState([]);
  const [list, setList] = useState([]);
  const classes = useStyles();
  const [imageUrl, setImageUrl] = useState("");

  ///new data
  const [data, setData] = useState(initialValue);
  const [value, setValue] = useState(2);
  const [save, setSave] = useState([]);
  const { cat, desc } = data;
  let history = useHistory();
  console.log(data);

  const onValueChange = (e) => {
    console.log(e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const addDetails = async () => {
    // setSave(save);
    await addItems(data);
    history.push("/list");
    // alert("Add info");
  };
  console.log(addDetails);

  const fo = "Item";
  const so = "Location";

  /// end new data

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    let response = await getRecords();
    setDetails(response.data);
  };

  const deleteDatas = async (id) => {
    await deleteRecord(id);
    getAllData();
  };

  const generateQrCode = async (id) => {
    try {
      const response = await QRCode.toDataURL(id.toString());
      console.log(id);
      setImageUrl(response);
    } catch (error) {
      console.log(error);
    }
  };

  //mui
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  //end

  return (
    <>
      {/* <RecordList info={data} /> */}
      {/* <Select displayEmpty onChange={onValueChange} name="cat" value={cat}>
        {Details.filter((lo) => lo.cat == "Location").map((filterNam) => (
          <MenuItem value={filterNam.desc}>{filterNam.desc}</MenuItem>
        ))}
        {Details.filter((it) => it.cat == "Item").map((filterit) => (
          <MenuItem value={filterit.desc}>{filterit.desc}</MenuItem>
        ))}
      </Select> */}

      {/* <Select displayEmpty onChange={onValueChange} name="cat" value={cat}>
        {Details.filter((it) => it.cat == "Item").map((filterit) => (
          <MenuItem value={filterit.desc}>{filterit.desc}</MenuItem>
        ))}
      </Select> */}

      <Box sx={{ minWidth: 120 }}>
        <FormControl className={classes.fcon}>
          <h4>Item</h4>
          <InputLabel
            className={classes.ib}
            id="demo-simple-select-label"
          ></InputLabel>
          <Select
            displayEmpty
            onChange={onValueChange}
            name="desc"
            value={desc}
          >
            {Details.filter((it) => it.cat == "Item").map((filterit) => (
              <MenuItem value={filterit.desc}>{filterit.desc}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ minWidth: 120 }}>
        <FormControl className={classes.fcon}>
          <h3>Location</h3>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select displayEmpty onChange={onValueChange} name="cat" value={cat}>
            {Details.filter((lo) => lo.cat == "Location").map((filterNam) => (
              <MenuItem value={filterNam.desc}>{filterNam.desc}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* <Box sx={{ minWidth: 120 }}>
        <FormControl className={classes.fcon}>
          <InputLabel id="demo-simple-select-label">Items</InputLabel>
          <Select displayEmpty onChange={onValueChange} name="cat" value={cat}>
            {Details.filter((it) => it.cat == "Item").map((filterit) => (
              <MenuItem value={filterit.desc}>{filterit.desc}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box> */}

      {/* {Details.map((detail) => (
          <TableRow className={classes.row} key={detail.id}>
            <TableCell>{detail._id}</TableCell>
            <TableCell>{detail.cat}</TableCell>
            <TableCell>{detail.desc}</TableCell>
            <TableCell></TableCell> */}

      <Button
        className={classes.btn}
        variant="contained"
        color="primary"
        onClick={() => addDetails()}
      >
        Save
      </Button>
      {/* new data */}
    </>
  );
};

export default AllResult;
