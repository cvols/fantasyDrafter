const express = require('express');
const router = express.Router();

const FantasyTeamController = require('../controllers/fantasyTeamController');
const PlayerController = require('../controllers/playerController');

// get fantasy team
router.get('/fantasyTeams/:id', async (req, res) => {
  const fantasyTeam = await FantasyTeamController.getFantasyTeam(req, res);

  res.status(200).send(fantasyTeam);
});

// get all fantasy teams
router.get('/fantasyTeams', async (req, res) => {
  const fantasyTeams = await FantasyTeamController.getFantasyTeams(req, res);

  res.status(200).send(fantasyTeams);
});

// create fantasy team
router.post('/fantasyTeams', async (req, res) => {
  const fantasyTeam = await FantasyTeamController.createFantasyTeam(req, res);

  res.status(200).send(fantasyTeam);
});

module.exports = router;
