let { people } = require("../data");

const getPeople = (req, res) => {
  // the path will match whatever's the base route in the app.js
  res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
  // the path will match whatever's the base route in the app.js
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).json({ sucess: true, person: name });
};

const createPersonPostman = (req, res) => {
  const { name } = req.body;
  console.log(req.body);
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).json({ sucess: true, data: [...people, name] });
};

const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id)); // looks for matching id

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` }); // if id does not match
  }
  const newPeople = people.map((person) => {
    // replaces the name of the corresponding id
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
};

const deletePerson = (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id)); // looks for matching id

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` }); // if id does not match
  }
  const newPeople = people.filter(
    (
      person // .filter means to keep the elements
    ) => person.id !== Number(req.params.id)
  ); // if it's not equal to the req.params.id given then keep it
  return res.status(200).json({ success: true, data: newPeople });
};

module.exports = {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
};
