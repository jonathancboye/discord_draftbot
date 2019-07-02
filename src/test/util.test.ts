import {shuffle} from '../util'

test('shuffle should return a list in a different order', () => {
    let list = [1,2,3,4,5,6];
    let shuffledList = shuffle(list);

    expect(shuffledList.length).toBe(list.length);
    expect(shuffledList).not.toEqual(list);
});