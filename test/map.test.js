import { expect } from 'chai';
import map from '../src/map.js';

describe('map', () => {
    it('muuntaa numerotaulukon oikein', () => {
        const input = [1, 2, 3];
        const square = n => n * n;
        const result = map(input, square);
        expect(result).to.deep.equal([1, 4, 9])
    });

    it('muuttaa merkkijonotaulukon isoiksi kirjaimiksi', () => {
        const input = ['a', 'b', 'c'];
        const toUpper = s => s.toUpperCase();
        const result = map(input, toUpper);
        expect(result).to.deep.equal(['A', 'B', 'C']);
    });

    it('välittää iteratee-funktiolle arvon, indeksin ja taulukon', () => {
        const input = [10, 20];
        const callback = (value, index, array) => value + index + array.length;
        const result = map(input, callback);
        expect(result).to.deep.equal([12, 23]);
    });

    it('palauttaa tyhjän taulukon, jos syöte on null', () => {
        const result = map(null, x => x);
        expect(result).to.deep.equal([]);
    });

    it('palauttaa tyhjän taulukon, jos syöte on undefined', () => {
        const result = map(undefined, x => x);
        expect(result).to.deep.equal([]);
    });

    it('palauttaa uuden taulukon eikä muokkaa alkuperäistä', () => {
        const input = [1, 2, 3];
        const result = map(input, n => n * 2);
        expect(result).to.not.equal(input);
        expect(input).to.deep.equal([1, 2, 3]);
    });
});