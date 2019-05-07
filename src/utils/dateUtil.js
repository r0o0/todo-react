// Date Utilities
import moment from 'moment';

const todayFullDate = moment().format('llll');
const todaySimpleDate = moment().format('D');
// const yesterday = moment().subtract(1, todayFullDate).calendar();
const yesterday = moment().subtract(1, 'days').calendar();

const isDateToday = (toCompare) => {
  let render;
  const today = todayFullDate.substr(0, 16);
  const date = toCompare.substr(9, 1);
  if (toCompare.substr(0, 16) === today) {
    render = 'Today';
  } else if (date - todaySimpleDate === -1) {
    render = 'Yesterday';
  } else if (date - todaySimpleDate ===  1) {
    render = 'Tomorrow';
  } else {
    render = toCompare.substr(0, 16);
  }
  return render;
};

const getMonth = () => {
  const current = new Date().getMonth();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return months[current].substr(0, 3);
};

const todayDate = new Date().getDate();
const todayMonth = getMonth();


export {
  todayFullDate,
  todayDate,
  todayMonth,
  isDateToday,
};
