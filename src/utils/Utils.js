export const scrollToDiv = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
    const offset = -50;
    window.scrollTo({
      top: elementTop + offset,
      behavior: "smooth",
    });
  }
};
