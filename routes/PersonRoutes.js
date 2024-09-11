const express = require("express");
const router = express.Router();
const Person = require("../models/person");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "yo Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "yo Internal Server Error" });
  }
});

// parametrised get
router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const data = await Person.find({ work: workType });
      console.log("data fetched");
      res.status(200).json(data);
    } else {
      res.status(200).json({ error: "Invalid work type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "yo Internal Server Error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedData = req.body;

    const response = await Person.findByIdAndUpdate(personId, updatedData, {
      new: true, // return the updated document
      runValidators: true, // runs the validators
    });

    console.log("data updated");
    res.status(200).json(response);

    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "yo Internal Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const response = await Person.findByIdAndDelete(personId);

    console.log("data deleted");
    res.status(200).json({ message: "data delete successfully" });

    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "yo Internal Server Error" });
  }
});

module.exports = router;
