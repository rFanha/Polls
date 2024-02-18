// * Sistema de roeteamento, declaro minhas rotas para especificar a ação
import fastify from 'fastify'
import cookie from '@fastify/cookie'
import websocket from '@fastify/websocket'
import { createPoll } from './routes/create-poll'
import { getPoll } from './routes/get-poll'
import { voteOnPoll } from './routes/vote-on-poll'
import { pollResults } from './ws/poll-results'

const app = fastify()

//não deixa alterar o cookie
app.register(cookie, {
  secret: "polls-app-nlw",
  hook: 'onRequest'
})

app.register(websocket)
app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)

app.register(pollResults)

// toda vez q usar await -> utilizar async


app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server runing!')
})

