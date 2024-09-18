import { HocuspocusProvider } from "@hocuspocus/provider";

// Connect it to the backend
const provider = new HocuspocusProvider({
  url: "wss://websocket-sample-api-gateway-641862643887.us-central1.run.app/api/collaboration",
  name: "example-document",
});

// Define `tasks` as an Array
const tasks = provider.document.getArray("tasks");

// Listen for changes
tasks.observe(() => {
  console.log(tasks);
  console.log("tasks were modified");
});

// Add a new task
tasks.push(["buy milk"]);
