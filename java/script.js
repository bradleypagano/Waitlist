const express = require("express");
const http = require("http");
const path = require("path");

const app = express();
const PORT = 3000;

let tables = [];
let waitList = [];
