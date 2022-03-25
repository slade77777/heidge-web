type DomType = string | React.ReactDOM;

export function scrollToElement(domTarget: DomType, yOffset?: number) {
  let section;
  if (typeof domTarget === "string") {
    section = window.document.getElementById(domTarget) as any;
  } else {
    section = domTarget;
  }
  const y =
    section?.getBoundingClientRect().top + window.pageYOffset + (yOffset || 0);
  window.scrollTo({ top: y, behavior: "smooth" });
}
