/**
 * 获取最接近给定 id 数据（早于等于）
 *
 * @param {originData[]} data
 * @param {number} id
 * @returns {originData}
 */
export function getLast(data: OriginData[], id: number): OriginData {
    return data
        .filter(d => d.id <= id)
        .pop();
}

/**
 * 获取给定范围的数据（）
 *
 * @param {originData[]} data 输入数据
 * @param {number} startId 开始的编号
 * @param {number} endId 结束的编号
 * @returns {originData[]}
 */
export function getBetween(data: OriginData[], startId: number, endId: number): OriginData[] {
    let preData = getLast(data, startId)
    let preId = preData ? preData.id : startId;
    let _temp = data.filter(_d => _d.id >= preId && _d.id <= endId);
    return _temp;
}

