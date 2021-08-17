import { useState } from "react";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const Home = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    new Date("2014-08-18T21:11:54")
  );
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  const theme = useTheme();
  console.log(theme);
  return (
    <Grid container justifyContent='center'>
      <h2>
        Retrieve a list of Asteroids based on their closest approach date to
        Earth.
      </h2>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justifyContent='space-around'>
          <KeyboardDatePicker
            disableToolbar
            variant='inline'
            format='MM/dd/yyyy'
            margin='normal'
            id='date-picker-inline'
            label='Start Date'
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
          <KeyboardDatePicker
            disableToolbar
            variant='inline'
            format='MM/dd/yyyy'
            margin='normal'
            id='date-picker-inline'
            label='End Date'
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </Grid>
  );
};

export default Home;
