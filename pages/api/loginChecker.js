import dbConnect from "../../helper/db";
import User from "../../models/User";

dbConnect();

export default async (req, res) => {
    if (req.method === 'POST') {
        const { password, email } = req.body;
        if ( email.trim().length === 0 || password.trim().length === 0) {
            // throw new Error("validation failed");
            return res.status(401).json({ message: "Empty Credentials" });
        }
        const userEmailId = await User.find({ email: email }, function (err, result) {
            if (result.length) {
                if(password === result[0].password){
                return res.status(201).json({ emailID: result[0].email, password : result[0].password, name: result[0].name});
            }else{
                return res.status(401).json({message : "Incorrect Password"})
            }

            } else {
                // var error = new Error('Alreaddy exists!');
                return res.status(401).json({ message: "Email ID is not recognized" });
            }}
            )
    };
}