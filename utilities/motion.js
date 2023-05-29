export const getTransition = (delay = 0, duration = 1, ease = "easeInOut") => {
  return delay, duration, ease;
};

export const sutterDown = () => {
  return {
    from: { opacity: 0, y: "-100%" },
    to: { opacity: 1, y: 0 },
  };
};

export const sutterUp = () => {
  return {
    from: { y: "200", opacity: 0 },
    to: { y: 0, opacity: 1 },
  };
};
