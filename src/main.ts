import { existsSync } from 'fs'
import { join } from 'path'
import { transformInput } from './utils'

const main = async () => {
    const { '2': day } = process.argv
    const dir = `Day-${day}`
    const path = (file = '') => join(__dirname, '2021', dir, file)

    if (!existsSync(path())) {
        console.log(`Day ${day} not found`)
        process.exit(1)
    }

    const { run, parse = (text: string) => text.trim() } = await import(path('index.ts'))

    console.log(`Running Day ${day}`)

    try {
        const input = transformInput(path('input.txt'), parse)
        const result = await run(input)
        console.log(`Result:`, result)
    } catch (e) {
        console.log(e)
    }
}

main()
