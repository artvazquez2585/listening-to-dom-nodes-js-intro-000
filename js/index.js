// using this file is optional
// you can also load the code snippets in using your browser's console
//moved function to JS and left event listeners in html
function bubble(e) {
  // stop! that! propagation!
  e.stopPropagation();

  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}
