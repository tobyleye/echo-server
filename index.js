const http = require('http')


const server = http.createServer((req, res) => {
	res.writeHead(200)
	res.end(`echo server!`)
})

const host = 'localhost';
const port = 8000

server.listen(port, () => {
	console.log(`server is running on ${port}`)
})

process.on('SIGINT', () => {
	server.close()
})
