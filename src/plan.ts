/**
 * 生成计划
 * 
 * @param {number} start 
 * @param {number} end 
 * @param {number} step 
 * @returns {planData[]} 
 */
export function makePlan(start: number, end: number, step: number): planData[] {
    let _plan: planData[] = [];
    let i = start;
    while (i + step <= end) {
        _plan.push({
            startId: i,
            endId: i += step
        })
    }
    return _plan;
}
