const User = require("./usermodel");

const googleLogin = async (req, res) => {

    try {

        const { email, uid } = req.body;

        let user =
            await User.findOne({ email });

        if (!user) {

            user =
                await User.create({
                    email,
                    googleId: uid,
                    authProvider: "google"
                });

        }

        res.status(200).json({
            success: true,
            user
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });

    }
};

module.exports = googleLogin;