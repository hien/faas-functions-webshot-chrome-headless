'use strict'
const puppeteer = require('puppeteer')

module.exports = (context, callback) => {
  try {
    const browser = puppeteer.launch({
      executablePath: '/home/app/headless_shell',
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-gpu',
        '--disable-setuid-sandbox',
        '--single-process',
        '--headless',
        `--remote-debugging-port=9222`
      ]
    })
    callback(undefined, { status: 'done' })
  } catch (error) {
    callback(error, { status: 'error' })
  }
}
