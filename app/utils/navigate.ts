const navigateTo = (path: string) => () => {
  window.location.href = path;
};

export default navigateTo;
