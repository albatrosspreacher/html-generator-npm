# html-generator-npm v1.0.3

A [Node.js](https://nodejs.org/) package that generates HTML code from the server side.

# Installation

Using npm: `npm i html-generator-npm`

# Usage

```
var htmlGenerator = require('html-generator-npm') //include the package

htmlGenerator.initiateFile() //initiate file
htmlGenerator.appendParagraph("Hello World", "text-left") //add a left aligned paragraph
htmlGenerator.endFile() //close all the tags using endFile()
//htmlGenerator.formatFile() //format using toris-format
```

## Functions

- initiateFile(): must be called first, initiates the file with basic HTML tags
- appendButton(text, color): `text` to be written on the button, `color` must be written in bootstrap class name format i.e. ` btn-primary`
- appendHeading(text, heading): `text` must be the heading content, `heading` must specify the number i.e "1" for "h1" in HTML
- appendInputField(type, placeholder): `type` is the type of input (email, password, etc), `placeholder` text
- appendCard(cardTitle, cardImageURL, cardBody, width): `width` must be in px
- appendParagraph(text, alignment): `text` to be written in the paragraph, `alignment` must be written in bootstrap class name format i.e. `text-left`
- appendIframe(url, height, width): `url` that you want to add in the iframe, `height` and `width` of the iframe
- endFile(): must be called towards the end, closes the basic HTML tags
- formatFile(): must be called last; uses a dependency, [toris-format](https://www.npmjs.com/package/toris-format)

# Contribution

- This is an open-source project, and shall continue to remain so!
Make a pull request! All contributions are welcome :D
- For major changes, please open an issue first to discuss what you would like to change.

# License

[MIT](LICENSE)
