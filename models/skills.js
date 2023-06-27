const skills = [
    {id: 100, skills: "javascript", complete: true},
    {id: 200, skills: "VS Code", complete: false},
    {id: 300, skills: "software testing", complete: true},
    {id: 400, skills: "express framework", complete: false}
];

module.exports = {
    getAll,
    getOne
    
};

function getAll(){
    return skills;
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}