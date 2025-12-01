import { expect } from "chai";
import filter from '../src/filter.js';

describe("filter()", () => {
    it("basic case shown in the comments", () => {
        const users = [
              { 'user': 'barney', 'active': true },
              { 'user': 'fred',   'active': false }
            ]
        expect(filter(users, ({ active }) => active)).to.deep.equal([{ 'user': 'barney', 'active': true }]);
    });
});

