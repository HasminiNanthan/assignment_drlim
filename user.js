const bcrypt = require("bcrypt")
let user;
// /
class User {
	static async injectDB(conn) {
		user = await conn.db("Prison_VMS").collection("users")
	}

	/**
	 * @remarks
	 * This method is not implemented yet. To register a new user, you need to call this method.
	 * 
	 * @param {*} username 
	 * @param {*} password 
	 * @param {*} phone 
	 */
	static async register(username, password, name, officerno, rank, phone) {
		// TODO: Check if username exists
		const res = await users.findOne({ username: username })

			if (res){
				return { status: "duplicate username"}
			}

			// TODO: Hash password
			const salt = await bcrypt.genSalt(10);
			const hash = await bcrypt.hash(password, salt)

			// TODO: Save user to database
			users.insertOne({
							"username": username,
							"Password": password,
							"HashedPassword": hash,
							"Name": name,
							"OfficerNo": officerno,
							"Rank": rank,
							"Phone": phone,});
			return { status: "Succesfully register user"}
	}

	static async login(username, password) {
			// TODO: Check if username exists
			const result = await users.findOne({username: username});

				if (!result) {
					return { status: "invalid username" }
				}

			// TODO: Validate password
				const com = await bcrypt.compare(password, result.HashedPassword)
				if (!com){
					return { status: "invalid password"}
				}
			// TODO: Return user object
				return result;
				
	}
	
		static async update(username, name, officerno, rank, phone){
				User.updateOne({username:username},{$set:{
				"Name": name,
				"OfficerNo": officerno,
				"Rank": rank,
				"Phone": phone,}});
				return { status: "Information updated" }
		}

		static async delete(username) {
			User.deleteOne({username: username})
			return { status: "Admin deleted!" }
		}

	}


module.exports = User;