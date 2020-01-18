const fs = require('fs');
const util = require('util');
const chalk = require('chalk');

//METHOD 1 - WRAP LSTAT IN PROMISE
// const lstat = (filename) => {
// 	return new Promise((resolve, object) => {
// 		fs.lstat(filename, (err, stats) => {
// 			if (err) {
// 				reject(err);
// 			}
// 			resolve(stats);
// 		});
// 	});
// };

//METHOD 2 - USE PROMISFY TO DO THE SAME AS WRAP LSTAT IN PROMISE
// const lstat = util.promisify(fs.lstat);

//METHOD 3 - RETURNS PROMISE INSTEAD OF CALLBACK
const { lstat } = fs.promises;
const targetDir = process.argv[2] || process.cwd();

fs.readdir(targetDir, async (err, filenames) => {
	if (err) {
		console.log(err);
	}

	//PROMISE BASED SOLUTION ALL AT SAME TIME
	const statPromises = filenames.map((filename) => {
		return lstat(filename);
	});

	const allStats = await Promise.all(statPromises);

	for (let stats of allStats) {
		const index = allStats.indexOf(stats);

		if (stats.isFile()) {
			console.log(filenames[index]);
		} else {
			console.log(chalk.bold(filenames[index]));
		}
	}

	//PROMISE BASED SOLUTION ONE AT A TIME
	// for (let filename of filenames) {
	// 	try {
	// 		const stats = await lstat(filename);

	// 		console.log(filename, stats.isFile());
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// }

	//CALLBACK BASED SOLUTION
	// const allStats = Array(filenames.length).fill(null);
	// for (let filename of filenames) {
	// 	const index = filenames.indexOf(filename);
	// 	fs.lstat(filename, (err, stats) => {
	// 		if (err) {
	// 			console.log(err);
	// 		}

	// 		allStats[index] = stats;

	// 		const ready = allStats.every((stats) => {
	// 			return stats;
	// 		});

	// 		if (ready) {
	// 			allStats.forEach((stats, index) => {
	// 				console.log(filenames[index], stats.isFile());
	// 			});
	// 		}
	// 	});
	// }
});
