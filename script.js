
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=Gb3VvZev6NOlpAGkQweRPnoiLDPPIIse";
 

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });