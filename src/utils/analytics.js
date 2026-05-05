export const trackEvent = (name, data = {}) => {
  try {
    umami?.track?.(
      name,
      typeof data === "string" ? { action: data } : data,
    );
  } catch {}
};
