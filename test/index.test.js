import { expect, server, BASE_URL } from "./setup";

describe("Home page test", () => {
  it("gets base url and returns array of home pages", done => {
    server
      .get(`${BASE_URL}/content/home`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data.length).to.equal(3);
        expect(res.body.data[0].title).to.equal("10/4");
        done();
      });
  });
});

describe("Contact page test", () => {
  it("gets base url and returns array of contact pages", done => {
    server
      .get(`${BASE_URL}/content/contact`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data.length).to.equal(1);
        expect(res.body.data[0].title).to.equal("Well Howdy");
        done();
      });
  });
});
