const express = require("express");
const router = express.Router();

const MenuItem = require("../models/MenuItem");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenuItem = new MenuItem(data);
    const response = await newMenuItem.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "yo Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "yo Internal Server Error" });
  }
});

router.get("/:tasteType", async (req, res) => {
    try {
      const tasteType = req.params.tasteType;
      if (tasteType == "sour" || tasteType == "sweet" || tasteType == "spicy") {
        const data = await MenuItem.find({ taste: tasteType });
        console.log("data fetched");
        res.status(200).json(data);
      } else {
        res.status(200).json({ error: "Invalid taste type" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "yo Internal Server Error" });
    }
  });

module.exports = router;