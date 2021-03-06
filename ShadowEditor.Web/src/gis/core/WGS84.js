/**
 * WGS84
 * @author tengge / https://github.com/tengge1
 * @see https://zhidao.baidu.com/question/535863620.html
 */
var WGS84 = {
    // 长半轴
    a: 6378137,

    // 短半轴
    b: 6356752.3142,

    // 扁率
    alpha: 1 / 298.2572236,

    // 第一偏心率平方 = (a**2 - b**2) / a**2
    e2_1: 0.00669437999013,

    // 第二偏心率平方 = (a**2 - b**2) / b**2
    e2_2: 0.006739496742227,
};

export default WGS84;