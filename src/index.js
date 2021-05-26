var fs = require('fs');
const format = require('toris-format');

var fileName = 'generated-index.html';
var x, formattedHTML;
fs.open(fileName, 'r+', function(err, fd) {
  if (err) {
     return console.error(err);
  }   
});

module.exports = function initiateFile(){
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
    `
    fs.appendFile(fileName, html, {}, (err) => {
      if(err){
        console.log("Error! -> " + err);
      }
    }
    );
    
}

module.exports = function appendButton(text, color){
  
  var html = 
  `
  <button type="button" class= "btn ${color}">${text}</button>
  `
  fs.appendFile(fileName, html, {}, (err) => {
    if(err){
      console.log("Error! -> " + err);
    }
  }
  );
}

module.exports = function appendCard(cardTitle, cardImageURL, cardBody, width){
    var html = 
    `
    <div class="card" style="width: ${width};">
    <img class="card-img-top" src="${cardImageURL}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${cardTitle}</h5>
      <p class="card-text">${cardBody}</p>
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

module.exports = function appendParagraph(text, alignment){

    var html = 
    `
    <p class="${alignment}">${text}</p>
    `
    fs.appendFile(fileName, html, {}, (err) => {
      if(err){
        console.log("Error! -> " + err);
      }
    }
    );
    
}

module.exports = function endFile(){

    var html = 
    `
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

module.exports = function formatFile(){
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