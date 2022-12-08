import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Paper from '@mui/material/Paper';
import CircleIcon from '@mui/icons-material/Circle';

import ToggleButton from '@mui/material/ToggleButton';
import Button from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link'
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { useGlobalContext } from '../context/global';
import { useRouter } from 'next/router';





export default function ParkiongArea() {
  const [selected, setSelected] = React.useState(false);
  const [filterActive, setFilterActive] = React.useState();
  // const router = useRouter();

  const handleChangeFilterActive = (event) => {
    setFilterActive(event.target.value);
  };
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#6F8191',
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
      backgroundColor: '#EDF3F8',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const slotNames = JSON.parse(window.localStorage.getItem('slotnames'))
  const numberOfSlots = parseInt(JSON.parse(window.localStorage.getItem('numberofslots')))

  function createData(slotId, slotName, status, action) {
    return { slotId, slotName, status, action };
  }

  const rows = [];
  for (let i = 1; i <= numberOfSlots; i++) {
    // Add each number to the array
    rows.push(createData('MCHD00' + i, slotNames[i - 1], 'Active', 'pj'));
  }

  // let textFields = array.map((value, index) => (

  // ));
  // const rows = [
  //   createData('MCHD001', 'N/A', 'Active', 'pj'),
  //   // createData('The Globe Tower', 'Not Specified', 'Active','pj'),
  //   // createData('Three Parkade', 'H23X+5HH, Taguig, Metro Manila','Active','pj'),
  // ];
  //   const {serviceFee} = useGlobalContext();

  // console.log(slotNames[0])

  return (
    <React.Fragment>
      <Box sx={{ width: "90%", height: "5%", ml: '5%', mr: '5%', mt: '8%', borderRadius: '50%' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Typography sx={{ color: '#6F8191', fontSize: 17 }}>Parking</Typography>
          <Typography sx={{ color: '#6E7C9D', ml: '1%', fontSize: 17 }}>{'>'}</Typography>
          <Typography sx={{ color: '#222222', fontWeight: 'bold', ml: '1%', fontSize: 17 }}>MC Home Depot</Typography>
          {/* <Typography sx={{color:'black'}}>{data}</Typography> */}
        </Box>
        <Paper variant="outlined" sx={{ my: { md: 1, lg: 3 }, p: { md: 2, lg: 3 } }}>
          <Box sx={{ display: 'flex', flexDireciton: 'row', ml: 2 }}>
            <Typography component="h3" variant="h3" align="left" sx={{ color: 'black', fontWeight: 'bold' }}>
              MC Home depot
            </Typography>
            <ToggleButton
              value="check"
              selected={selected}
              onChange={() => {
                setSelected(!selected);
              }}
              sx={{ ml: "50%", borderColor: '#61B6EC', borderRadius: 2 }}
            >
              <Typography sx={{ color: "#61B6EC", fontSize: 17 }}>Switch to inactive</Typography>
            </ToggleButton>
            <Button variant="outlined" sx={{ ml: 5, width: '100px', borderRadius: 2 }}>
              <Typography sx={{ color: "#61B6EC", fontSize: 17 }}>Edit</Typography>
            </Button>
            <Button variant="outlined" sx={{ ml: 5, width: '100px', borderRadius: 2 }}>
              <Typography sx={{ color: "#61B6EC", fontSize: 17 }}>Delete</Typography>
            </Button>
          </Box>


          <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2, ml: 2 }}>
            <Typography component="h6" variant="h6" sx={{ color: 'black' }} >
              Status
            </Typography>
            <Typography component="h6" variant="h6" sx={{ ml: 10, color: 'black' }} >
              Address
            </Typography>

          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', ml: 2 }}>
            <Box sx={{ width: 100 }}>
              {selected ? (<CircleIcon sx={{ fontSize: 10, color: 'grey', mt: 1 }} />) : (<CircleIcon sx={{ fontSize: 10, color: '#00DE9A', mt: 1 }} />)}
              <Typography component="subtitle1" variant="subtitle1" sx={{ ml: 0.5, color: 'grey' }} gutterBottom>
                {selected ? "Inactive" : "Active"}
              </Typography>
            </Box>
            <Typography component="subtitle1" variant="subtitle1" sx={{ ml: 5, color: 'grey' }} gutterBottom>
              32nd St, Justicia Dr, Taguig, 1634 Metro Manila
            </Typography>

          </Box>
        </Paper>
      </Box>
      <Typography sx={{ fontWeight: 'bold', ml: '5%', color: 'black', pb: 2 }}> Area floors</Typography>
      <Box sx={{ width: '90%', margin: 'auto' }}>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ backgroundColor: '#3D4E5D' }}
          >
            <Typography sx={{ color: 'white' }}>1F (1 slot/s)</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer sx={{ width: '95%', margin: 'auto', my: '2%' }} component={Paper}>
              <Box sx={{ display: 'flex', flexDirection: 'row', ml: '2%', alignItems: 'center' }}>
                <FormControl variant="outlined">
                  <Input
                    id="input-with-icon-adornment"
                    placeholder='Type search here'
                    startAdornment={
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <Typography sx={{ color: 'black', ml: '5%' }}>Filter by:</Typography>
                <FormControl sx={{ my: 2, ml: 3.5, minWidth: '120px', backgroundColor: 'white' }}>
                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth-label"
                    value={filterActive}
                    onChange={handleChangeFilterActive}
                    label="Status"
                  >
                    <MenuItem value={true}>Active</MenuItem>
                    <MenuItem value={false}>Inactive</MenuItem>
                  </Select>
                </FormControl>
                <Button variant="text" sx={{ ml: '57%', textDecoration: 'underline', color: '#5BADFA', fontSize: 17 }}>+Add new slot</Button>
              </Box>
              <Table sx={{ minWidth: 500 }} aria-label="customized table">
                <TableHead>
                  <TableRow >
                    <StyledTableCell sx={{ fontSize: 17 }}>Slot ID</StyledTableCell>
                    <StyledTableCell align="left" sx={{ fontSize: 17 }}>Slot name</StyledTableCell>
                    <StyledTableCell align="left" sx={{ fontSize: 17 }}>Status</StyledTableCell>
                    <StyledTableCell align="left" sx={{ fontSize: 17 }}>Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (

                    <StyledTableRow key={row.slotId}>
                      <StyledTableCell component="th" scope="row" sx={{ fontSize: 16 }}>
                        <Link href='/parkingArea' style={{ textDecoration: 'none', color: 'black' }}>{row.slotId}</Link>
                      </StyledTableCell>
                      <StyledTableCell align="left" sx={{ fontSize: 16 }}>{row.slotName}</StyledTableCell>
                      <StyledTableCell align="left">
                        <Box sx={{ width: 100 }}>
                          {/* {selectedParking ? (<CircleIcon sx={{ fontSize: 10, color:'grey', mt:1}}/>) : (<CircleIcon sx={{ fontSize: 10, color:'#00DE9A', mt:1}}/>)} */}
                          <CircleIcon sx={{ fontSize: 10, color: '#00DE9A', mt: 1 }} />
                          <Typography component="subtitle1" variant="subtitle1" sx={{ ml: 0.5 }} gutterBottom>
                            {/* {selectedParking ? "Inactive" : "Active"} */}
                            Available
                          </Typography>
                        </Box>
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {/* <ToggleButton
                            value="check"
                            selected={selectedParking}
                            onChange={() => {
                                setSelectedParking(!selectedParking);
                            }}
                            sx={{borderWidth:0}}
                            >
                        <Typography sx={{color:"#61B6EC",fontSize:17}}>Switch to inactive</Typography>
                        </ToggleButton> */}
                        <Button variant="text" sx={{ textDecoration: 'underline', color: '#5BADFA', fontSize: 17 }}>Delete</Button>
                      </StyledTableCell>
                    </StyledTableRow>

                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      </Box>
      {/* <Typography sx={{color:'black'}}>{serviceFee}</Typography> */}
    </React.Fragment>
  )
}
