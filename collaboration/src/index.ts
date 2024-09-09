import { Hocuspocus } from "@hocuspocus/server";

// Configure the server …
const server = new Hocuspocus({
  //   port: 1234,
  port: Number(process.env.PORT),
});

// … and run it!
server.listen();
