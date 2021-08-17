import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import DatePicker from "components/UI/DatePicker";

const Home = () => {
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(
    new Date()
  );
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);

  const handleStartDateChange = (date: Date | null) => {
    setSelectedStartDate(date);
  };

  const handleEndDateChange = (date: Date | null) => {
    setSelectedEndDate(date);
  };

  console.log(selectedStartDate, selectedEndDate);

  return (
    <Grid container justifyContent='center'>
      <h2>
        Retrieve a list of Asteroids based on their closest approach date to
        Earth.
      </h2>
      <Grid container justifyContent='space-around'>
        <DatePicker
          id='start-date'
          label='Start Date'
          value={selectedStartDate}
          handleChange={handleStartDateChange}
        />
        <DatePicker
          id='end-date'
          label='End Date'
          value={selectedEndDate}
          handleChange={handleEndDateChange}
        />
      </Grid>
    </Grid>
  );
};

export default Home;
