// Load the path module for working with file paths
const path = require("path")
// require the JSDOM dependency
const jsdom = require("jsdom")

// Extract the JSDOM constructor for JSDOM
const { JSDOM } = jsdom

// Function to render the DOM from a given file
const renderDOM = async (filename) => {
  // Get the full file path from the current working directory to the provided filename
  // 'path.join()' takes two arguments
    // the current working directory
    // the file name
    // then resolves to be a oth to the filename
  const filePath = path.join(process.cwd(), filename)
  // Load the file into our fake JSDOM with script execution enabled
  const dom = await JSDOM.fromFile(filePath, {
    runScripts: "dangerously",
    resources: "usable"
  })

  // console.log("THEDOm: ", dom)

  return new Promise((resolve, _) => {
    dom.window.document.addEventListener("DOMContentLoaded",
      () => {
        resolve(dom)
      }
    )
  })
}


module.exports = { renderDOM }