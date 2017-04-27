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

const resultLast: OriginData = { id: 1, val: 10 };
const resultLast3: OriginData = { id: 3, val: 13 };

describe('Data.service', () => {
    describe('getBetween', () => {
        it('should equal result', () => {
            deepEqual(resultBetween, getBetween(mockdata, 2, 10))
        });
        it('should equal result', () => {
            deepEqual(resultBetween3, getBetween(mockdata, 3, 10))
        });
    });
    describe('getLast', () => {
        it('should equal result', () => {
            deepEqual(resultLast, getLast(mockdata, 2))
        });
        it('should equal result', () => {
            deepEqual(resultLast3, getLast(mockdata, 3))
        });
    });
});
