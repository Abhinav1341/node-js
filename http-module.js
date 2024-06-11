const http = require("http");

const server = http.createServer((req, res) => {
  // Check the request URL and respond accordingly
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.end("About Page");
  } else {
    res.end(`
      <h1> OOPS </h1>
      <p>Page not found</p>
    `);
  }
});

// Server listening to a port
server.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
