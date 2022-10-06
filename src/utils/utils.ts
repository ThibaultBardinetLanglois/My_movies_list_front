export const truncateText = (str: string | undefined): string => {
  return (str !== undefined && str.length > 0) ? str.split(".")[0] + "." : "There is no summary for this movie yet.";
}