export const useDate = ():object => {
  const getWeekName = (
    dateStr: string,
    locale: string = "ru",
    type: "narrow" | "short" | "long" = "short"
  ):string | undefined => {
    if (!dateStr) return;
    const date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: type });
  };

  const getLastDayOfMonth = (year: number, month: number):number | undefined => {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  };

  return { getWeekName, getLastDayOfMonth };
};
