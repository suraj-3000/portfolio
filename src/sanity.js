import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "c91e02is",
  dataset: "production",
});

export default client;
