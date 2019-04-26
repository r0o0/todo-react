// Date Utilities
const todayFullDate = new Date().toString();
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
};
