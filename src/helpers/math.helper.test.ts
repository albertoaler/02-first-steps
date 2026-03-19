import { describe, expect, test } from 'vitest'
import { add, multiply, subtract } from './math.helper';

describe('Add', () => {
    test('Should add two positive numbers', () => {

        // 1. Arrange
        const a = 1;
        const b = 1;

        // 2. Act
        const result = add(a, b);

        // 3. Assert
        expect(result).toBe(a + b);

        // We could do the expectations with
        // if (result !== 2) {
        //     throw Error('La suma debe de ser 2')
        // }
        // but instead we use the expect method
    });
    test('Should add two negative numbers', () => {

        // 1. Arrange
        const a = -4;
        const b = -6;

        // 2. Act
        const result = add(a, b);

        // 3. Assert
        expect(result).toBe(a + b);

        // We could do the expectations with
        // if (result !== 2) {
        //     throw Error('La suma debe de ser 2')
        // }
        // but instead we use the expect method
    });
});

describe('Subtract', () => {
    test('Should subtract two positive numbers', () => {
        // ! 1. Arrange
        const a = 2
        const b = 2

        // ! 2. Act
        const result = subtract(a, b);

        // ! 3. Assert
        expect(result).toBe(a - b)
    });
});

describe('Multiply', () => {
    test('Should multiply two positive numbers', () => {
        // ! 1. Arrange
        const a = 2
        const b = 2

        // ! 2. Act
        const result = multiply(a, b);

        // ! 3. Assert
        expect(result).toBe(a * b);
    });
});