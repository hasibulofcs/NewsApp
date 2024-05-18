export const dateTimeStringToDate = (dateString) => {
  const dateObj = new Date(dateString);
  const formattedDate = dateObj.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  return formattedDate;
};
