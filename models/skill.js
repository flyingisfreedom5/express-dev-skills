const skills = [
    {id: 1, skill: 'HTML', done: true},
    {id: 2, skill: 'CSS', done: false},
    {id: 3, skill: 'JavaScript', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };
  
 function update(id, skill) {
   id = parseInt(id)
   const updatedSkill = skill.find((skill) => skill.id === id);
   Object.assign(updatedSkill, skill);
 }

 function deleteOne(id) {
   id = parseInt(id);
   const idx = skills.findIndex((skill) => skill.id === id);
   skills.splice(idx, 1);
 }

  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find((skill) => skill.id === id);
  }
  
  function getAll() {
    return skills;
  }