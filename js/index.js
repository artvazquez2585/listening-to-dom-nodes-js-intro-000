// using this file is optional
// you can also load the code snippets in using your browser's console
function bubble(e) {
  // stop! that! propagation!
  e.stopPropagation();

  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}
