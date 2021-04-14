export function removeUndefined(obj: any) {
  return Object.keys(obj).forEach(
    (key) => obj[key] === undefined && delete obj[key]
  );
}
