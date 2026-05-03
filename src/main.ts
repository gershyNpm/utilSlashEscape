import '@gershy/clearing';

// TODO: HEEERE2:
// - ctrl+shift+f for:
//    | 
//    | "git[.]pub":
//    | 
// - Surfaces all files that haven't been updated with manager's template
// - Clean em all up
// - Make lilacLambda *happen*

export default (str: string, escapeChars: string) => {
  if (!escapeChars[cl.has]('\\')) escapeChars += '\\';
  
  // The regex to construct must have "\" and "]" escaped:
  const escChars = escapeChars.replace(/([\\\]])/g, '\\$1');
  const reg = new RegExp(`([${escChars}])`, 'g');
  return str.replace(reg, '\\$1');
};