import * as React from 'react'
import express from 'express'
import ReactDOM from 'react-dom/server'
import { App } from '../AppContainer'
import { indexTemplate } from './indexTemplate'
import axios from 'axios'
import { StaticRouter } from 'react-router-dom'
import compression from 'compression'
import helmet from 'helmet'

const PORT = process.env.PORT || 3000
const IS_DEV = process.env.NODE_ENV !== 'production'

const app = express()

if (!IS_DEV) {
  app.use(compression())
  app.use(helmet({
    contentSecurityPolicy: false
  }))
}

app.use('/static', express.static('./dist/client'))

app.get('/auth', async (req, res) => {
  try {
    const response = await axios.post('https://www.reddit.com/api/v1/access_token', 
      `grant_type=authorization_code&code=${req.query.code}&redirect_uri=${process.env.REDIRECT_URI}`,
      {
        auth: { username: process.env.CLIENT_ID, password: process.env.CLIENT_SECRET },
        headers: { 'Content-type': 'application/x-www-form-urlencoded' }
      }
    )

    res.send(
      indexTemplate(ReactDOM.renderToNodeStream(
        <StaticRouter location={req.url}>
          <App />
        </StaticRouter>
      ), response.data['access_token'])
    )
  } catch (err) {
    console.log(err.response)
  }
})

app.get('*', (req, res) => {
  res.send(
    indexTemplate(ReactDOM.renderToNodeStream(
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    ))
  )
})

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`)
})
