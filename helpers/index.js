export const getWeekName = (dateStr, locale = 'ru', type = 'short') => {
  if (!dateStr) return;
  const date = new Date(dateStr);
  return date.toLocaleDateString(locale, { weekday: type });
};

export const getLastDayOfMonth = (year, month) => {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
};