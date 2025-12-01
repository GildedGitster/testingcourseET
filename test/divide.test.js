import { expect } from "chai";
import divide from '../src/divide.js';

describe("divide() phase 1", () => {

    it("should return 1.5 with dividen as 6 and diviser as 4", ()=>
    {
        expect(divide(6,4)).to.equal(1.5);
    });
    it("should return 1.5 with dividen as string of 6 and diviser as 4", ()=>
    {
        expect(divide("6",4)).to.equal(1.5);
    });
    it("should throw type error with dividen as a string and diviser as 4", ()=>
    {
        expect(() => divide("fse",4)).to.throw(TypeError);
    });
    it("should return -3 with dividen as 45 and diviser as -15", ()=>
    {
        expect(divide(45,-15)).to.equal(-3);
    });
    it("should return -3 with dividen as -45 and diviser as 15", ()=>
    {
        expect(divide(-45, 15)).to.equal(-3);
    });
    it("should return 3 with dividen as -45 and diviser as 15", ()=>
    {
        expect(divide(45, 15)).to.equal(3);
    });
    it("should throw type error with dividen as 6 and diviser as 0", ()=>
    {
        expect(() => divide(6,0)).to.throw(RangeError);
    });
    it("should return Infinity with dividen as Number.MAX_VALUE+1 and diviser as 1", ()=>
    {
        expect(divide(Number.MAX_VALUE+1,1)).to.equal(Infinity)
    });
    it("should return Number.MAX_VALUE with dividen as Number.MAX_VALUE and diviser as 1", ()=>
    {
        expect(divide(Number.MAX_VALUE,1)).to.equal(Number.MAX_VALUE)
    });
    it("should return -Infinity with dividen as Number.MAX_VALUE+1 and diviser as 1", ()=>
    {
        expect(divide(Number.MIN_VALUE-1,1)).to.equal(-Infinity)
    });
    it("should return Number.MAX_VALUE with dividen as Number.MAX_VALUE and diviser as 1", ()=>
    {
        expect(divide(Number.MIN_VALUE,1)).to.equal(Number.MIN_VALUE)
    });
});

describe("divide AI test suit made with Microsoft 365 copilot", () => {
    
    it('should divide two positive numbers correctly', () => {
        expect(divide(6, 3)).to.equal(2);
    });

    it('should return a decimal for non-integer division', () => {
        expect(divide(7, 2)).to.equal(3.5);
    });

    it('should handle division by 1', () => {
        expect(divide(10, 1)).to.equal(10);
    });

    it('should return Infinity when dividing by 0', () => {
        expect(divide(5, 0)).to.equal(Infinity);
    });

    it('should return 0 when dividend is 0', () => {
        expect(divide(0, 5)).to.equal(0);
    });

    it('should handle negative numbers', () => {
        expect(divide(-6, 3)).to.equal(-2);
        expect(divide(6, -3)).to.equal(-2);
        expect(divide(-6, -3)).to.equal(2);
    });

    it('should return NaN when both numbers are 0', () => {
        expect(divide(0, 0)).to.be.NaN;
    });
});
