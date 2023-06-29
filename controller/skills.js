const SkillModel = require('../models/skills')

module.exports = {
    index,
    show,
    newSkill,
    create,
    deleteOne

};

function deleteOne(req, res){
    SkillModel.deleteOne(req.params.id)
    res.redirect('/skills')
}

function create(req, res){
    
    SkillModel.create(req.body)
    res.redirect('/skills')
}

function newSkill(req, res){
    res.render('skills/new')
}

function index(req, res){
    res.render('skills/index', {skills: SkillModel.getAll() })
}

function show(req, res){
    res.render('skills/show', {skill: SkillModel.getOne(req.params.id) })
}
