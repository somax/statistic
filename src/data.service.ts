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
 * @param {originData[]} data
 * @param {number} startId
 * @param {number} endId
 * @returns {originData[]}
 */
export function getBetween(data: OriginData[], startId: number, endId: number): OriginData[] {
    let preId = getLast(data, startId).id
    let _temp = data.filter(_d => _d.id >= preId && _d.id <= endId);
    return _temp;
}

