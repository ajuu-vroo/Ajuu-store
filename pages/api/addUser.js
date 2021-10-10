import dbConnect from "../../helper/db";
import User from "../../models/User";


dbConnect();


export default async (req, res) => {
    if (req.method === 'POST') {
        const { name, password, email } = req.body;
        if (name.trim().length === 0 || email.trim().length === 0 || password.trim().length === 0) {
            // throw new Error("validation failed");
            return res.status(401).json({ message: "Empty Credentials" });
        }
        const userEmailId = await User.find({ email: email }, function (err, result) {
            if (!result.length) {
                let user = User.create({
                    name: name,
                    email: email,
                    password: password,
                });
                return res.status(201).json({ message: "ok" });

            } else {
                // var error = new Error('Alreaddy exists!');
                return res.status(401).json({ message: "Email already Exists!" });
            }


        });
        // let user = await User.create({
        //     name,
        //     email,
        //     password
        //     });




    }
};