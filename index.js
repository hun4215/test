const express = require('express')
var cors = require('cors')

const app = express()
const port = 3000

app.use(cors())


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/user/:id', (req, res) => {
    // const q = req.params
    // console.log(q)
    const q = req.query
    console.log(q)

    res.send({'userid': q.id})
})

app.get('/sound/:name', (req, res) => {
    const {name} = req.params

    if(name == "dog")  {
        res.send({'sound': '멍멍'})
    } else if(name == "cat") {
        res.send({'sound': '야옹'})
    } else if(name == "pig") {
        res.send({'sound': '꿀꿀'})
    } else {
        res.send({'sound': '알수없음'})
    }


    console.log(name)


    res.send({'sound': '야옹'})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})