import express from 'express'
import cors from 'cors'
import recipeRoutes from './routes/recipes'
import { PORT } from './config'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', recipeRoutes)

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
