'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({ 

	name 			: String,
	email			: {type: String, unique: true}, 
	hashed_password	: String,
	created_at		: String,
	temp_password	: String,
	temp_password_time: String,
    setNewPassword:	String,
	password:	String,
    token:	String,
    twitteruid: String,
	facebookuid: String,
	googleuid: String,
	Value  : String,
    lastlogin:String,
	Date : String,
	Time : String,
	Hei : String,
	Wei	 : String,
	Type : String,
	Gender : String,
	Age : String,
	Picture : String,
	Data: String,
    Data2: String,
    Data3: String,
    Data4: String,
	Data5: String


});

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/node-login');
mongoose.set('debug', true);


module.exports = mongoose.model('user', userSchema);


/*
{



    "COLUMN_USER_DATE" : "String",
    "COLUMN_USER_TIME" : "60",
    "PERSON_COLUMN_HEI" : "String",
    "PERSON_COLUMN_WEI" : "String",
    "PERSON_COLUMN_TYPE" : "String",
    "PERSON_COLUMN_GENDER" : "String",
    "PERSON_COLUMN_AGE" : "String",
    "PERSON_COLUMN_Picture" : "String",
    "Data" : "String",
    "Data2" : "String",
    "Data3" : "String",
    "Data4" : "String",
    "Data5" : "String",
    "Data6" : "String",
    "Data7" : "String",
    "Data8" : "String",
    "Data9" : "String",
    "Data10" : "String",
    "Data11" : "String",

    "COLUMN_USER_VALUE" : [
    {
        "valueDevice" :"String"
    }
]

}*/
