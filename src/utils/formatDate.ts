import format from "date-fns/format";

const formatDate = (date: Date | null, dateFormat: string) => {
  if (date) {
    return format(date, dateFormat);
  }
};

export default formatDate;
