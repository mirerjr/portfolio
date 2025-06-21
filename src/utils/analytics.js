export const trackEvent = (name, data = {}) => {
  try {
    umami.track(name, data);
  } catch (error) {}
};