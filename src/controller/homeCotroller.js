const pool = require('../configs/connectDB')

const getHomepage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM admin');
    return res.render('index.ejs', { dataUser: rows })

}

let getDetailPage = async (req, res) => {
    let userId = req.params.id;
    let [user] = await pool.execute(`select * from admin where id = ?`, [userId]);
    return res.send(JSON.stringify(user))
}


let createNewUser = async (req, res) => {
    console.log(req.body)
    let { username, password, email } = req.body
    await pool.execute('insert into admin(username,password,email) values (?,?,?)', [username, password, email])

    return res.redirect('/')
}

let deleteUser = async (req, res) => {
    let userId = req.body.userId;
    await pool.execute('delete from admin where id = ?', [userId]);
    return res.redirect('/')
}

let editUser = async (req, res) => {
    let id = req.params.id;
    let [user] = await pool.execute('Select * from admin where id = ?', [id]);
    return res.render('update.ejs', { dataUser: user[0] });
}


let postUpdateUser = async (req, res) => {
    let { username, password, email, id } = req.body;
    console.log(username, password)
    await pool.execute('update admin set username= ?, password = ? , email = ?  where id = ?',
        [username, password, email, id])

    return res.redirect('/');
}


module.exports = {
    getHomepage, getDetailPage, createNewUser, deleteUser, editUser, postUpdateUser
};