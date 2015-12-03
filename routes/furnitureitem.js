/**
 * New node file
 */
// Database
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/Furniture_DB');


function furnitureItem(req, res){
	console.log(req.query.item_name);
	var itemName = req.query.item_name;
    var collection = db.get('furniture');
    collection.find({"name" : itemName},{},function(e,docs){
    	console.log(JSON.stringify(docs));
        res.json(docs);
    });	
}

exports.furnitureItem = furnitureItem;