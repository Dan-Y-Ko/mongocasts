const assert = require("assert");
const User = require("../src/user");

describe("virtual types", () => {
    it("postCount return number of posts", done => {
        const joe = new User({
            name: "joe",
            posts: [{ title: "postTitle" }]
        });

        joe.save()
            .then(() => User.findOne({ name: "joe" }))
            .then(user => {
                assert(joe.postCount === 1);
                done();
            });
    });
});
