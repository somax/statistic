// 模拟数据，读数值
export const mockData: originData[] = (function () {
    let _data = [];
    let v = 100;
    for (let i = 0; i < 1000; i++) {
        v += Math.round(Math.random() * 100);
        _data.push({
            id: i,
            val: v
        })
    }
    return _data;
})()
