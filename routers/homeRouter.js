const express = require('express');
const router = express.Router();
const homeController = require('../controller/homeController');
const homeModel = require('../model/homeModel').getAllData;
const homeModelDeleteItem = require('../model/homeModel').deleteTodoItem;

router.get('/', (req, res) => {
    homeModel().then((result) => {
        res.render('home', {data:result});
    }).catch((err) => {
        console.log(err);
    });
});

router.post('/', (req, res) => {
    homeController(req.body.todoTxt);
    res.redirect('/');
});

router.post('/removeTodo', (req,res) => {
    homeModelDeleteItem(req.body.id)
    .then((result) => {
        if (result.affectedRows > 0) {
            res.redirect('/')
        }
    }).catch((err) => {
        console.log(err);
    });
})

module.exports = router;