var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

    mongoose.connect(config.db.uri);
    var db = mongoose.connection;

/* Fill out these functions using Mongoose queries*/


var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */

   var libwest = Listing.find({name: "Library West"});
   console.log(libwest);

};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */

   Listing.remove({code: "CABL"});
};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */

    var phelps = Listing.update({code: "PHL"}, {$set: {address: "Phelps Lab, Gainesville, Fl. 32603"}}
    );
    console.log(phelps);
};
var retrieveAllListings = function() {

  var listings = Listing.find(function(err,listings) {
    if(err) return console.error(err);
    console.log(listings);
  });
};


findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();
