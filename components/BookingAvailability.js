import * as React from 'react';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel';
import useLocalStorage from '../hooks/useLocalStorage';




const BookingAvailability = props => {

 const [bookingScheduleStart, setBookingScheduleStart] = useLocalStorage('bookingScheduleStart','');
  const handleChangeBookingScheduleStart = (event) => {
    setBookingScheduleStart(event.target.value);
  };

  const [bookingScheduleEnd, setBookingScheduleEnd] = useLocalStorage('bookingScheduleEnd','');
  const handleChangeBookingScheduleEnd = (event) => {
    setBookingScheduleEnd(event.target.value);
  };

  

    return(
        <Box sx={{mb:3,display:'flex',flexDirection:"row", alignItems: 'center', alignContent: 'stretch' }}>
          <Box sx={{width:100}}>
          <Typography sx={{color:'black',ml:3}}>{props.day}</Typography>
          </Box>
          <FormControl sx={{my:2, ml: 3.5, alignItems:'center'}}>
          <InputLabel id="demo-simple-select-label">Select time</InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth-label"
                      value={bookingScheduleStart}
                      onChange={handleChangeBookingScheduleStart}
                      label="Select time"
                      sx={{width:150}}
                      // placeholder='Select time'
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={1}>7:00 AM</MenuItem>
                      <MenuItem value={2}>7:30 AM</MenuItem>
                      <MenuItem value={3}>8:00 AM</MenuItem>
                      <MenuItem value={4}>8:30 AM</MenuItem>
                      <MenuItem value={5}>9:00 AM</MenuItem>
                      <MenuItem value={6}>9:30 AM</MenuItem>
                      <MenuItem value={7}>10:00 AM</MenuItem>
                      <MenuItem value={8}>10:30 AM</MenuItem>
                      <MenuItem value={9}>11:00 AM</MenuItem>
                      <MenuItem value={10}>11:30 AM</MenuItem>
                      <MenuItem value={11}>12:00 NN</MenuItem>
                      <MenuItem value={12}>1:00 PM</MenuItem>
                      <MenuItem value={13}>1:30 PM</MenuItem>
                      <MenuItem value={14}>2:00 PM</MenuItem>
                      <MenuItem value={15}>2:30 PM</MenuItem>
                      <MenuItem value={16}>3:00 PM</MenuItem>
                      <MenuItem value={17}>3:30 PM</MenuItem>
                      <MenuItem value={18}>4:00 PM</MenuItem>
                      <MenuItem value={19}>4:30 PM</MenuItem>
                      <MenuItem value={20}>5:00 PM</MenuItem>
                      <MenuItem value={21}>5:30 PM</MenuItem>
                      <MenuItem value={22}>6:00 PM</MenuItem>
                    </Select>
          </FormControl>
          <Typography sx={{color:'black',ml:3}}>-</Typography>
          <FormControl sx={{my:2, ml: 3.5, alignItems:'center'}}>
          <InputLabel id="demo-simple-select-label">Select time</InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth-label"
                      value={bookingScheduleEnd > bookingScheduleStart ? bookingScheduleEnd : null}
                      onChange={handleChangeBookingScheduleEnd}
                      label="Select time"
                      sx={{width:150}}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={1}>7:00 AM</MenuItem>
                      <MenuItem value={2}>7:30 AM</MenuItem>
                      <MenuItem value={3}>8:00 AM</MenuItem>
                      <MenuItem value={4}>8:30 AM</MenuItem>
                      <MenuItem value={5}>9:00 AM</MenuItem>
                      <MenuItem value={6}>9:30 AM</MenuItem>
                      <MenuItem value={7}>10:00 AM</MenuItem>
                      <MenuItem value={8}>10:30 AM</MenuItem>
                      <MenuItem value={9}>11:00 AM</MenuItem>
                      <MenuItem value={10}>11:30 AM</MenuItem>
                      <MenuItem value={11}>12:00 NN</MenuItem>
                      <MenuItem value={12}>1:00 PM</MenuItem>
                      <MenuItem value={13}>1:30 PM</MenuItem>
                      <MenuItem value={14}>2:00 PM</MenuItem>
                      <MenuItem value={15}>2:30 PM</MenuItem>
                      <MenuItem value={16}>3:00 PM</MenuItem>
                      <MenuItem value={17}>3:30 PM</MenuItem>
                      <MenuItem value={18}>4:00 PM</MenuItem>
                      <MenuItem value={19}>4:30 PM</MenuItem>
                      <MenuItem value={20}>5:00 PM</MenuItem>
                      <MenuItem value={21}>5:30 PM</MenuItem>
                      <MenuItem value={22}>6:00 PM</MenuItem>
                    </Select>
          </FormControl>   
        </Box>
    );
}

export default BookingAvailability;