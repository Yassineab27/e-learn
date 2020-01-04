const express = require("express");

const router = express.Router();

// GET ALL SCHOOLS
router.get("/", async (req, res) => {
  try {
    res.send("Get All Schools");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// GET ONE SPECIFIC SCHOOL
router.get("/:school_id", async (req, res) => {
  try {
    res.send("Get one Schools");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// POST A SCHOOL
router.post("/", async (req, res) => {
  try {
    res.send("Post a Schools");
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

// UPDATE A SCHOOL
router.patch("/:school_id", async (req, res) => {
  try {
    res.send("Update a School");
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

// DELETE A SCHOOL
router.delete("/:school_id", async (req, res) => {
  try {
    res.send("Delete a school");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
