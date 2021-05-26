# html-generator-npm v1.0.2

A [Node.js](https://nodejs.org/) module that generates HTML code.

# Installation

Using npm: `npm i html-generator-npm`

In Node.js, `var htmlGenerator = require('html-generator-npm) //load the package`

# Usage

## Functions

- initiateFile(): must be called first, initiates the file with basic HTML code.
- appendButton(text, color): `text` to be written on the button, `color` must be written in bootstrap classname format i.e. `btn btn-primary`
- appendCard(cardTitle, cardImageURL, cardBody, width)
- appendParagraph(text, alignment): `text` to be written in the paragraph, `alignment` must be written in bootstrap classname format i.e. `text-left` 
- endFile(): must be called towards the end, ends the file with basic HTML code.
- formatFile(): must be called last; uses a depenedency, [toris-format](https://www.npmjs.com/package/toris-format)
- appendHeading(text, heading): `text` must be the heading content, `heading` must specify the number i.e "1" for "h1" in HTML
- appendInputField(type, placeholder): `type` is the type of input (email, password, etc), `placeholder` text

# Contribution

This is an open-source project, and shall continue to remain so!
Make a pull request! All contributions are welcome :D
For major changes, please open an issue first to discuss what you would like to change.

# License

[MIT](https://github.com/nandiniproothi/html-generator-npm/blob/main/LICENSE)
