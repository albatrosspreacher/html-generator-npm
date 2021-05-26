var fs = require('fs');
const format = require('toris-format');
var async = require("async");

var fileName = 'generated-index.html';
var x, formattedHTML;
fs.open(fileName, 'r+', function(err, fd) {
  if (err) {
     return console.error(err);
  }   
});

async function initiateFile(){
    var html = `
    <html>
    <head>
    <title>↓ home ↓</title>
        <link
          rel="shortcut icon"
          href="https://img.icons8.com/dusk/64/000000/monitor--v1.png"
          title="Monitor icon by Icons8"
        />
        <meta charset="utf-8" />
        <!-- meta tags for SEO using Open Graph Protocol -->
        <meta name="description" content="drag and drop website builder!" />
        <meta name="keywords" content="HTML, CSS, JavaScript, Developer" />
        <meta name="author" content="smolpkg" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta
          property="og:image:url"
          content="https://img.icons8.com/dusk/64/000000/monitor--v1.png"
        />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:alt" content="a monitor graphic" />
        <meta property="og:title" content="built with website builder" />
        <meta property="og:description" content="a drag and drop website builder" />
        <!-- meta tags for twitter -->
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@smolpkg" />
        <meta
          name="twitter:image"
          content="https://img.icons8.com/dusk/64/000000/monitor--v1.png"
        />
        <meta name="twitter:image:width" content="300" />
        <meta name="twitter:image:alt" content="a monitor graphic" />
        <meta
          name="twitter:description"
          content="built with drag and drop website builder!"
        />
    
        <!-- all Bootstrap CSS -->
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
    
        <link rel="stylesheet" href="/index.css"/>
      </head>
      <body>
      <style>
      .row{
        padding: 5px;
      }
      </style>
      <!-- content begins -->
      <div class="container" style="padding: 10px">
    `
    fs.appendFile(fileName, html, {}, (err) => {
      if(err){
        console.log("Error! -> " + err);
      }
    }
    );
    
}

async function appendHeading(text, heading){
  var html = 
  `
  <div class="row">
  <h${heading} style="padding: 5px;">${text}</h${heading}> <!-- heading added -->
  </div>
  `
  fs.appendFile(fileName, html, {}, (err) => {
    if(err){
      console.log("Error! -> " + err);
    }
  }
  );
}

async function appendInputField(type, placeholder){
  var html = 
  `
  <div class="row">
    <div class="col-sm-3">
    <input type="${type}" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="${placeholder}"> <!-- input field added -->
    </div>
  </div>
  `
  fs.appendFile(fileName, html, {}, (err) => {
    if(err){
      console.log("Error! -> " + err);
    }
  }
  );
}

async function appendButton(text, color){
  
  var html = 
  `
  <div class="row">
  <div class="col-sm-3">
  <button type="button" class= "btn ${color}">${text}</button> <!-- button added -->
  </div>
  </div>
  `
  fs.appendFile(fileName, html, {}, (err) => {
    if(err){
      console.log("Error! -> " + err);
    }
  }
  );
}

async function appendCard(cardTitle, cardImageURL, cardBody, width){
    var html = 
    `
    <!-- card begins -->
    <div class="row">
    <div class="col-sm-3">
    <div class="card" style="width: ${width};">
    <img class="card-img-top" src="${cardImageURL}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${cardTitle}</h5>
      <p class="card-text">${cardBody}</p>
    </div>
    </div>
    </div>
    </div>
    <!-- card ends -->
    `
    fs.appendFile(fileName, html, {}, (err) => {
      if(err){
        console.log("Error! -> " + err);
      }
    }
    );
}

async function appendParagraph(text, alignment){

    var html = 
    `
    <div class="row">
    <div class="col-sm-3">
    <p class="${alignment}">${text}</p> <!-- paragraph added -->
    </div>
    </div>
    `
    fs.appendFile(fileName, html, {}, (err) => {
      if(err){
        console.log("Error! -> " + err);
      }
    }
    );
    
}

async function endFile(){

    var html = 
    `
    </div>
    <!-- content ends -->
    </body>
    </html>
    `
    fs.appendFile(fileName, html, {}, (err) => {
      if(err){
        console.log("Error! -> " + err);
      }
    }
    );
}

async function formatFile(){
  fs.readFile(fileName, 'utf8', function(err, data){
      
    // Display the file content
    x = data;
    const unformattedHTML = x;
const config = {
    definition_type: 'HTML'
}
formattedHTML = format.formatContents(unformattedHTML, config);
console.log(formattedHTML);
fs.writeFile(fileName, formattedHTML, function(err) {
  if (err) {
     return console.error(err);
  }
});
    
});

}

module.exports = {initiateFile, appendHeading,appendInputField, appendButton, appendCard, appendParagraph, endFile, formatFile}