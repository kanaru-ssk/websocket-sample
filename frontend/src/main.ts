import { HocuspocusProvider } from "@hocuspocus/provider";

// Connect it to the backend
const provider = new HocuspocusProvider({
  url: process.env.COLLABORATION_URL || "ws://127.0.0.1:1234",
  name: "example-document",
});

// Define `tasks` as an Array
const tasks = provider.document.getArray("tasks");

// Listen for changes
tasks.observe(() => {
  console.log("tasks were modified");
});

// Add a new task
tasks.push(["buy milk"]);
