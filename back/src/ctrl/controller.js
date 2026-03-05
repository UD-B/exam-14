import readJson from '../util/util.js'

export default async function controller(req, res){
    const json = await readJson()
    res.status(200).send(json)
}