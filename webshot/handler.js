'use strict'
const puppeteer = require('puppeteer')

module.exports = (context, callback) => {
  try {
    const { url, selector } = JSON.parse(context)
    let result = { url, selector }
    console.log(`URL: ${url}`)
    puppeteer
      .launch({
        executablePath: '/usr/bin/chromium-browser',
        args: ['--disable-dev-shm-usage']
      })
      .then(browser => {
        console.log(browser.version())
        callback(undefined, browser.version())
      })
  } catch (error) {
    console.error(error.red)
    callback(error)
  }
}
