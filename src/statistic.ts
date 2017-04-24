import { getLast, getBetween } from "./data.service";

/**
 * 获取区间差值
 * 
 * @param {originData[]} data 
 * @param {number} startId 
 * @param {number} endId
 * @returns {diffData} 
 */
export function getDiff(data: originData[], startId: number, endId: number): diffData {
    let startVal = getLast(data, startId).val;
    let endVal = getLast(data, endId).val;
    return {
        id: endId,
        startId: startId,
        endId: endId,
        startVal: startVal,
        endVal: endVal,
        val: endVal - startVal
    }
}


/**
 * 获取区间汇总
 * 
 * @param {originData[]} data 
 * @param {number} startId 
 * @param {number} endId
 * @returns {sumData} 
 */
export function getSum(data: originData[], startId: number, endId: number): sumData {
    let vals = getBetween(data, startId, endId).map(_d => _d.val)
    let sumVal = 0;
    for (var i = 0, l = vals.length; i < l; i++) {
        sumVal += vals[i];
    }
    return {
        id: endId,
        startId: startId,
        endId: endId,
        val: sumVal
    }
}

/**
 * 获取区间平均值
 * 
 * @param {originData[]} data 
 * @param {number} start 
 * @param {number} end 
 * @returns {avgData} 
 */
export function getAvg(data: originData[], start: number, end: number): avgData {
    let vals = getBetween(data, start, end).map(d => d.val)
    let sumVal = 0;
    for (var i = 0, l = vals.length; i < l; i++) {
        sumVal += vals[i];
    }
    return {
        id: end,
        startId: start,
        endId: end,
        val: sumVal / vals.length
    }
}