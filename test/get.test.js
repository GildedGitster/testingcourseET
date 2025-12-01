import { expect } from "chai";
import get from '../src/get.js';

describe("get()", () => {
    it("Should return a list with 3 and 4", () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }
        expect(get(object, 'a[0].b.c', 5)).to.equal(3);
    });
    it("Should return a list with different data types", () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }, "4"] }
        expect(get(object, 'a[1]', 5)).to.equal("4");
    });
    it("Should return the default element when trying to access element property that doesn't exist", () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }, 4, {'e' : "word"}] }
        expect(get(object, 'a[0].b.u', 5)).to.deep.equal(5);
        expect(get(object, ['a', '1', 'a'], 5.345)).to.deep.equal(5.345);
        expect(get(object, ['a', '2', 'j'], "jep")).to.deep.equal("jep");
    });
    it("Should return the default value when a path is not provided/wrong type", () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }, 4, {'e' : "word"}] }
        const object2 = { 'a': [4, {'e' : "word"}] }
        expect(get(object, null, "t")).to.deep.equal("t");
        expect(get(object, [1], object2)).to.deep.equal(object2);
    });
    it("Should return a list with undefined when object is not provided", () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }, 4, {'e' : "word"}] }
        expect(get(null, 'a[0].b.c', 5)).to.deep.equal(5);
    });
    it("Should return the default value when path is an empty list", () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }, 4, {'e' : "word"}] }
        var sym = Symbol("symb");
        expect(get(object, [], sym)).to.deep.equal(sym);
    });
    it("Default value should be undefined if not provided", () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }, 4, {'e' : "word"}] }
        expect(get(object, ['a', '1', 'j'])).to.deep.equal(undefined);
    });
    it("the results from using string or list searching should be the same", () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }, 4, {'e' : "word"}] }
        expect(get(object, ['a', '1'])).to.deep.equal(get(object, 'a[1]'));
        expect(get(object, ['a', '0', 'b', 'c'])).to.deep.equal(get(object, 'a[0].b.c'));
        expect(get(object, ['a', '2', 'e'])).to.deep.equal(get(object, 'a[2].e'));
    });
});