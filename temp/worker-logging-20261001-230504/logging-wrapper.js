
const __requestLoggingWorker = {
  ...__astrojsSsrVirtualEntry,
  async fetch(request, env, ctx) {
    const started = Date.now();
    const fields = {
      method: request.method,
      host: new URL(request.url).hostname,
      path: new URL(request.url).pathname,
      userAgent: request.headers.get("user-agent"),
      rayId: request.headers.get("cf-ray")
    };
    console.log({event: "request", ...fields});
    try {
      const response = await __astrojsSsrVirtualEntry.fetch.call(__astrojsSsrVirtualEntry, request, env, ctx);
      const output = {event: "response", ...fields, status: response.status, durationMs: Date.now() - started};
      if (response.status >= 500) console.error(output); else console.log(output);
      return response;
    } catch (error) {
      console.error({event: "request_error", ...fields, durationMs: Date.now() - started,
        error: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined});
      throw error;
    }
  }
};
