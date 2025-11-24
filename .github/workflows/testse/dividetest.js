import { expect } from "chai"
import divide from "../divide.js"

describe("suit 1", () => {

    it("should return 1.5 with dividen as 6 and diviser as 4", ()=>
    {
        expect(divide(6,4)).to.equal(1.5)
    })
    it("should throw type error with dividen as a string 6 and diviser as 4", ()=>
    {
        expect(() => divide("6",4)).to.throw(TypeError);
    })
})