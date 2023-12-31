const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

app.get('/api/goals', (req, res) => {
    res.status(200).json({message: 'Get Goals'})
})

app.listen(port, () => {
    console.log(`Starting on port: ${port}`)
})