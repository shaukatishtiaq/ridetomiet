const { validate_user } = require('../middlewares');

async function createPost(req, res, next) {
    let result;
    try {
        result = await validate_user.checkUserIsLoggedIn(req, res);
        if (result) {

            res.json({ message: "Post has been made.", status: true });
        }
        else {
            res.json({ message: "Kindly logIn", status: false })
        }

    } catch (err) {
        console.error(err.message, " Error in checkUserIsLoggedIn in post.controller.js");
        res.clearCookie('credentials');
        res.json({ message: "Kindly login", status: false });
    }

}

module.exports = {
    createPost,
}