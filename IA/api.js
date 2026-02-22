const express = require('express')

const app = express()
const port = process.env.PORT || 3000

const RATE_LIMIT_WINDOW_MS = 60 * 1000
const RATE_LIMIT_MAX = 20
const rateLimitStore = new Map()

const rateLimitRoot = (req, res, next) => {
  const now = Date.now()
  const key = req.ip || 'unknown'
  const entry = rateLimitStore.get(key) || { count: 0, windowStart: now }

  if (now - entry.windowStart >= RATE_LIMIT_WINDOW_MS) {
    entry.count = 0
    entry.windowStart = now
  }

  entry.count += 1
  if (entry.count > RATE_LIMIT_MAX) {
    const retryAfterSeconds = Math.ceil(
      (RATE_LIMIT_WINDOW_MS - (now - entry.windowStart)) / 1000,
    )
    res.set('Retry-After', String(retryAfterSeconds))
    return res.status(429).json({ error: 'Demasiadas solicitudes' })
  }

  rateLimitStore.set(key, entry)
  return next()
}

app.use(express.json())

app.get('/', rateLimitRoot, (req, res) => {
  res.json({ message: 'API con Express funcionando' })
})

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  })
})

app.post('/echo', (req, res) => {
  res.json({ received: req.body })
})

app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' })
})

app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`)
})
