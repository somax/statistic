import { deepEqual } from 'assert';
import { getBetween, getLast } from './data.service';

const mockdata: OriginData[] = [
    { id: 1, val: 10 },
    { id: 3, val: 13 },
    { id: 5, val: 15 }
]
const result: OriginData[] = [
    { id: 1, val: 10 },
    { id: 3, val: 13 },
    { id: 5, val: 15 }
]
describe('data.service', () => {
    describe('getBetween', () => {
        it('should equal result', () => {
            deepEqual(result, getBetween(mockdata, 2, 10))
        });
    });
});
