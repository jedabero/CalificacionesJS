/**
 * Created by jedabero on 1/02/17.
 */

function load(key) {
  try {
    return localStorage.getItem(key);
  } catch (err) {
    return null;
  }
}

function save(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (err) {
    // TODO log errors
    console.log(err);
  }
}

export function loadState() {
  const state = load('state');
  return state === null ? undefined : JSON.parse(state);
}
export function saveState(state) {
  const serialized = JSON.stringify(state);
  save('state', serialized);
}

const ids = {};
const exprs = ['grupo', 'periodo', 'asignatura', 'nota'];

exprs.forEach(expr => {
  const prop = `${expr}Id`;
  Object.defineProperty(ids, prop, {
    get: function () {
      const value = load(prop);
      return value === null ? 0 : value;
    },
    set: function (value) {
      save(prop, value)
    }
  });
});

export {ids};