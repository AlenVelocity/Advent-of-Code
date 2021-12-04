type Result = Record<'partone' | 'parttwo', number>

/**
 * @see [Day 02](https://adventofcode.com/2021/day/2)
 * @param lines - Input array of lines
 * @returns {Result}
 */
export const run = (lines: Array<string>): Result => {
    const instructions = lines.map((line) => {
        const [command, value] = line.split(' ')
        return { command, value: parseInt(value) }
    })

    const partone = () => {
        const [x, y] = instructions.reduce(([x, y], { command, value }) => {
            switch (command) {
                case 'up':
                    y -= value
                    break
                case 'down':
                    y += value
                    break
                case 'forward':
                    x += value
                    break
            }
            return [x, y]
        }, new Array(2).fill(0))

        return x * y
    }

    const parttwo = () => {
        const [x, y] = instructions.reduce(([x, y, a], { command, value }) => {
            switch (command) {
                case 'forward':
                    x += value
                    y += a * value
                    break
                case 'up':
                    a -= value
                    break
                case 'down':
                    a += value
                    break
            }
            return [x, y, a]
        }, new Array(3).fill(0))

        return x * y
    }

    return { partone: partone(), parttwo: parttwo() }
}

export const parse = (input: string): Array<string> => {
    return input.trim().split('\n')
}
