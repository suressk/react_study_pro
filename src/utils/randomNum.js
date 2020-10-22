/**
 * 获取随机整数
 * @param {*} min 
 * @param {*} max 
 */
export function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}