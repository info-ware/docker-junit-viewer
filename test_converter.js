var express = require('express')
const { exec } = require('child_process');
var app = express()

var jv = require('junit-viewer')
//var parsedData = jv.parseXML('test.xml')
//var renderedData = jv.render(parsedData)

const testPath = '/routing_server_tests/'

app.get('/', function (req, res) {
    const piplineNum = req.param('PIPELINE');

    exec(`mkdir ${testPath}${piplineNum}`)
    exec(`junit-viewer --results=${testPath}routing_server_test_${piplineNum}.xml --save=${testPath}${piplineNum}/routing_server_test.html`, (err, stdout, stderr) => {
    if (err) {
        // node couldn't execute the command
        return;
    }

    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
    res.sendFile(`${testPath}${piplineNum}/routing_server_test.html`)
    });
})
 
app.listen(8080)