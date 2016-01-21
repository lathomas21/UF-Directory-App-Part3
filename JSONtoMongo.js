'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
  */
  var fs = require('fs'),
  mongoose = require('mongoose'), 
  Schema = mongoose.Schema, 
  Listing = require('./ListingSchema.js'), 
  config = require('./config');

  /* Connect to your database */
  mongoose.connect(config.db.uri);
  var db = mongoose.connection;


/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
  */

  var jsonObj = require("./listings.json");

  var newEntry = {};

  for (var i=0; i < jsonObj.entries.length; i++) {
   var obj = jsonObj.entries[i];
   obj.coordinates = obj.coordinates || {};
   obj.address = obj.address || {};

   newEntry = new Listing({
    code: obj.code,
    name: obj.name,
    coordinates: {
      latitude: obj.coordinates.latitude,
      longitude: obj.coordinates. longitude
    },
    address: obj.address
  });

   newEntry.save(function(err){
    console.log('New Entry!');
  });
 }






/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */