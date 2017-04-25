import { deepEqual } from 'assert';

const mockdata: OriginData[] = [
  { id: 1, val: 10 },
  { id: 4, val: 14 },
  { id: 5, val: 15 }
]

const avgResult: AvgData = { id: 5, startId: 1, endId: 10, val: 13 }
const diffResult: DiffData = { id: 5, startId: 1, endId: 10, startVal: 10, endVal: 15, val: 5 }
const sumResult: SumData = { id: 5, startId: 1, endId: 10, val: 39 }

import { getAvg, getDiff, getSum } from './statistic';

describe('Statistic', () => {
  describe('getAvg', () => {
    it('should equal result', () => {
      deepEqual(avgResult, getAvg(mockdata, 1, 10))
    })
  })

  describe('getDiff', () => {
    it('should equal result', () => {
      deepEqual(diffResult, getDiff(mockdata, 1, 10))
    });
  });

  describe('getSum', () => {
    it('should equal result', () => {
      deepEqual(sumResult, getSum(mockdata, 1, 10))
    });
  });
})
