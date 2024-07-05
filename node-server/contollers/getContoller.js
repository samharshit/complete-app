const data = require('../MOCK_DATA.json')

const getContoller = (async(req, res) => {
console.log("Sorry..............")
const formattedData = JSON.stringify(data, null, 4);
  res.type('json').send(formattedData);
})

module.exports = getContoller