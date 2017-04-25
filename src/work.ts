/**
 * 执行计划
 *
 * @param {originData[]} data 输入原始数据
 * @param {planData[]} plan 统计汇总计划
 * @param {Function} cb 处理数据的回调方法
 * @returns {any[]} 返回处理完成结果
 */
export function work(data: OriginData[], plan: PlanData[], cb: Function): any[] {
    let _result = [];
    for (let i = 0, l = plan.length; i < l; i++) {
        let p = plan[i];
        _result.push(cb(data, p.startId, p.endId));

    }
    return _result;
}
