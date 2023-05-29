export const getTransition = (
  delay = 0,
  duration = 0.75,
  ease = "easeInOut"
) => {
  return delay, duration, ease;
};

export const sutterDown = () => {
  return {
    from: { opacity: 0, y: "-100%" },
    to: { opacity: 1, y: 0 },
  };
};
