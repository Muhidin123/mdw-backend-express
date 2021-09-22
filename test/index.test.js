import { expect, server, BASE_URL } from "./setup";
describe("Pages", () => {
  it("get pages page", done => {
    server
      .get(`${BASE_URL}/content/home`)
      .expect(200)
      .end((_err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data).to.be.instanceOf(Array);
        res.body.data.forEach(m => {
          expect(m).to.have.property("title");
          expect(m).to.have.property("content");
          expect(m).to.have.property("page");
        });
        done();
      });
  });
});

describe("Home page test", () => {
  it("gets base url and returns array of home pages", done => {
    server
      .get(`${BASE_URL}/content/home`)
      .expect(200)
      .end((_err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data.length).to.equal(3);
        expect(res.body.data[0].title).to.equal("10/4");
        expect(res.body.data).to.be.instanceOf(Array);
        done();
      });
  });
});

describe("Contact page test", () => {
  it("gets base url and returns array of contact pages", done => {
    server
      .get(`${BASE_URL}/content/contact`)
      .expect(200)
      .end((_err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data.length).to.equal(1);
        expect(res.body.data[0].title).to.equal("Well Howdy");
        expect(res.body.data).to.be.instanceOf(Array);
        done();
      });
  });
});
