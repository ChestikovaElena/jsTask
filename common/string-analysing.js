const path = "/users/download/index.tml";

const isHtml = path => {
  const requiredExit = '.html';
  const pathExt = path.slice(-5);

  return pathExt === requiredExit;
}

console.log(isHtml(path));