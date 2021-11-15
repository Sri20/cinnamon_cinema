

const main = require('./main.js')


test('request one seat when theatre empty ', () => {
    const numberOfseats = ['1']                //arrange the data
    expect(main(numberOfseats)).toEqual(['A1'])       //act & assert
})

test('request two seats when theatre empty ', () => {
    const numberOfseats = ['2']                //arrange the data
    expect(main(numberOfseats)).toEqual(['A1,A2'])       //act & assert
})

test('multiple customer seat request  when theatre empty ', () => {
    const numberOfseats = ['1','1']                //arrange the data
    expect(main(numberOfseats)).toEqual(['A1','A2'])       //act & assert
})

test('multiple customer seat request  when theatre empty ', () => {
    const numberOfseats = ['1','1','2']                //arrange the data
    expect(main(numberOfseats)).toEqual(['A1','A2','A3,A4'])       //act & assert
})

test('multiple customer seat request  when theatre empty ,seats spreads next row ', () => {
    const numberOfseats = ['1','1','2','2']                //arrange the data
    expect(main(numberOfseats)).toEqual(['A1','A2','A3,A4','A5,B1'])       //act & assert
})