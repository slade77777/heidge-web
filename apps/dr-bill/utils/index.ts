export function genSlug(str: string) {
  return str.trim().toLowerCase().replace(/\s/g, '-');
}
