import * as express from "express";

export const mockServerPort = "5003";
export const mockServerBaseUrl = "http://localhost:" + mockServerPort;



export class MockServer {
    // the express and server instance
    app: express.Express;
    server;

    constructor() {
        this.app = express();
    }

    start() {
        // Start now
        this.server = this.app.listen(mockServerPort, () => {
            console.log("mock server running on port" + mockServerPort);
        });

    }

    stop() {
        this.server.close();
        this.server = null;
    }
}

export const server = new MockServer();

