function truncateString(inputString, maxLength) {
  if (inputString?.length <= maxLength) {
    return inputString;
  } else {
    // Truncate the string and append "..." to indicate truncation
    return inputString?.slice(0, maxLength) + "...";
  }
}

export default truncateString;
