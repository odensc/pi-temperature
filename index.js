var spawn = require("child_process").spawn;

module.exports.measure = function(callback) {
	var regex = /temp=([^'C]+)/;
	var cmd = spawn("/usr/bin/vcgencmd", ["measure_temp"]);

	cmd.stdout.on("data", function(buf) {
		callback(null, parseFloat(regex.exec(buf.toString("utf8"))[1]));
	});

	cmd.stderr.on("data", function(buf) {
		callback(new Error(buf.toString("utf8")));
	});
};
