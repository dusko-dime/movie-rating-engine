import moment from 'moment';
const defaultFormat = 'DD.MM.YYYY.';

export const formatDate = (date: Date, dateFormat: string = defaultFormat) => {
  return moment(date).format(defaultFormat);
};
