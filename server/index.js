import { createServer } from "node:http";
import { loadConfig } from "./config.js";
import { getChatReply } from "./chat.js";

const config = loadConfig();
const MAX_BODY_LENGTH = 100000;

function sendJson(response, status, body) {
    response.writeHead(status, {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": config.corsOrigin,
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
    });
    response.end(JSON.stringify(body));
}

async function readBody(request) {
    let body = "";
    for await (const chunk of request) {
        body += chunk;
        if (body.length > MAX_BODY_LENGTH) throw new Error("Request body is too large.");
    }
    return JSON.parse(body || "{}");
}

const server = createServer(async (request, response) => {
    if (request.method === "OPTIONS") {
        sendJson(response, 204, {});
        return;
    }

    if (request.method !== "POST" || request.url !== "/api/chat") {
        sendJson(response, 404, { error: "Not found" });
        return;
    }

    try {
        const body = await readBody(request);
        const result = await getChatReply(body.messages);
        sendJson(response, 200, result);
    } catch (error) {
        sendJson(response, 400, { error: error.message || "Invalid chat request." });
    }
});

server.listen(config.port, () => {
    console.log(`AGOS chat server listening on http://localhost:${config.port}`);
});