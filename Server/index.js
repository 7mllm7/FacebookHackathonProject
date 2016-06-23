var express = require('express');
var bodyParser = require('body-parser');
var compression = require('compression');
var cors = require('cors');
var http = require('http');
var path = require('path');
var fs = require('fs');
var _ = require('lodash');

var app = express();
app.use(compression());
app.use(bodyParser.json());
app.use(cors());
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

var data = JSON.parse(fs.readFileSync('data.json'));

function saveData() {
    fs.writeFileSync('data.json', JSON.stringify(data), 'utf-8');
}

app.post('/user', function(req, res) {
    var user = {
        userId: data.users.length,
        name: req.body.displayName
    };

    data.users.push(user);
    saveData();

    res.json(user);
});

app.get('/torches', function (req, res) {
    res.json(data.torches);
});

app.post('/torch/:torchId/pickup', function (req, res) {
    var torch = data.torches.filter(function (torch) {
        return torch.torchId == req.params.torchId;
    })[0];

    torch.currentRun = {
        torchId: req.params.torchId,
        origin: req.body.location,
        destination: null,
        runner: req.body.userId
    };

    data.torches = _.without(data.torches, { torchId: req.params.torchId });
    data.torches.push(torch);

    saveData();

    res.json(torch);
});

app.post('/torch/:torchId/drop', function (req, res) {
    var torch = data.torches.filter(function (torch) {
        return torch.torchId == req.params.torchId;
    })[0];

    torch.currentRun.destination = req.body.location;

    data.runs.push(torch.currentRun);
    torch.currentRun = null;

    data.torches = _.without(data.torches, { torchId: req.params.torchId });
    data.torches.push(torch);

    saveData();

    res.json(torch);
});

app.get('/runs/:torchId', function (req, res) {
    var runs = data.runs.filter(function (run) {
        return run.torchId == req.params.torchId;
    });

    res.json(runs);
});

app.listen(7777);