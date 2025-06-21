export const trackEvent = (name, data = {}) => {
  try {
    umami.track(name, { action: data });
  } catch (error) {}
};