import { pathToRegexp } from "path-to-regexp";

/*
* 匹配路径（返回 match 对象）
* @param {*} path 路径匹配规则
* @param {*} pathname 真实路径
* @param {*} options 配置参数 { exact: true, sensitive: true, strict: true }
* */
export default function matchPath(path, pathname, options = {}) {
  const keys = []; // 存储匹配的 key
  const regExp = pathToRegexp(path, keys, getOptions(options));
  const result = regExp.exec(pathname);
  // 未匹配
  if (result === null) {
    return null;
  }
  // 匹配成功
  const groups = Array.from(result).slice(1);
  const params = getParams(groups, keys);
  return {
    params,
    isExact: result[0] === pathname,
    url: result[0],
    path
  }
}

/*
* 获取 path-to-regexp 的配置参数
* @param {*} options
* */
function getOptions(options = {}) {
  const defaultOptions = {
    sensitive: false,
    strict: false,
    exact: false
  };
  const opts = { ...defaultOptions, ...options };
  return {
    sensitive: opts.sensitive,
    strict: opts.strict,
    end: opts.exact
  };
}

/*
* 获取 params 对象
* @param {*} groups 路径匹配分组
* @param {*} keys 路径匹配的键名数组
* */
function getParams(groups, keys) {
  const obj = {};
  groups.forEach((value, i) => {
    const name = keys[i].name;
    obj[name] = value;
  });
  return obj;
}

// const res = matchPath("/news/:id/:page", "/news/suer/15/ash");
// console.log(res);
