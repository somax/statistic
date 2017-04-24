/**
 * 执行计划
 * 
 * @param {originData[]} data 
 * @param {planData[]} plan 
 * @param {Function} cb 
 * @returns {any[]} 
 */
export function work(data: originData[], plan: planData[], cb: Function): any[] {
    let _result = [];
    for (let i = 0, l = plan.length; i < l; i++) {
        let p = plan[i];
        _result.push(cb(data, p.startId, p.endId))

    }
    return _result;
}
