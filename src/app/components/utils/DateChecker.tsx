export const checkDate = (endDate: string) => {
  const currentDate = new Date();
  const targetDate = new Date(endDate);
  return currentDate < targetDate;
}; 