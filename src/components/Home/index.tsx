import { useState } from "react";
import axios from "axios";
import formatDate from "utils/formatDate";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import DatePicker from "components/UI/DatePicker";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Asteroid from "typings/Asteroid";
import DenseTable from "components/UI/DenseTable";

const useStyles = makeStyles({
  accordionContainer: {
    width: "100%",
    marginTop: "20px",
  },
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
  const [neos, setNeos] = useState<{ [key: string]: Asteroid[] } | null>(null);

  const handleFetchNeos = async () => {
    setFetchingData(true);
    setNeos(null);
    try {
      const response = await axios.get(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${formatDate(
          selectedStartDate,
          "yyyy-MM-dd"
        )}${
          selectedEndDate
            ? `&end_date=${formatDate(selectedEndDate, "yyyy-MM-dd")}`
            : null
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
      <Grid container>
        {neos && (
          <div className={classes.accordionContainer}>
            {Object.keys(neos)
              .sort()
              .map((key: string) => (
                <Accordion key={key}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                  >
                    <p>{key}</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <DenseTable rows={neos[key]} />
                  </AccordionDetails>
                </Accordion>
              ))}
          </div>
        )}
      </Grid>
    </Grid>
  );
};

export default Home;
