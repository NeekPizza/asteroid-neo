import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

interface Props {
  id: string;
  label: string;
  value: Date | null;
  handleChange: (date: Date | null) => void;
}

const DatePicker = ({ id, label, value, handleChange }: Props) => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <KeyboardDatePicker
      disableToolbar
      variant='inline'
      format='MM/dd/yyyy'
      margin='normal'
      id={id}
      label={label}
      value={value}
      onChange={handleChange}
      KeyboardButtonProps={{
        "aria-label": "change date",
      }}
    />
  </MuiPickersUtilsProvider>
);

export default DatePicker;
