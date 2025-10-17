/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
  async fetch(request, env, ctx) {
    const clientIP = request.headers.get("CF-Connecting-IP");
    const timezone = request.cf?.timezone || "UTC";
    const city = request.cf?.city || "Unknown";
    const country = request.cf?.country || "Unknown";
    const now = new Date().toLocaleString("en-US", { timeZone: timezone });

    const data = {
      ip: clientIP,
      time: now,
      timezone,
      location: `${city}, ${country}`,
    };

    return new Response(JSON.stringify(data, null, 2), {
      headers: { "content-type": "application/json" },
    });
  },
};
