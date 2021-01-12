
function isPlainObject (obj) {
  if (typeof obj !== "object") {
    return false;
  }
  return Object.getPrototypeOf(obj) === Object.prototype;
}

function getRandomStr (len) {
  return Math.random().toString(36).split("").join(".").substring(2, len + 2);
}

/**
 * 创建 store 函数
 * @param {function} reducer 状态管理 reducer
 * @param {any} initialState 初始默认状态
 * */
export default function createStore (reducer, initialState) {

  let currentReducer = reducer,
    currentState = initialState;
  const listeners = []; // 监听器


  // 分发action
  function dispatch (action) {
    if (!isPlainObject(action)) {
      throw new TypeError("action must be a plain object");
    }
    if (action.type === undefined) {
      throw new TypeError("action must have a property of type");
    }
    currentState = currentReducer(currentState, action);
    // 运行监听函数
    listeners.forEach(listener => listener());
  }

  function getState () {
    return currentState;
  }

  // 添加监听器
  function subscribe (listener) {
    if (typeof listener !== "function") {
      throw new TypeError("The parameter must be a function");
    }
    listeners.push(listener);
    let isRemoved = false;
    return function () {
      if (isRemoved) {
        return;
      }
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    }
  }

  dispatch(currentReducer, {
    type: `@@redux/INIT${getRandomStr(8)}`
  })

  return {
    dispatch,
    getState,
    subscribe
  }
}
