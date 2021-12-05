type Result = Record<'partone' | 'parttwo', number>
/**
 * @see [Day 01](https://adventofcode.com/2021/day/1)
 * @param lines - Input array of lines
 * @returns {Result}
 */
export const run = (lines: Array<number>): Result => {
    const increases = (data: Array<number>, interval: number) =>
        data.reduce((total, currVal, currIndex) => (data[currIndex + interval] > currVal ? total + 1 : total), 0)

    return {
        partone: increases(lines, 1),
        parttwo: increases(lines, 3)
    }
}

export const parse = (input: string): Array<number> => {
    return input
        .trim()
        .split('\n')
        .map((x) => {
            return parseInt(x, 10)
        })
}
