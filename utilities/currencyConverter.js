export const currencyConverter = (
  amout,
  locale = "un-US",
  currency = "USD"
) => {
  return amout?.toLocaleString(locale, {
    style: "currency",
    currency,
  });
};
