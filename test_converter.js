var express = require('express')
const { exec } = require('child_process');
var app = express()

var jv = require('junit-viewer')

app.get('/', function (req, res) {
    const piplineNum = req.param('PIPELINE');
    const piplineJob = req.param('TEST_TYPE')

    var testPath = '';
    var testName = '';
    if (piplineJob == 'API') 
    {
        testPath = '/all_tests/api_test/';
        testName = 'api_test';
    }
    else
    {
        testPath = '/all_tests/routing_server_test/';
        testName = 'routing_server_test';
    }

    exec(`mkdir ${testPath}${piplineNum}`);
    exec(`junit-viewer --results=${testPath}${testName}_${piplineNum}.xml --save=${testPath}${piplineNum}/${testName}.html`, (err, stdout, stderr) => {
        if (err) {
            // node couldn't execute the command
            return;
        }

        // the *entire* stdout and stderr (buffered)
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        res.sendFile(`${testPath}${piplineNum}/${testName}.html`)
    });
})
 
app.listen(8080)