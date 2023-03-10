module.exports = (app) => {
    app.use("/api/v1/auth", require("./auth.route"));
    app.use("/api/v1/profile", require("./auth.route"));
    app.use("/api/v1/publication", require("./auth.route"));
}