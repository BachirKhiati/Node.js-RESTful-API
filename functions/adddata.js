'use strict';


const user = require('../models/user');


exports.insertdata = (email,Item, Value) =>






/*
                if (item.trim()==("COLUMN_USER_TIME").trim()) {

                    let user = users[0];


                    user.COLUMN_USER_TIME = Value.trim();
                    console.log("item2:" + item.toString());
                    console.log("Value2:" + Value.toString());

                    return user.save();
                }


              /!*  if (item.trim()==("COLUMN_USER_VALUE").trim()){
                /!*    var friend = { valueDevice : parseInt(Value) };
                    console.log("Value2Value3111111:"+parseInt(Value));
                    user.findOneAndUpdate({email: email}, {$push: {COLUMN_USER_VALUE: friend}});*!/

                // add the message to the contacts messages
            //   var friend = { valueDevice : parseInt(Value) };
             //   console.log("Value2Value3111111:"+parseInt(Value));
               // user.findOneAndUpdate({email: email}, {$push: {COLUMN_USER_VALUE: friend}}
             //   );



                        console.log("item2Valueaaaaaaaaaaaaaaa4:"+item.toString());
                console.log("Value2Valueaaaaaaa4:"+Value.toString());

                let user = users[0];

                user.COLUMN_USER_VALUE=="hello";

                console.log("item2Value3:"+item.toString());
                console.log("Value2Value3:"+Value.toString());

                        return user.save();

                }
*!/
                if (item.trim()==("COLUMN_USER_VALUE").trim()) {



                    user.findOneAndUpdate({email: email}, {$push: {COLUMN_USER_VALUE: friend}});
                    console.log("item2:" + item.toString());
                    console.log("Value2:" + Value.toString());


                }*/
    new Promise((resolve, reject) => {

        var friend = { valueDevice : parseInt(Value) };
        //

        user.find({ email: email })

            .then(users => {
                let user;
                switch (Item.trim())

                    {
                    // case "COLUMN_USER_TIME":
                    //    user = users[0];
                    //
                    //
                    // user.COLUMN_USER_TIME = Value.trim();
                    // return user.save();
                    // break;
                    // case "COLUMN_USER_VALUE":
                    //
                    //
                    // return user.Update({email: email}, {$push: {COLUMN_USER_VALUE: friend}});
                    //     break;

                    case "Data":

                        user = users[0];

                        user.Data = Value.trim();
                        return user.save();
                        break;


                    case "name":
                        user = users[0];

                        user.name = Value.trim();
                        return user.save();
                        break;

                    case "email":
                        user = users[0];

                        user.email = Value.trim();
                        return user.save();
                        break;

                    case "Age":
                        user = users[0];

                        user.Age = Value.trim();
                        return user.save();
                        break;

                    case "Gender":
                        user = users[0];

                        user.Gender = Value.trim();
                        return user.save();
                        break;

                    case "Hei":
                        user = users[0];

                        user.Hei = Value.trim();
                        return user.save();
                        break;
                    case "Wei":
                        user = users[0];

                        user.Wei = Value.trim();
                        return user.save();
                        break;


                    case "Type":
                        user = users[0];

                        user.Type = Value.trim();
                        return user.save();
                        break;

                    case "password":
                        user = users[0];

                        user.password = Value.trim();
                        return user.save();
                        break;


                }



              //  else {

              //      reject({ status: 401, message: 'Invalid Old Password !' });
             //   }
            })


            .then(user => resolve({ status: 200, message: 'Date Updated Sucessfully !' }))

            .catch(err => reject({ status: 500, message: 'Internal Server Error !' }));

    });


