import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "c91e02is",
  dataset: "production",
  token:
    "skidSOJqHi5ZdgZ2R7aEK6H9N7c3LyWAVMSkRZ4PqMazRixsaUwA2XzRVXlFLp2RYV0lY1FttvjVmMNrWLbyh9Vp2XtoqOtCoYwNwR1ncT2DI8gt1H6G2Q3H3laDlVt3JVRrTv4TwWEgCOQRscwKDSvmXz670JvPRSiqOfpfMUky5S4VZynO",
});

export default client;
