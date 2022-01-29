const express = require('express');
const bodyParser = require('body-parser');

const productRouter = require('./routes/product.routes');

const db = require('./utils/mongoose');
db.connectDB();

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("<h1>Hello mr Tiwokku.</h1>");
});
app.use('/products',productRouter);

app.listen(app.get("port"));
console.log(`server on port ${app.get("port")}`);