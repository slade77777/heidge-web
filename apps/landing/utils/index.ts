export function classNames(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export function scrollToEl(id: string, yOffset?: number) {
  const section = window.document.getElementById(id) as HTMLElement;

  const y =
    section?.getBoundingClientRect().top + window.pageYOffset + (yOffset || 0);
  window.scrollTo({ top: y, behavior: 'smooth' });
}
