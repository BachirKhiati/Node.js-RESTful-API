'use strict';

const user = require('../models/user');
const bcrypt = require('bcryptjs');

exports.registerUser = (name, email, password) => 

	new Promise((resolve,reject) => {

	    const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(password, salt);

		const newUser = new user({

			name: name,
			email: email,
			hashed_password: hash,
			created_at: new Date(),
            temp_password	: "",
            temp_password_time: "",
            setNewPassword:"",
            password:"",
            token:"",
            twitteruid: "",
            facebookuid: "",
            googleuid: "",
            lastlogin:"",
            Value : "",
            Date : "",
            Time : "",
            Hei : "",
            Wei : "",
            Type : "",
            Gender : "",
            Age : "",
            Picture : "",
            Data1: "",
            Data2: "",
            Data3: "",
            Data4: "",
            Data5: ""

		});

		newUser.save()

		.then(() => resolve({ status: 201, message: 'User Registered Sucessfully !' }))

		.catch(err => {

			if (err.code == 11000) {
						
				reject({ status: 409, message: 'User Already Registered !' });

			} else {

				reject({ status: 500, message: 'Internal Server Error !' });
			}
		});
	});


