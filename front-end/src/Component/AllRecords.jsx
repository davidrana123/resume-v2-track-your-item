import { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
  makeStyles,
} from "@material-ui/core";
import { getRecords, deleteRecord } from "../Service/api";
import { Link } from "react-router-dom";
import QRCode from "qrcode";
import { green } from '@mui/material/colors';

const useStyles = makeStyles({
  table: {
    width: "80%",
    margin: "50px 0 0 50px",
    borderRadius:"50px"
  },
  thead: {
    "& > *": {
      fontSize: 20,
      background: "red",
      color: "#FFFFFF",
      borderRadius: "20px"
    },
  },
  row: {
    "& > *": {
      fontSize: 18,
    },
  },
});

const AllData = () => {
  const [Details, setDetails] = useState([]);
  const classes = useStyles();
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    let response = await getRecords();
    // console.log('response from all recod',response.data)
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

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow className={classes.thead}>
          <TableCell>Id</TableCell>
          <TableCell>Category</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>QR & More</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Details.map((detail) => (
          <TableRow className={classes.row} key={detail.id}>
            <TableCell>{detail._id}</TableCell>
            <TableCell>{detail.cat}</TableCell>
            <TableCell>{detail.desc}</TableCell>
            <TableCell>
              <Button
                // className={classes.btn}
                style={{ backgroundColor: green[500] }}
                variant="contained"
                onClick={() => generateQrCode(detail._id)}
                download
                href={imageUrl} 
              >
                QR Code
              </Button>{" "}
              <Button
                color="primary"
                variant="contained"
                style={{ marginRight: 10 }}
                component={Link}
                to={`/edit/${detail._id}`}
              >
                Edit
              </Button>{" "}
              <Button
                color="secondary"
                variant="contained"
                onClick={() => deleteDatas(detail._id)}
              >
                Delete
              </Button>{" "}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AllData;
