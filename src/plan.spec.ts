import { deepEqual } from 'assert';

// plan
import { makePlan } from './plan';

const result = [
    { startId: 0, endId: 5 },
    { startId: 5, endId: 10 }
]
describe('Plan', () => {
  describe('makePlan', () => {
    it('should equal result', () => {
      deepEqual(result, makePlan(0, 11, 5))
    })
  })
})
