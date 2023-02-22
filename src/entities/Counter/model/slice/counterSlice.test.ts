import { CounterSchema } from '../types/CounterSchema';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice Tests', () => {
    test('counterSlice decrement', () => {
        const state:CounterSchema = { value: 10 };
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
    });
    test('counterSlice increment', () => {
        const state:CounterSchema = { value: 10 };
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
    });
    test('should work with empty state', () => {
        const state:CounterSchema = { value: 10 };
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
});
