'use strict';

let simpleObj = {},
  offProtoObj = Object.setPrototypeOf({}, null),
  map = new Map(),
  n = 100;
  // n = 10000;
  // n = 10000000;

// console.time('loop');
for (let i = 0; i < n; i++) {
  simpleObj[i] = i;
  offProtoObj[i] = i;
  map.set(i, i);
}
// console.timeEnd('loop');

/* ==== add new key to object ==== */
console.time('Object');
simpleObj.key = 101;
console.timeEnd('Object')

console.time('ObjectNull');
offProtoObj.key = 101;
console.timeEnd('ObjectNull')

console.time('ObjectMap');
map.set('key', 101);
console.timeEnd('ObjectMap')


/* ==== read key from object ==== */
console.time('Object');
console.log(simpleObj.key);
console.timeEnd('Object');

console.time('ObjectNull');
console.log(offProtoObj.key);
console.timeEnd('ObjectNull');

console.time('ObjectMap');
console.log(map.get('key'));
console.timeEnd('ObjectMap');


/* ==== delete key from object ==== */
console.time('Object');
delete simpleObj.key;
console.timeEnd('Object');

console.time('ObjectNull');
delete offProtoObj.key;
console.timeEnd('ObjectNull');

console.time('ObjectMap');
map.delete('key');
console.timeEnd('ObjectMap');


/* ==== convert object to array ==== */
function convertToArray(obj) {
  if (obj instanceof Map) {
    return Array.from(obj, ([key, value]) => ([key, value]));
  }

  return Object.entries(obj);
};

console.time('Object converted to array =');
convertToArray(simpleObj);
console.timeEnd('Object converted to array =');

console.time('ObjectNull converted to array =');
convertToArray(offProtoObj);
console.timeEnd('ObjectNull converted to array =');

console.time('ObjectMap converted to array =');
convertToArray(map);
console.timeEnd('ObjectMap converted to array =');

// console.log(Array.from(map, ([key, value]) => ([key, value])));


/* ==== convert object to map ==== */
function convertObjectToMap(obj) {
  return new Map(Object.entries(obj));
}

console.time('convertObjectToMap Usual');
convertObjectToMap(simpleObj);
console.timeEnd('convertObjectToMap Usual')

console.time('convertObjectToMap Null');
convertObjectToMap(offProtoObj);
console.timeEnd('convertObjectToMap Null');


/* ==== convert map to object ==== */
function convertMapToObject(map) {
  const newObj = {};
  for (const [key, value] of map) {
    if (typeof key === 'string') {
      newObj[key] = value;
    }
  }

  return newObj;
}

console.time('convertMapToObject');
convertMapToObject(map);
console.timeEnd('convertMapToObject');
