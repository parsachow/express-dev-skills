const skills = [
    {id: 100, skills: "javascript", complete: true},
    {id: 200, skills: "VS Code", complete: false},
    {id: 300, skills: "software testing", complete: true},
    {id: 400, skills: "express framework", complete: false}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
    
};

function deleteOne(skill){
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.complete = true;
    skills.push(skill)
    return skill
}

function getAll(){
    return skills;
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}