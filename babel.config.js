module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
};

/**
 *
 */

const obj1 = {
  name: "111",
  age: "111",
  friend: { name: "wenhuo", age: "15" },
};

const ob2 = deepclone(obj1);

function deepclone(obj = {}) {
  if (typeof obj !== "Object" || obj == null) {
    return obj;
  }

  let result;
  if (obj instanceof Array) {
    result = [];
  } else {
    result = {};
  }

  for (let key in obj) {
    if (obj.hasOwnproperty(key)) {
      result[key] = deepclone(obj[key]);
    }
  }

  return result;
}
