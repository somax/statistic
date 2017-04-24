import './interface';
import { mockData } from './mockdata';
import { work } from "./work";
import { makePlan } from "./plan";
import { getLast, getBetween } from "./data.service";
import { getDiff, getSum, getAvg } from "./statistic";

const START_ID = 30;
const END_ID = 900;
const STEP_A = 30;
const STEP_B = 120;

// 先做汇总
let planA = makePlan(START_ID, END_ID, STEP_A)
let resultA = work(mockData, planA, getDiff);
console.log(`间隔 ${STEP_A} 增量：`, resultA.map(d => `${d.id}:${d.val}`));

// 在做统计
let planB = makePlan(START_ID, END_ID, STEP_B)
let resultSum = work(resultA, planB, getSum);
let resultAvg = work(resultA, planB, getAvg);
console.log(`间隔 ${STEP_B} 增量汇总：`, resultSum.map(d => `${d.id}:${d.val}`));
console.log(`间隔 ${STEP_B} 增量平均：`, resultAvg.map(d => `${d.id}:${d.val}`));

