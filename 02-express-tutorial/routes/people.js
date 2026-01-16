const express = require("express");
const router = express.Router();

const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

// the path "/" represents the base route in the main file (app.js) so "/" = /api/people

// router.get("/", getPeople);
// router.post("/", createPerson);
// router.post("/postman", createPersonPostman);
// router.put("/:id", updatePerson);
// router.delete("/:id", deletePerson);

// shortcut for the above code
router.route("/").get(getPeople).post(createPerson); // if path's the same, then we can just chain
router.route("/postman").post(createPersonPostman);
router.route("/:id").put(updatePerson).delete(deletePerson);

// to make code cleaner, we created a controller folder containing
// all the (req, res) functionality

module.exports = router;
