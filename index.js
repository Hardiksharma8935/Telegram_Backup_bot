export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Telegram API ko forward karne ke liye code
    const telemetryUrl = `https://api.telegram.org${url.pathname}${url.search}`;
    
    const modifiedRequest = new Request(telemetryUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body
    });

    return fetch(modifiedRequest);
  },
};
