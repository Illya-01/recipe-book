import dotenv from 'dotenv'
dotenv.config()

export const PORT = process.env.PORT || 8000
export const MEAL_DB_API_URL =
  process.env.MEAL_DB_API_URL || 'https://www.themealdb.com/api/json/v1/1/'
export const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',')
  : ['http://localhost:3000']
