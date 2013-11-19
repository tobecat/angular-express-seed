/*
 * Serve JSON to our AngularJS client
 */

exports.pics = function(req, res) {
	var folderName = req.query.group;
	var resObjs = [];
	var files = fs.readdirSync('./public/pics/'+ folderName +'/thumbnails');
	files.forEach(function(file){
		var obj = {
			full: 'pics/' + folderName + '/'+file,
			thumbnail: 'pics/' + folderName + '/thumbnails/'+file,
		};
		resObjs.push(obj);
	});
	res.json(resObjs);
};