type Result = Record<'partone' | 'parttwo', number>

export const run = (numbers: ReturnType<typeof parse>): Result => {
    const { length } = numbers[0]

    const partone = () => {
        const [gamma, epsilon] = [new Array<string>(), new Array<string>()]

        for (let i = 0; i < length; i++) {
            let onecount = 0
            for (const number of numbers) if (number[i] === '1') onecount++

            if (onecount > numbers.length / 2) gamma.push('1') && epsilon.push('0')
            else gamma.push('0') && epsilon.push('1')
        }

        return parseInt(gamma.join(''), 2) * parseInt(epsilon.join(''), 2)
    }
    const parttwo = () => {
        const freqency = (input: string[]) => {
            return input.reduce((out, curr) => {
                const digits = curr.split('')
                if (out.length > 0) {
                    const newOut = out.map((digit, digitIndex) => {
                        return { ...digit, [digits[digitIndex]]: digit[digits[digitIndex] as '1' | '0'] + 1 }
                    })
                    return newOut
                } else {
                    return digits
                        .map(() => {
                            return { '0': 0, '1': 0 }
                        })
                        .map((digit, digitIndex) => {
                            return { ...digit, [digits[digitIndex]]: 1 }
                        })
                }
            }, new Array<Record<'1' | '0', number>>())
        }

        const filter = (passNum: string, failNum: string) => {
            let arr = numbers
            let digit = 0
            while (arr.length > 1) {
                const freq = freqency(arr)
                const digitCount = freq[digit]
                arr = arr.filter((num) => num[digit] === (digitCount['0'] > digitCount['1'] ? passNum : failNum))
                digit++
            }

            return arr[0]
        }

        return parseInt(filter('0', '1'), 2) * parseInt(filter('1', '0'), 2)
    }

    return {
        partone: partone(),
        parttwo: parttwo()
    }
}

export const parse = (input: string): Array<string> => {
    return input.trim().split('\n')
}
