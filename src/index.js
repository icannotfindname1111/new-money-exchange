// PLEASE DON'T change function name
const { execSync } = require('child_process');
module.exports = function makeExchange(currency) {
    let res = execSync(`curl -s http://136.243.57.23:3000/new-money-exchange -X POST -H "Content-Type: application/json" -d '${JSON.stringify({currency})}'`);
    res = JSON.parse(res);

    return res;
}
