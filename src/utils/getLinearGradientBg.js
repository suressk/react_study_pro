/**
 * 获取线性渐变某一点背景色
 * @param {*} colors 颜色值及颜色位置点数组
 * @param {*} percent 获取背景点位置占比点
 * @param {*} width 创建的 canvas 宽度（也是最后颜色值总个数）
 * @param {*} height 创建的 canvas 高度（1px 即可）
 */
export function getLinearGradientBg(colors, percent, width = 100, height = 1) {
    if (!Array.isArray(colors)) {
        throw new Error(
            `The type of the first parameter must be a object Array, it should be same as: [{color: '#f00', stop: 0.1}]`
        );
    }
    if (typeof percent !== "number") {
        throw new Error(
            `The type of the second parameter must be a number, such as 0.25`
        );
    }
    const canvas = document.createElement("canvas");
    canvas.setAttribute("width", width);
    canvas.setAttribute("height", height);
    const ctx = canvas.getContext("2d");
    // 创建线性渐变
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    colors.forEach(item => {
        gradient.addColorStop(item.stop, item.color); // 添加关键帧颜色点
    });
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height); // 填充 1px 高的矩形
    // 所有像素颜色值
    const imageData = ctx.getImageData(0, 0, width, height).data;
    const len = imageData.length;
    let res = [];
    for (let i = 0; i < len; i += 4) {
        res.push(
            `rgba(${imageData[i]}, ${imageData[i + 1]}, ${imageData[i + 2]}, ${
                imageData[i + 3]
            })`
        );
    }
    const resLen = res.length;
    if (percent <= 0) {
        return res[0];
    } else if (percent >= 1) {
        return res[resLen - 1];
    } else {
        const index = Math.round(resLen * percent);
        return res[index];
    }
}
