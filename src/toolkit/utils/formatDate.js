export const formatDate = (value) => {
  if (!value) return "";

  const date = new Date(value);
  const monthNames = ["Jan", "Feb", "March", "April", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

  let hrs = date.getHours();
  let amPm = hrs >= 12 ? "PM" : "AM";
  hrs = hrs ? hrs : "12";
  hrs = hrs > 12 ? hrs - 12 : hrs;

  let min = date.getMinutes();
  min = min < 10 ? "0" + min : min;

  let day = date.getDate();
  const month = monthNames[date.getMonth()];

  return `${hrs}:${min} ${amPm} ${day} ${month}`;
};
