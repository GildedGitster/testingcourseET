import expect from 'expect';
import keys from '../src/keys.js';

describe('keys()', () => {

    test('palauttaa objektin omat enumerable propertyt', () => {
        function Foo() {
            this.a = 1;
            this.b = 2;
        }
        Foo.prototype.c = 3;

        const result = keys(new Foo());
        expect(result).toEqual(['a', 'b']);
    });

    test('palauttaa array-like avaimet merkkijonolle', () => {
        const result = keys('hi');
        expect(result).toEqual(['0', '1']);
    });

    test('palauttaa objektin omat propertyt', () => {
        const obj = { x: 10, y:20 };
        const result = keys(obj);
        expect(result).toEqual(['x', 'y']);
    });

    test('palauttaa tyhjän taulukon numerolle tai muulle primitiiville', () => {
        expect(keys(123)).toEqual([]);
        expect(keys(true)).toEqual([]);
        expect(keys(null)).toEqual([]);
        expect(keys(undefined)).toEqual([]);
    });
});