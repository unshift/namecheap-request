module.exports = () => require('node-fetch')('https://ipv4.icanhazip.com/')
  .then(resp => resp.text())
  .then(resp => resp.replace(/\r?\n/, ''))
