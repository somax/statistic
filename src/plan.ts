/**
 * 生成计划
 *
 * @param {number} start 开始的编号
 * @param {number} end   结束的编号
 * @param {number} step  步长
 * @returns {planData[]}
 */
export function makePlan(start: number, end: number, step: number): PlanData[] {
    const _plan: PlanData[] = [];
    let i = start;
    while (i + step <= end) {
        _plan.push({
            startId: i,
            endId: i += step
        });
    }
    return _plan;
}
