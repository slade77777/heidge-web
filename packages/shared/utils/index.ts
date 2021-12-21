export function classNames(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function scrollToEl(id: string, yOffset?: number) {
  // @ts-ignore
  const section = window.document.getElementById(id) as HTMLElement;

  // @ts-ignore
  const y = section?.getBoundingClientRect().top + window.pageYOffset + (yOffset || 0);
  // @ts-ignore
  window.scrollTo({ top: y, behavior: "smooth" });
}
