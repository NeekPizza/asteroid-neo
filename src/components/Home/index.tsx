import { useState } from "react";
import axios from "axios";
import format from "utils/formatDate";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import DatePicker from "components/UI/DatePicker";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  marginTopGrid: {
    marginTop: "20px",
  },
});

const Home = () => {
  const classes = useStyles();
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

  const [fetchingData, setFetchingData] = useState<boolean>(false);
  const [neos, setNeos] = useState<{ [key: string]: string } | null>(null);

  console.log(neos);

  const handleFetchNeos = async () => {
    setFetchingData(true);
    try {
      const response = await axios.get(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${format(
          selectedStartDate
        )}${
          selectedEndDate ? `&end_date=${format(selectedEndDate)}` : null
        }&api_key=${process.env.REACT_APP_NASA_API_KEY}`
      );
      setNeos(response.data.near_earth_objects);
    } catch (error) {
      console.log(error);
    }
    setFetchingData(false);
  };

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
      <Grid item className={classes.marginTopGrid}>
        <Button
          onClick={handleFetchNeos}
          variant='contained'
          color='primary'
          disabled={fetchingData}
        >
          Fetch Asteroids
        </Button>
      </Grid>
      {fetchingData && (
        <Grid
          container
          justifyContent='center'
          className={classes.marginTopGrid}
        >
          <CircularProgress />
        </Grid>
      )}
    </Grid>
  );
};

export default Home;
