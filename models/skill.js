const skills = [
    {id: 12345, skill: 'HTML CSS & JS', acquired: true},
    {id: 23456, skill: 'DOM Manipulation', acquired: true},
    {id: 34567, skill: 'Express Routers & Controllers', acquired: false}
];
  
module.exports = {
    getAll,
    getOne,
    create,
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.acquired = false;
    skills.push(skill);
}