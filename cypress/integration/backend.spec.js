const apiUrl = `${Cypress.env("apiUrl")}`;

describe("Backend Test Spec", () => {
  it("should call ping", () => {
    cy.request({
      failOnStatusCode: false,
      method: "GET",
      url: `${apiUrl}/ping`,
    }).then((response) => {
      assert.equal(
        response.status,
        200,
        "The application should respond with 200 on ping request"
      );
    });
  });

  it("should call ping-2", () => {
    cy.request({
      failOnStatusCode: false,
      method: "GET",
      url: `${apiUrl}/ping-2`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("data", "ping-2");
    });
  });

  it("should return post data 1", () => {
    cy.request({
      failOnStatusCode: false,
      method: "POST",
      url: `${apiUrl}/ping-2`,
      body: {
        name: "Jane",
        age: 18,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("name", "Jane");
      expect(response.body).to.have.property("age", 18);
    });
  });

  it("should return post data 2", () => {
    cy.request({
      failOnStatusCode: false,
      method: "POST",
      url: `${apiUrl}/ping-2`,
      body: {
        name: "Alice",
        age: 33,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("name", "Alice");
      expect(response.body).to.have.property("age", 33);
    });
  });
});
