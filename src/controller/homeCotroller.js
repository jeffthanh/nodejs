const pool = require('../configs/connectDB')

const getHomepage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM admin');
    return res.render('index.ejs', { dataUser: rows })

}

module.exports = {
    getHomepage
};