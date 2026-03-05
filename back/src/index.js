import express from 'express'
import cors from 'cors'
import router from './route/router.js'

const app = express()
const port = 3017
app.use(express.json())
app.use(cors())


app.use("/", router)


app.listen(port, () => {
    console.log(`server is listening on port http://localhost:${port}`)
})