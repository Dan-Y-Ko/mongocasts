const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

before(done => {
    mongoose.connect("mongodb://localhost/users_test");
    mongoose.connection
        .once("open", () => {
            console.log("good to go");
            done();
        })
        .on("error", error => console.warn("Warning", error));
});

beforeEach(done => {
    mongoose.connection.collections.users.drop(() => {
        done();
    });
});
