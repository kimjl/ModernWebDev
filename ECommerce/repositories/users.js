const fs = require('fs');
const crypto = require('crypto');
const util = require('util');
const Repository = require('./repository');

const scrypt = util.promisify(crypto.scrypt);

class UsersRepository extends Repository {
	async create(attrs) {
		//attrs = {email: 'email@email.com', password: 'password}
		attrs.id = this.randomId();

		const salt = crypto.randomBytes(8).toString('hex');
		const buff = await scrypt(attrs.password, salt, 64); //promise our scrypt

		const records = await this.getAll();
		const record = {
			...attrs,
			password: `${buff.toString('hex')}.${salt}`
		};
		//take all properties of attrs but make password encrypted with hash
		records.push(record);

		await this.writeAll(records);

		return record;
	}

	async comparePassword(saved, supplied) {
		//Saved -> password saved in our database. 'hashed.salt'
		//Supplied -> password given by user trying to sign in
		const [ hashed, salt ] = saved.split('.');
		const hashedSuppliedBuff = await scrypt(supplied, salt, 64);

		return hashed === hashedSuppliedBuff.toString('hex');
	}
}

module.exports = new UsersRepository('users.json');

// const test = async () => {
// 	const repo = new UsersRepository('users.json');

// 	const user = await repo.getOneBy({ aasdf: 'asdfasdf' });

// 	console.log(user);
// };

// test();
