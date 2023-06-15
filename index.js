import http from 'http'

const PORT = process.env.PORT || 3000


// Create server
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  res.end('👋 hello')
})

// Start server
server.listen(PORT, () => {
  console.log(`👂 Listening on port ${PORT}`)
})

// Handle exit signals
const signals = ['SIGINT', 'SIGTERM', 'SIGQUIT']
for(const signal of signals) {
  process.on(signal, () => {
    console.log(`👋 ${signal} signal received. Shutting down...`)
    server.close(() => {
      console.log('💥 Process terminated!')
    })
  })
}