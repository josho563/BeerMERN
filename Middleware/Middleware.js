module.exports.middleware = middleware;

//Middleware Example
app.use((req, res, next) => {
    console.log(Date());
    next();
});
