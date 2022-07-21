const server = require('./api/server');
const PORT = process.env.PORT || 9000;
server.listen(PORT, () => console.log(`u4-s2-d4 server running on port ${PORT}`));