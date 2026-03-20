const express = require('express');
const app =  express();
const port = 3000;

app.use(express.json());

app.use((req, res, next) => {
    // Logs every request
    console.log('${req.method} ${req.url} - ${new Date()}');
    next(); // Pass to next handler (Required!)
});

app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    res.send(id);
});

app.get('/search', (req, res) => {
    const id = req.query.id;
    console.log(id);
    res.send(id);
});

//app.get('/', (req, res) => {
  //  res.send('Hello from express!');
//});

app.listen(port, () => {
    console.log('Example app listening from port ${port}');
});