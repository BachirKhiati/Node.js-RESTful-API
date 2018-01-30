'use strict';

const user = require('../models/user');

exports.getProfile = email => 
	
	new Promise((resolve,reject) => {

		user.find({ email: email }, {
			name: 1,
			email: 1,
			created_at: 1,
			_id: 0 })

		.then(users => resolve(users[0]))

		.catch(err => reject({ status: 500, message: 'Internal Server Error !' }))

	});


exports.getAlldata = email =>

    new Promise((resolve,reject) => {

        user.find({ email: email }, {
            name: 1,
            email: 1,
            created_at: 1,
            password: 1,
            Hei : 1,
            Wei	 : 1,
            Type : 1,
            Gender : 1,
            Age : 1,
            _id: 0,
            })

            .then(users => resolve(users[0]))

            .catch(err => reject({ status: 500, message: 'Internal Server Error !' }))

    });