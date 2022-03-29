export function genSlug(str: string) {
  return str.trim().toLowerCase().replace(/\s/g, '-');
}
export function arr2obj(
  arr: Array<any>,
  fieldName: string,
): Record<string, any> {
  if (!arr || !arr?.length) {
    return null;
  }
  return arr.reduce((a, v) => ({ ...a, [v[fieldName].toLowerCase()]: v }), {});
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

export function callConcurrent<T>(promises: Promise<any>[]): Promise<T[]> {
  return Promise.allSettled(promises).then((response) =>
    response
      .filter((p) => p.status === 'fulfilled')
      .map((item: PromiseFulfilledResult<T>) => item.value),
  );
}
