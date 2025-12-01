import { expect } from "chai";
import words from '../src/words.js';

describe('words()', () => {
    it('palauttaa ASCII-sanat oikein', () => {
        const input = 'fred, barney, & pebbles';
        const result = words(input);
        expect(result).to.deep.equal(['fred', 'barney', 'pebbles']);
    });

    it('käyttää custom patternia', () => {
        const input = 'fred, barney, & pebbles';
        const pattern = /[^, ]+/g;
        const result = words(input, pattern);
        expect(result).to.deep.equal(['fred', 'barney', '&', 'pebbles']);
    });

    it('palauttaa tyhjän listan tyhjälle merkkijonolle', () => {
        expect(words('')).to.deep.equal([]);
    });

    it('palauttaa tyhjän listan kun pattern ei ole osuva', () => {
        expect(words('abcdef', /[0-9]+/g)).to.deep.equal([]);
    });

    it('tunnistaa unicode-sanat esim. aksenttimerkit', () => {
        const input = 'café müller déjà vu';
        const result = words(input);
        expect(result).to.deep.equal(['café', 'müller', 'déjà', 'vu']);
    });

    it('palauttaa tyhjän listan kun syöte ei ole merkkijono', () => {
        expect(words(null)).to.deep.equal([]);
        expect(words(undefined)).to.deep.equal([]);
    });
});