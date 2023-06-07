export const getTransition = (
  delay = 2.5,
  duration = 2.5,
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

export const sutterUp = () => {
  return {
    from: { y: "200%", opacity: 0 },
    to: { y: 0, opacity: 1 },
  };
};

export const sutterLeft = () => {
  return {
    from: { x: "-200%", opacity: 0 },
    to: { x: 0, opacity: 1 },
  };
};

export const sutterRight = () => {
  return {
    from: { x: "200%", opacity: 0 },
    to: { x: 0, opacity: 1 },
  };
};
