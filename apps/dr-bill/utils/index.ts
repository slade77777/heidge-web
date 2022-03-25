export function genSlug(str: string) {
  return str.trim().toLowerCase().replace(/\s/g, '-');
}
export function arr2obj(arr: Array<any>): Record<string, any> {
  if (!arr || !arr?.length) {
    return null;
  }
  return arr.reduce((a, v) => ({ ...a, [v.key.toLowerCase()]: v }), {});
}

export function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function blobToBase64(blob) {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}
