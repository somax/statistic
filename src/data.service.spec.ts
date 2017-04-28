import { deepEqual } from 'assert';
import { getBetween, getLast } from './data.service';

const mockdata: OriginData[] = [
    { id: 1, val: 10 },
    { id: 3, val: 13 },
    { id: 5, val: 15 }
]

const resultBetween: OriginData[] = [
    { id: 1, val: 10 },
    { id: 3, val: 13 },
    { id: 5, val: 15 }
]
const resultBetween3: OriginData[] = [
    { id: 3, val: 13 },
    { id: 5, val: 15 }
]
const resultBetween5: OriginData[] = [
    { id: 5, val: 15 }
]

const resultLast: OriginData = { id: 1, val: 10 };
const resultLast5: OriginData = { id: 5, val: 15 };

describe('Data.service', () => {
    describe('getLast', () => {
        it('应该获取 null', () => {
            deepEqual(null, getLast(mockdata, 0))
        });
        it('应该获取 id 等于 1 记录', () => {
            deepEqual(resultLast, getLast(mockdata, 1))
        });
        it('应该获取 id 最接近 2 的前一条记录', () => {
            deepEqual(resultLast, getLast(mockdata, 2))
        });
        it('应该获取最后一条记录', () => {
            deepEqual(resultLast5, getLast(mockdata, 10))
        });
    });
    describe('getBetween', () => {
        it('应该获取 id 最接近 0 的开始的记录', () => {
            deepEqual(resultBetween, getBetween(mockdata, 0, 10))
        });
        it('应该获取 id 最接近 2 的开始的记录', () => {
            deepEqual(resultBetween, getBetween(mockdata, 2, 10))
        });
        it('应该获取 id 最接近 3 的开始的记录', () => {
            deepEqual(resultBetween3, getBetween(mockdata, 3, 10))
        });
        it('应该获取 id 最接近 5 的开始的记录', () => {
            deepEqual(resultBetween5, getBetween(mockdata, 5, 10))
        });
    });

});
