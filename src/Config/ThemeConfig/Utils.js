


export function applyTheme(key, theme) {
    setItemGeneric(key, theme);
    const root = document.documentElement;
    if ( theme !== null) {
      Object.keys(theme).forEach((cssVar) => {
        root.style.setProperty(cssVar, theme[cssVar]);
      });
    }
  }