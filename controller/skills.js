const SkillModel = require('../models/skills')

module.exports = {
    index,
    show,
    newSkill,
    create

};

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
