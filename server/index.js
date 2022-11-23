const express = require('express')
const cors = require('cors')
const { createYoga } = require('graphql-yoga')
const schema = require('./schema/schema')

const connectDB = require('../db')
connectDB()
const app = express()
app.use(cors())

const yoga = createYoga({
    schema,
    graphiql: true
})
app.use('/graphql', yoga)

app.listen(4000, () => {
    console.log("server running on port 4000")
})