export function shuffle<T>(list: Array<T>): Array<T> {
    let result: Array<T> = Array.from(list);
    let tmp: T;

    for(let i = list.length - 1; i > 0; i--) {
        let swapIndex = Math.floor(Math.random() * (i + 1));

        tmp = result[i];
        result[i] = result[swapIndex];
        result[swapIndex] = tmp;

    }

    return result;
}