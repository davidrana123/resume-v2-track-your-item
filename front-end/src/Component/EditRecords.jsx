import { useState, useEffect } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import { getRecords, editRecords } from "../Service/api";

const initialValue = {
  cat: "",
  desc: "",
};

const useStyles = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      marginTop: 20,
    },
  },
});

const EditData = () => {
  const [detail, setDetail] = useState(initialValue);
  const { cat, desc } = detail;
  const { id } = useParams();
  const classes = useStyles();
  let history = useHistory();

  useEffect(() => {
    loadObjectDetails();
  }, []);

  const loadObjectDetails = async () => {
    const response = await getRecords(id);
    setDetail(response.data);
  };

  const editDetails = async () => {
    const response = await editRecords(id, detail);
    history.push("/");
  };

  const onValueChange = (e) => {
    console.log(e.target.value);
    setDetail({ ...detail, [e.target.name]: e.target.value });
  };

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Edit Information</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">Category</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="cat"
          value={cat}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Desc</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="desc"
          value={desc}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>

      <FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => editDetails()}
        >
          Save Detail
        </Button>
      </FormControl>
    </FormGroup>
  );
};

export default EditData;
