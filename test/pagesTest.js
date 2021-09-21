// import { expect, server, BASE_URL } from "./setup";
// describe("Pages", () => {
//   it("get pages page", done => {
//     server
//       .get(`${BASE_URL}/pages`)
//       .expect(200)
//       .end((_err, res) => {
//         expect(res.status).to.equal(200);
//         expect(res.body.messages).to.be.instanceOf(Array);
//         res.body.messages.forEach(m => {
//           expect(m).to.have.property("title");
//           expect(m).to.have.property("content");
//         });
//         done();
//       });
//   });
// });
