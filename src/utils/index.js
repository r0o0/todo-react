// add class
const addClass = (target, classname) => {
  if (target !== null) {
    const targetClass = target.classList;
    targetClass.add(classname);
  }
};

// remove class
const removeClass = (target, classname) => {
  if (target !== null) {
    const targetClass = target.classList;
    const check = targetClass.contains(classname);
    if (check) {
      targetClass.remove(classname);
    }
  }
};

export {
  addClass,
  removeClass,
};
