module.exports.middleware = nested;

//Middleware
app.use((req, res, next) => {
    console.log(Date());
    next();
});
