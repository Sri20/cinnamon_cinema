

const main = require('./main.js')


test('request one seat when theatre empty ', () => {
    const numberOfseats = ['1']                //arrange the data
    expect(main(numberOfseats)).toEqual(['A1'])       //act & assert
})