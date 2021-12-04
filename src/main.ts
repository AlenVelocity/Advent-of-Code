import { readdirSync } from 'fs'
import { join } from 'path'
import { transformInput } from './utils'

const main = async () => {
    const day = process.argv[2]
    const dir = `Day-${day}`
    const dirs = readdirSync(join(__dirname, '2021'))
    if (!dirs.includes(`Day-${day}`)) {
        console.log(`Day ${day} not found`)
        process.exit(1)
    }

    const path = (file?: string) => join(__dirname, '2021', dir, file ?? '')

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
