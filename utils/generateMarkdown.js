// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  var licenseType = license; 
  var yourLicense = '';
  if(licenseType === 'MIT') {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseType === 'Apache') {
    yourLicense = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

    `
  } else if (licenseType === 'BSD') {
    yourLicense = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  } else {
    license.license = ""
  }
  return yourLicense;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var licenseLink = license; 
  var yourLicense = '';
  if(licenseLink === 'MIT') {
    yourLicense = `https://opensource.org/licenses/MIT`
  } else if (licenseLink === 'Apache') {
    yourLicense = `https://www.apache.org/licenses/LICENSE-2.0

    `
  } else if (licenseLink === 'BSD') {
    yourLicense = `https://opensource.org/licenses/BSD-3-Clause`
  } else {
    license.license = ""
  }
  return yourLicense;
  
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = {generateMarkdown, renderLicenseBadge, renderLicenseLink};
