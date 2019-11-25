// retourne un objet où les valeurs des propriétés sont devenues les clés et les clés les valeurs
// { a: "b" } => { b: "a" }

// Solution 1
export function invertKeysAndValuesMine(obj) {
  var arr = Object.entries(obj);
  var result = {};
  for (var index in arr) {
    var item = arr[index];
    Object.assign(result, { [item[1]]: item[0] });
  }
  return result;
}

// Solution 2
export function invertKeysAndValuesMine2(obj) {
  var result = {};
  for (var key in obj) {
    var value = obj[key];
    result[value] = key;
  }
  return result;
}

// solution 1
export function invertKeysAndValues(obj) {
  var newObj = {};
  for (var clé in obj) {
    var valeur = obj[clé];
    newObj[valeur] = clé;
  }
  return newObj;
}

// solution 2 avec reduce
export function invertKeysAndValues2(obj) {
  return Object.entries(obj).reduce(function(newObj, paireCléValeur) {
    var clé = paireCléValeur[0];
    var valeur = paireCléValeur[1];
    newObj[valeur] = clé;
    return newObj;
  }, {});
}

// solution ES2019, pour information
export function invertKeysAndValues3(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([clé, valeur]) => [valeur, clé])
  );
}
