function CurrentDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours() + 1).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}`;
  return formattedDateTime;
}

export default CurrentDate;
