const path = "/users/download/index.html";

function isHtml(path) {
  if (path.endsWith(".html")) {
    return true;
  } else {
    return false;
  }
}

console.log(isHtml(path));