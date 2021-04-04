
const {createProxyMiddleware} = require("http-proxy-middleware");

const express  = require("express");

const app = express();

app.use('/opendata', createProxyMiddleware ({ target: 'https://data.gov.ru/sites/default/files', changeOrigin: true, secure: false }));    

app.use(express.static(__dirname + "/public"));


app.listen(3000);