function updateTheme(theme) {
  if (theme == "auto") {
    theme = (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
  }

  if (theme != "light") {
    document.documentElement.setAttribute("data-theme", theme);
  } else {
    document.documentElement.removeAttribute("data-theme");
  }

  if (chart_instance && chart_options) {
    chart_instance.options = chart_options;
    chart_instance.update();
  }
}


$(document).ready(function () {
  i18next.init((err, t) => {
    setupTheming();
  });
});