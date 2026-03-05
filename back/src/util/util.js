import { readFile } from 'fs/promises'


export default async function rJsonFile() {
    try {
        const data = await readFile('src/data/data.json', 'utf-8')
        return JSON.parse(data)
    } catch (error) {
        return ["failed reading json"]
    }
}