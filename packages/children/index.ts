export default (html: string) => {
  const result = [];
  let stack = 0;
  let start = 0;

  // Iterate through each character in the HTML string
  for (let i = 0; i < html.length; i += 1) {
    // Check for the opening of a tag
    if (html[i] === "<") {
      // Handle closing tags by decrementing the stack
      if (html[i + 1] === "/") stack -= 1;
      // Handle opening tags by incrementing the stack and marking the start of a new tag
      else if ((stack += 1) === 1) start = i;
    }
    // Handle self-closing tags by decrementing the stack
    if (html[i] === "/" && html[i + 1] === ">") stack -= 1;
    // When the stack is zero and a closing ">" is found, push the tag to the result
    if (stack === 0 && html[i] === ">") result.push(html.slice(start, i + 1));
  }

  // Return no results for unbalanced HTML
  if (stack !== 0) return [];

  // Return the array of extracted child elements
  return result;
};
