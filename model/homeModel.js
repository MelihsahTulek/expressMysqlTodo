const db = require('./db');

module.exports = {
    homeModel: (data) => {
        db.query(`INSERT INTO todoTable (todo) VALUES ('${data}')`, (err,result) => {
            if (err) {
                console.log(err);
            }
        })
    },
    getAllData: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM todoTable', (err,result) => {
                resolve(result)
            })
        });
    },
    deleteTodoItem: (getID) => {
        return new Promise((resolve, reject) => {
            db.query(`DELETE FROM todoTable WHERE id = ${getID}`, (err,result) => {
                resolve(result)
            });
        });
    }
}