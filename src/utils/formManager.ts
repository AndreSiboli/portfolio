export function checkName(value: string, handleErr: (str: string) => void) {
  const regex = /[\p{L} ]/gu;

  if (value.length < 2) return handleErr("The name field is too short.");
  if (value.match(regex)?.length !== value.length)
    return handleErr("The name field only accept letters.");
  return true;
}

export function checkEmail(value: string, handleErr: (str: string) => void) {
  const regex = /[a-z0-9.]/gi;

  if (!value) return handleErr("You need an email.");
  if (value.match(/@/g)?.length !== 1)
    return handleErr('You need just one "@".');
  const [root, domain] = value.split("@");

  //Checking the root
  if (root.match(regex)?.length !== root.length)
    return handleErr("You need an email.");
  if (root.startsWith(".") || root.endsWith("."))
    return handleErr('You may not start or end with a dot before "@".');

  const regexDots = /\.{2,}/;
  if (regexDots.test(root))
    return handleErr("You may not have sequencial dots.");

  //Checking domain
  if (domain.match(/[.]/g)?.length !== 1)
    return handleErr('You need an domain after "@".');
  const [initial, com] = domain.split(".");

  if (!initial) return handleErr("You do not have a domain.");
  if (!com.endsWith("com")) return handleErr('You need finish with ".com".');

  return true;
}

export function checkSubject(value: string, handleErr: (str: string) => void) {
  if (value.length === 0) return handleErr("You need a subject.");
  if (value.length > 255) return handleErr("Too many caracteres in subject.");
  return true;
}
