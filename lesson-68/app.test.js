const { sum } = require('./app')
  


describe('sum test suite', ()=> {
    it('should be correct', () => {
        const result = sum(1, 2)

        expect(result).toBe(3)
    })

    it('should not be correct', () => {
        const result = sum(1, 2)

        expect(result).not.toBe(4)
    })

    it('should not be number when passing string', () => {
        const result = sum('1', '2')

        expect(typeof result).not.toBe('number')
    })

    it('should be NaN by passing undefined', () => {
        const result = sum(1, undefined)

        console.log(result)

        expect(result).toBe(NaN)
    })
})




// const x = (a) => {
//     console.log(a)

//     return y(a)
// }


// jest.mock("./app.js", () => ({
//     y: jest.fn(),
//     sendSms: jest.fn(),
// }));



// it("should be correct", () => {
//     y.mockImplementation((a) => false)

//     const result = x(1)
//     expect(result).toEqual(false)
// });

// it("should send an sms", () => {
//     y.sendSms((a) => true)

//     const result = x(1)
//     expect(result).toEqual(false)
// });


// - unit test
// - integration test
// - e2e test