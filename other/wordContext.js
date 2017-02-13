'use strict';
var http = require("http");

function printWordContexts(word, website) {
    http.get(website, (res) => {
        console.log(res.statusCode);
        let body = Buffer.from("", 'utf8');
        res.on("data", (chunk) => {
            body = Buffer.concat([body, chunk]);
        });

        res.on("end", () => {
            let pos = -1;
            let count = 0;
            let context = Buffer.alloc(200);
            let contextSize = 2;
            do {
                pos = body.indexOf(word, pos + 1);
                count++;
                body.copy(context, 0, Math.max(0, pos - contextSize * word.length), Math.min(pos + (contextSize + 1) * word.length, body.length - 1));
                console.log(context.toString());
            } while (pos != -1)
            console.log("Found word " + word + ": " + count);
        });
    });
}

function test() {
    printWordContexts("here", "http://www.wikipedia.com");
}

module.exports = {
    run: test
}