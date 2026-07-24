import '@gershy/clearing';

export default (str: string, escapeChars: string) => {
  
  // Returns `str` with every character in `new Set([ ...escapeChars, '\\' ])` preceeded by "\"
  
  if (!escapeChars[cl.has]('\\')) escapeChars += '\\';
  
  // The regex to construct must have "\" and "]" escaped:
  const escChars = escapeChars.replace(/([\\\]])/g, '\\$1');
  const reg = new RegExp(`([${escChars}])`, 'g');
  return str.replace(reg, '\\$1');
  
};