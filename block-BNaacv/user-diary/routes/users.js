var express  = require('express');

 var router = express.router();

 router.get('/' ,(req, res) => {
res.render('users.ejsc')
 })


 router.get('/new', (req, res) =>{
    res.render('userform.ejs')
 })
 router.get('/', (req, res) =>{

 })
 router.get('/:id', (req, res) =>{

 })
 router.get('/:id/edit', (req, res) =>{
    
 })
 router.put('/:id', (req, res) =>{
    
 })
 router.delete('/:id', (req, res) =>{
    
 })
  module.exports = router;