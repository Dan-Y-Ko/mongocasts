const assert = require("assert");
const User = require("../src/user");

describe("creating records", () => {
    it("should save a user", done => {
        const joe = new User({ name: "joe" });
        joe.save().then(() => {
            assert(!joe.isNew);
            done();
        });
    });
});
