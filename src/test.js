

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

test('multiple customer seat request  when theatre empty ,seats spreads multiple rows ', () => {
    const numberOfseats = ['3','3','1','3','2']                //arrange the data
    expect(main(numberOfseats)).toEqual(['A1,A2,A3','A4,A5,B1','B2','B3,B4,B5','C1,C2'])       //act & assert
})

test('multiple customer seat request  when theatre empty ,seats spreads multiple rows ', () => {
    const numberOfseats = ['3','3','1','3','2','3']                //arrange the data
    expect(main(numberOfseats)).toEqual(['A1,A2,A3','A4,A5,B1','B2','B3,B4,B5','C1,C2','C3,C4,C5'])       //act & assert
})