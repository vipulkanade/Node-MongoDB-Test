/**
 * New node file
 */
// Database
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/Furniture_DB');


function listFurniture(req, res){
	//var db = req.db;
	console.log(db);
    var collection = db.get('furniture');
    collection.find({"name" : "Special_chair"},{},function(e,docs){
    	console.log(JSON.stringify(docs));
        res.json(docs);
    });	
}

exports.list = listFurniture;