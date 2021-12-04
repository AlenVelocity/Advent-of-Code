import { existsSync, readFileSync, statSync } from 'fs'
import { join } from 'path'

export const readdirrecursive = (dir: string): string[] => {
    const files: string[] = []
    const list = readdirrecursive(dir)
    list.forEach((file) => {
        const filepath = join(dir, file)
        if (statSync(filepath).isDirectory()) files.push(...readdirrecursive(filepath))
        else files.push(filepath)
    })
    return files
}

export const transformInput = <T>(file: string, func: (text: string) => T): T => {
    if (!existsSync(file)) return func('')
    const raw = readFileSync(file, 'utf8')
    return func(raw)
}
