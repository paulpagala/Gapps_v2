import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Paper from '@mui/material/Paper';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import { Link } from '@mui/material';
import { useState } from "react";
import { useDropzone } from 'react-dropzone';
import copy_logo from "/public/clone,-copy,-document,-file.svg";
import Image from 'next/image'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
//
import useLocalStorage from '../hooks/useLocalStorage';



export default function PolicyDetails() {
  const [addParking, setAddParking] = React.useState('');

  const handleChangeAddParking = (event) => {
    setAddParking(event.target.value);
  };

  const [parkingArea, setParkingArea] = useLocalStorage('parkingArea', '');

  const handleChangeParkingArea = (event) => {
    setParkingArea(event.target.value);
  };



  const [changeAddress, setChangeAddress] = useLocalStorage('parkingAddress', '');

  const handleChangeAddress = (event) => {
    setChangeAddress(event.target.value);
  };

  const [areaFloor, setAreaFloor] = React.useState('');

  const handleChangeAreaFloor = (event) => {
    setAreaFloor(event.target.value);
  };

  const [numberOfSlots, setNumberOfSlots] = React.useState();
  const handleChangeNumberOfSlots = (event) => {
    setNumberOfSlots(event.target.value);
  };


  const [state, setState] = React.useState({
    slots: false,
  });

  const handleChangeSlots = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { slots } = state;


  const arr = [];
  const copyArr = [...arr];


  for (let i = 0; i < parseInt(numberOfSlots); i++) {
    copyArr.push({ id: i, desc: [] });
  }
  const [data, setData] = useState(copyArr)
  const onchangeInput = (val, index) => {
    let temp = data;
    temp[index] = val.target.value;
    setData(temp);
    // console.log(temp);
  };


  let element = copyArr.map((value, index) =>

    <Box key={index + 1} sx={{ mb: 3, display: 'flex', flexDirection: "column", alignItems: 'left', alignContent: 'stretch', ml: 2 }}>
      <Typography variant="subtitle1" sx={{ color: 'black' }} gutterBottom>Slot name {index + 1}</Typography>
      <TextField
        id="outlined-parkingName"
        // label=""
        // value={data}
        onChange={(val) => { onchangeInput(val, index) }}
        variant="outlined"
        sx={{ backgroundColor: 'white', width: 326 }}
        placeholder="Enter Slot Name"

      />
    </Box>

  );


  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    accept: {
      'excel': ['.xlsx', '.xls'],
      'csv': ['.csv'],
    }
  });

  const files = acceptedFiles.map(file => (

    <li key={file.path} style={{ borderStyle: 'solid', borderRadius: 7, borderColor: '#C8D7E2', backgroundColor: '#EFF9FF', color: 'black', fontSize: 18, padding: 12, display: 'block', maxWidth: '45%' }}>
      <Image src={copy_logo} alt="copy_logo" width={'15%'} height={'15%'} /> {file.path} <span class="close" style={{ marginLeft: '30%', cursor: 'pointer' }}>&times;</span>
    </li>

  ));

  var closebtns = document.getElementsByClassName("close");
  var i;

  for (i = 0; i < closebtns.length; i++) {
    closebtns[i].addEventListener("click", function () {
      this.parentElement.style.display = 'none';
    });
  }


  return (
    <React.Fragment>
      <Paper variant="outlined" sx={{ my: { md: 3, lg: 5 }, p: { md: 2, lg: 3 } }}>
        <Box>
          <Typography sx={{ ml: 3, fontWeight: 'bold' }}>Parking areas & slots</Typography>
          <Typography sx={{ ml: 3, mt: 2 }}>Select how you will add your parking areas</Typography>
        </Box>
        <FormControl sx={{ ml: 3, display: 'block' }}>
          <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={addParking}
            onChange={handleChangeAddParking}
          >
            <FormControlLabel value="list" control={<Radio />} label="List Manually" />
            <FormControlLabel value="bulk" control={<Radio />} label="Upload bulk list" />
          </RadioGroup>
        </FormControl>
      </Paper>


      {addParking === "list" ?
        (
          <div>
            <Paper variant="outlined" sx={{ my: { md: 0, lg: 0 }, p: { md: 2, lg: 3 } }}>
              <Box sx={{ ml: 3 }}>
                <Typography variant="subtitle1" sx={{ color: 'black' }} gutterBottom> Parking area name </Typography>
                <TextField
                  id="outlined-address"
                  // label="Address (optional)"
                  value={parkingArea}
                  onChange={handleChangeParkingArea}
                  variant="outlined"
                  sx={{ width: 500 }}
                  placeholder="Enter parking area name"
                />
              </Box>
              <Box sx={{ ml: 3, mt: 2 }}>
                <Typography variant="subtitle1" sx={{ color: 'black' }} gutterBottom> Address <em>(optional)</em></Typography>
                <TextField
                  id="outlined-parkingarea"
                  // label="Address (optional)"
                  value={changeAddress}
                  onChange={handleChangeAddress}
                  variant="outlined"
                  sx={{ width: 900 }}
                  placeholder="Enter address"
                />
              </Box>

              <Paper variant="outlined" sx={{ mr: 3, ml: 3, my: { md: 3, lg: 5 }, p: { md: 2, lg: 3 }, backgroundColor: '#FAFAFA' }}>
                <Typography variant="subtitle1" sx={{ color: 'black' }} gutterBottom>Area Floor</Typography>
                <TextField
                  id="outlined-AreaFloor"
                  // label="Area Floor"
                  value={areaFloor}
                  onChange={handleChangeAreaFloor}
                  variant="outlined"
                  placeholder="E.g. P1"
                  sx={{ backgroundColor: '#FFFFFF' }}

                />

                <Typography variant="subtitle1" sx={{ color: 'black' }} gutterBottom>Number of slots</Typography>
                <TextField
                  id="outlined-number"
                  // label="Number of Slots"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={numberOfSlots}
                  onChange={handleChangeNumberOfSlots}
                  sx={{ backgroundColor: '#FFFFFF' }}
                />
                <br />
                <FormControlLabel
                  control={
                    <Checkbox checked={slots} onChange={handleChangeSlots} name="slots" />
                  }
                  label="Add name to slots"
                />

                {slots ? (
                  <Accordion defaultExpanded>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      sx={{ backgroundColor: '#333E5D' }}
                    >
                      <Typography sx={{ color: 'white' }}>{areaFloor} slot names</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Paper variant="outlined" sx={{ mr: 5, ml: 5, my: { md: 1, lg: 3 }, p: { md: 2, lg: 3 }, backgroundColor: '#EFEFEF' }}>
                        {element}
                      </Paper>
                    </AccordionDetails>
                  </Accordion>)
                  :
                  null}

              </Paper>


            </Paper>


          </div>
        )
        : null
      }



      {addParking === 'bulk' ?
        (
          <Paper variant="outlined" sx={{ my: { md: 3, lg: 5 }, p: { md: 2, lg: 3 } }}>
            <Typography component="b1" variant="b1" sx={{ color: 'black' }} gutterBottom>
              Upload list of available parking areas
            </Typography>
            <Typography component="subtitle1" variant="subtitle1" sx={{ color: 'grey', display: 'block' }} gutterBottom>
              Missed the parking areas list template we shared?
            </Typography>
            <Link href='google.com'>Download template</Link>
            <Paper variant="outlined" sx={{ mr: 10, ml: 10, my: { md: 3, lg: 5 }, p: { md: 2, lg: 3 }, backgroundColor: '#FAFAFA' }}>
              <Paper variant="outlined" sx={{ mr: 10, ml: 10, my: { md: 3, lg: 5 }, p: { md: 2, lg: 3 }, backgroundColor: '#FAFAFA', borderStyle: 'dashed', borderRadius: 1, borderColor: 'darkgray' }}>
                <center>
                  <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <p>Drop your file here to upload or</p>
                    <button type="button" onClick={open} style={{ borderStyle: 'solid', borderRadius: 6, borderColor: '#5BADFA', backgroundColor: 'white', color: 'black', fontSize: 15, padding: 12, color: '#5BADFA' }}>
                      Select file from computer
                    </button>
                  </div>
                </center>
              </Paper>
            </Paper>

            <aside>
              <Typography sx={{ ml: 5, mt: 2 }}>File uploaded</Typography>
              <ul>{files}</ul>
            </aside>

          </Paper>)
        : null
      }

    </React.Fragment>
  );
}