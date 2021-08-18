import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Asteroid from "typings/Asteroid";

interface Props {
  rows: Asteroid[];
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const DenseTable = ({ rows }: Props) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size='small' aria-label='a dense table'>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Velocity (mph)</TableCell>
            <TableCell>Miss Earth By (mi)</TableCell>
            <TableCell>Is Potentially Dangerous</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell>
                {parseFloat(
                  row.close_approach_data[0].relative_velocity.miles_per_hour
                ).toFixed(2)}
              </TableCell>
              <TableCell>
                {parseFloat(
                  row.close_approach_data[0].miss_distance.miles
                ).toFixed(2)}
              </TableCell>
              <TableCell>
                {row.is_potentially_hazardous_asteroid ? "True" : "False"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DenseTable;
