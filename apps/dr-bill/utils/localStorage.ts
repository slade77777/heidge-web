export function saveToLocal(
  key: string,
  data: {
    list: number[];
    selected: number;
  },
) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getDataFormLocal(key: string): {
  list: number[];
  selected: number;
} {
  if (!key || typeof window === 'undefined')
    return {
      list: [],
      selected: 0,
    };
  const rawData = localStorage.getItem(key);
  return JSON.parse(rawData);
}
