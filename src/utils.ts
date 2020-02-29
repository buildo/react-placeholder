export const joinClassNames = (...classNames: (string | undefined)[]) =>
  classNames.filter(c => c).join(' ');
