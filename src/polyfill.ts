const obj = {
  Array: Array,
  Date: Date,
  Error: Error,
  Function: Function,
  Math: Math,
  Object: Object,
  RegExp: RegExp,
  String: String,
  TypeError: TypeError,
  setTimeout: setTimeout,
  clearTimeout: clearTimeout,
  setInterval: setInterval,
  clearInterval: clearInterval,
}

// @ts-ignore
Object.assign(global, obj)

// @ts-ignore
if (typeof window === 'object' && typeof window.global === 'object') {
  // @ts-ignore
  Object.assign(window.global, obj)
}
export {}
