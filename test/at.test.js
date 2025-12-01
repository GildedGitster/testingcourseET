import { expect } from "chai";
import at from '../src/at.js';

describe("at()", () => {
    it("Should return a list with 3 and 4", () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }
        expect(at(object, ['a[0].b.c', 'a[1]'])).to.deep.equal([3,4]);
    });
    it("Should return a list with different data types", () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }, "4"] }
        expect(at(object, ['a[0].b.c', 'a[1]'])).to.deep.equal([3,"4"]);
    });
    it("Should return a list with found elements and undefined when trying to access element property that doesn't exist", () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }, 4, {'e' : "word"}] }
        expect(at(object, ['a[0].b.c', 'a[3]', 'a[2].e'])).to.deep.equal([3, undefined, "word"]);
        expect(at(object, ['a[0].b.q', 'a[1]', 'a[2].e'])).to.deep.equal([undefined, 4, "word"]);
        expect(at(object, ['a[0].b.c', 'a[1]', 'a[1].e'])).to.deep.equal([3, 4, undefined]);
    });
    it("Should return a list with undefined when a path is not provided/wrong type", () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }, 4, {'e' : "word"}] }
        expect(at(object, null)).to.deep.equal([undefined]);
        expect(at(object, [1])).to.deep.equal([undefined]);
    });
    it("Should return a list with undefined when object is not provided", () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }, 4, {'e' : "word"}] }
        expect(at(null, ['a[0].b.c', 'a[1]'])).to.deep.equal([undefined, undefined]);
    });
    it("Should return an empty list when path is an empty list", () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }, 4, {'e' : "word"}] }
        expect(at(object, [])).to.deep.equal([]);
    });
});