function element(id) {
  const e = document.getElementById(id);
  return e;
}

function elementFloat(id) {
  const e = document.getElementById(id);
  const floatE = parseFloat(e);
  return floatE;
}
