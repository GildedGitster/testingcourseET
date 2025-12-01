import { expect } from "chai";
import filter from '../src/filter.js';

describe("filter()", () => {
    it("Should return a list with barney with active status as true", () => {
        const users = [
              { 'user': 'barney', 'active': true },
              { 'user': 'fred',   'active': false }
            ]
        expect(filter(users, ({ active }) => active)).to.deep.equal([{ 'user': 'barney', 'active': true }]);
    });
    it("Should return an empty list when given an empty list", () => {
        const users = []
        expect(filter(users, ({ active }) => active)).to.deep.equal([]);
    });
    it("Should return an empty list when there are no true statements for predicate", () => {
        const users = [
              { 'user': 'barney', 'active': false },
              { 'user': 'fred',   'active': false }
            ]
        expect(filter(users, ({ active }) => active)).to.deep.equal([]);
    });
    it("Should work with different kinds of list elements and predicates", () => {
        const list = [0,34,56,100,3,33]
        expect(filter(list, num => (num>=34) ? true : false)).to.deep.equal([34,56,100]);
        const list2 = ["yes", "it", "is", "here"]
        expect(filter(list2, word => (word==="here") ? true : false)).to.deep.equal(["here"]);
    });
    it("Should return an empty list when the given list is null", () => {
        const users = null
        expect(filter(users, ({ active }) => active)).to.deep.equal([]);
    });
    it("Should throw a TypeError when the predicate is not correct (null or something else)", () => {
        const users = [
              { 'user': 'barney', 'active': false },
              { 'user': 'fred',   'active': false }
            ]
        expect(() => filter(users, null)).to.throw(TypeError);
        expect(() => filter(users, "wrong")).to.throw(TypeError);

    });
});

