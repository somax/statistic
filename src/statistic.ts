import { getBetween, getLast } from './data.service';

/**
 * 获取区间差值
 *
 * @param {originData[]} data
 * @param {number} startId
 * @param {number} endId
 * @returns {diffData}
 */
export function getDiff(data: OriginData[], startId: number, endId: number): DiffData {
    let startVal = getLast(data, startId).val;
    let {id, val} = getLast(data, endId);
    return {
        id: id,
        startId: startId,
        endId: endId,
        startVal: startVal,
        endVal: val,
        val: val - startVal
    };
}


/**
 * 获取区间汇总
 *
 * @param {originData[]} data
 * @param {number} startId
 * @param {number} endId
 * @returns {sumData}
 */
export function getSum(data: OriginData[], startId: number, endId: number): SumData {
    let betweenData = getBetween(data, startId, endId)
    let vals = betweenData.map(d => d.val);
    let sumVal = 0;
    let id: number;
    for (let i = 0, l = vals.length; i < l; i++) {
        sumVal = sumVal + vals[i];
        id = betweenData[i].id
    }
    return {
        id: id,
        startId: startId,
        endId: endId,
        val: sumVal
    };
}

/**
 * 获取区间平均值
 *
 * @param {originData[]} data
 * @param {number} start
 * @param {number} end
 * @returns {avgData}
 */
export function getAvg(data: OriginData[], start: number, end: number): AvgData {
    let betweenData = getBetween(data, start, end)
    let vals = betweenData.map(d => d.val);
    let sumVal = 0;
    let id: number;
    for (let i = 0, l = vals.length; i < l; i++) {
        sumVal += vals[i];
        id = betweenData[i].id
    }
    return {
        id: id,
        startId: start,
        endId: end,
        val: sumVal / vals.length
    };
}
