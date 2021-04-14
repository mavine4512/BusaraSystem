function capitalizeFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function findReplace(word: string) {
  if (word === 'phone_number') {
    return `(+2547) ${word.replace('_', ' ')}`;
  }

  return word.replace('_', ' ');
}

export function dynamicFindReplace(word: string, replace: string) {
  return capitalizeFirstLetter(word.replace(replace, ' '));
}
