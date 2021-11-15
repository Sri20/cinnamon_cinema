

const main = require('./main.js')


test('request one seat when theatre empty ', () => {
    const numberOfseats = ['1']                //arrange the data
    expect(main(numberOfseats)).toEqual('A1')       //act & assert
})



test('request two seats when theatre empty ', () => {
    const numberOfseats = ['1']                //arrange the data
    expect(main(numberOfseats)).toEqual('A1 A2')       //act & assert
})