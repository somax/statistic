import { deepEqual } from 'assert';

const mockdata: OriginData[] = [
  { id: 1, val: 10 },
  { id: 2, val: 12 },
  { id: 5, val: 15 }
]

const result: AvgData = { id: 5, startId: 1, endId: 10, val: 13.5 }
// plan
import { getAvg, getDiff, getSum } from './statistic';

describe('Statistic', () => {
  describe('getAvg', () => {
    it('should ', () => {
      deepEqual(result, getAvg(mockdata, 1, 10))
    })
  })
})
