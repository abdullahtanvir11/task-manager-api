const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/task')
const taskRouter = require('./routers/user')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port,()=>{
    console.log('Server is up on port '+ port)
})
