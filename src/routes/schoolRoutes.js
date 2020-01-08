const express = require("express");
const School = require("../models/School");

const router = express.Router();

// GET ALL SCHOOLS
router.get("/", async (req, res) => {
  try {
    const schools = await School.find();
    res.send(schools);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// GET ONE SPECIFIC SCHOOL
router.get("/:school_id", async (req, res) => {
  try {
    const school = await School.findById(req.params.school_id);
    if (!school) {
      return res.status(404).send({ error: "Sorry school not found." });
    }

    res.send(school);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// POST A SCHOOL
router.post("/", async (req, res) => {
  try {
    const schoolDup = await School.findOne({ email: req.body.email });
    if (schoolDup) {
      return res.status(400).send({ error: "This email is already taken." });
    }

    const school = new School(req.body);
    await school.save();

    res.status(201).send(school);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

// UPDATE A SCHOOL
router.patch("/:school_id", async (req, res) => {
  const schoolDup = await School.findOne({ email: req.body.email });
  if (schoolDup) {
    return res
      .status(400)
      .send({ error: "Email already registered. Try a new one" });
  }

  try {
    const school = await School.findById(req.params.school_id);
    if (!school) {
      return res.status(404).send({ error: "Sorry school not found." });
    }

    const updates = Object.keys(req.body);
    updates.forEach(key => (school[key] = req.body[key]));

    await school.save();
    res.send(school);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

// DELETE A SCHOOL
router.delete("/:school_id", async (req, res) => {
  try {
    const school = await School.findById(req.params.school_id);
    if (!school) {
      return res.status(404).send({ error: "Sorry school not found." });
    }

    await school.remove();
    res.send("School deleted successfully!");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
