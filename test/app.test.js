const app = require("../app");
const chai = require("chai");
const http = require("chai-http");

const { expect } = chai;
chai.use(http);
describe("App", () => {
    describe("GET /", () => {
        it("Returns Hello World", (done) => {
            chai.request(app)
                .get("/")
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.text).to.equals("Hello World")
                    done();
              });
        });
    });

    describe("GET /webhook", (done) => {
    	it("Returns 403 because token missing or fails", (done) => {
            chai.request(app)
	        .get("/webhook")
	        .end((err, res) => {
		    expect(res).to.have.status(403);
		    done();
	    });
	});
    });
});
