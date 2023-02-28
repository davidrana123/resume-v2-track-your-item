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

const useStyles = makeStyles({
  table: {
    width: "90%",
    margin: "50px 0 0 50px",
  },
  thead: {
    "& > *": {
      fontSize: 20,
      background: "#000000",
      color: "#FFFFFF",
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
                className={classes.btn}
                variant="contained"
                color="success"
                onClick={() => generateQrCode(detail._id)}
              >
                QR Code
                <a href={imageUrl} download>
                  <button onClick={() => generateQrCode(detail._id)} download>
                    Download
                  </button>
                </a>
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
              {/* change it to user.id to use JSON Server */}
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
