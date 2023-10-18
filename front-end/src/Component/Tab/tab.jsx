import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import AllRecords from '../../Component/AllRecords';
import AddRecords from '../../Component/AddRecords';
import AddItem from '../../Component/AddItem';
import EditRecords from '../../Component/EditRecords';
import { NavLink } from "react-router-dom";
import DsaTable from '../../Component/Dsa_expriment/DsaTable';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    // console.log(index)
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue)
    setValue(newValue);
  };
  



  return (
    <Card>
    <Box sx={{ width: 'fullWidth', typography: 'body1' }} >
        <Box  sx={{
            flexGrow: 1,
            maxWidth: { xs: 1600, sm: 1600 },
            bgcolor: 'background.paper',
            marginLeft: '10px'
          }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile>
          {/* <Tab style={{ margin:'20px' }} className='space-between' label="DSA Table" {...a11yProps(0)} /> */}
          <Tab style={{ margin:'20px' }} className='space-between' label="Add Records" {...a11yProps(1)} />
          <Tab style={{ margin:'20px' }} className='space-between' label="Add Item" {...a11yProps(2)} />
          <Tab style={{ margin:'20px' }} className='space-between' label="Edit Records" {...a11yProps(3)} />
          <Tab style={{ margin:'20px' }} className='space-between' label="All Records " {...a11yProps(4)} />
        </Tabs>
      </Box>
      {/* <TabPanel value={value} index={0}>
      <DsaTable /> 
      </TabPanel> */}
      <TabPanel value={value} index={1} >
        <AddRecords />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AddItem />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <EditRecords />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <AllRecords />
      </TabPanel>
      </Box>
    </Card>
  );
}

