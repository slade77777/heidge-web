export function saveToLocal(
  key: string,
  data: {
    list: string[];
    selected: string;
  },
) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getDataFormLocal(key: string): {
  list: string[];
  selected: string;
} {
  if (!key || typeof window === 'undefined')
    return {
      list: [],
      selected: '',
    };
  const rawData = localStorage.getItem(key);
  return JSON.parse(rawData);
}
