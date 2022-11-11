import express, { request } from 'express'

const app = express()



app.get('/test', (request, response) => {

    response.send({message:"its all good, man!😀😃☺️"})
})


app.get('/', (request, respond) => respond.send({message:'Welcome to our first API}'}))

app.get('/error', (request, respond)  => {
    respond
    .status(500)
    .send({ messange: 'something went wrong', success: false})
})

app.listen(3030, () => console.log('Listening on http://localhost:3030...'))

