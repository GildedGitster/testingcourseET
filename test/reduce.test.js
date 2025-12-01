import { expect } from "chai";
import reduce from '../src/reduce.js';

describe('reduce', () => {
    it('laskee taulukon summan, kun alkuarvo annetaan', () => {
        const result = reduce([1, 2, 3], (sum, n) => sum + n, 0);
        expect(result).to.equal(6);
    });

    it('käyttää ensimmäistä alkiota alkuarvona jos ei ole annettu', () => {
        const result = reduce([1, 2, 3], (sum, n) => sum + n);
        expect(result).to.equal(6);
    });

    it('vähentää objektin oikein', () => {
        const obj = { a: 1, b: 2, c: 1 };
        const result = reduce(obj, (res, value, key) => {
            (res[value] || (res[value] = [])).push(key);
            return res;
        }, {});

        expect(result).to.deep.equal({
        1: ['a', 'c'],
        2: ['b']
        });
    });

    it('palauttaa undefined tyhjälle taulukolle ilman alkuarvoa', () => {
        const result = reduce([], (a, b) => a + b);
        expect(result).to.equal(undefined);
    });

    it('palauttaa alkuarvon, kun taulukko on tyhjä ja alkuarvo annetaan', () => {
        const result = reduce([], (a, b) => a + b, 10);
        expect(result).to.equal(10);
    });

    it('välittää iteratee-funktiolle oikeat argumentit', () => {
        const spy = [];
        reduce(['x'], (acc, val, index, col) => {
            spy.push({ acc, val, index, col });
            return acc;
        }, 'initial');

        expect(spy[0]).to.deep.equal({
            acc: 'initial',
            val: 'x',
            index: 0,
            col: ['x']
        });
    });

    it('toimii merkkijonon kanssa (käsitellään taulukkomaisena)', () => {
        const result = reduce('abc', (acc, ch) => acc + ch, '');
        expect(result).to.equal('abc');
    });

    it('toimii, kun akkuaattori muokkaa objektia', () => {
        const input = [1, 2, 3];
        const result = reduce(input, (acc, val) => {
            acc.push(val * 2);
            return acc;
        }, []);
        expect(result).to.deep.equal([2, 4, 6]);
    });
});