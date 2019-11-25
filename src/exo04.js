export function addWatcher(obj, prop, getter, setter) {
  // change le descripteur de la propriété prop de l'objet obj pour appeler les fonctions:
  // - getter lorsque la propriété prop est accédée
  // - setter lorsque la propriété prop est modifiée
  // il doit toujours être possible d'écrire et de lire une valeur pour la propriété prop

  var valueSaved = obj[prop];
  Object.defineProperty(obj, prop, {
    get: function() {
      getter();
      return valueSaved;
    },
    set: function(val) {
      setter();
      valueSaved = val;
    }
  });
}

export function setPrivatesAndConstants(obj) {
  // changer le descripteur de chaque propriété de l'objet:
  // énumérable si la clé ne commence pas par par un _
  // mutable et configurable si la clé ne commence pas par une majuscule (regex: /[A-Z]/)
  for (var key in obj) {
    if (key.startsWith("_")) {
      Object.defineProperty(obj, key, {
        enumerable: false
      });
    }
    /[A-Z]/.test();
  }
}
