const listener = (evt) => {
    let x = "Hello Farouk";
    const response = new Response(`
        <h1>${x}</h1>
    `, { headers: { "Content-Type": "text/html" } });
    evt.respondWith(response);
  };
  
  const server = Deno.listen({ port: 7000 });
  console.log("http://localhost:7000/");
  
  for await (const conn of server) {
    (async () => {
      const httpConn = Deno.serveHttp(conn);
      for await (const requestEvent of httpConn) {
        listener(requestEvent);
      }
    })();
  }
  