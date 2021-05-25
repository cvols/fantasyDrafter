const express = require('express');
const router = express.Router();
const Team = require('../models/team');

const FantasyTeamController = require('../controllers/fantasyTeamController');
const PlayerController = require('../controllers/playerController');

// get fantasy team
router.get('/fantasyTeams/:id', async (req, res) => {
  const fantasyTeam = await FantasyTeamController.getFantasyTeam(req, res);

  res.status(200).send(fantasyTeam);
});

// create fantasy team
router.post('/fantasyTeams', async (req, res) => {
  const fantasyTeam = await FantasyTeamController.createFantasyTeam(req, res);

  res.status(200).send(fantasyTeam);
});

// draft player
router.post('/draftPlayer', async (req, res) => {
  const updateFantasyTeam = await PlayerController.addFantasyTeamToPlayer(req, res);
  const updateRoster = await FantasyTeamController.addPlayerToRoster(req, res);

  res.status(200).send({ updateFantasyTeam, updateRoster });
});

// delete fantasy team
router.delete('/teams/:id', (req, res, next) => {
  Team.findOneAndDelete({ _id: req.params.id })
    .then(data => res.json(data))
    .catch(next);
});

module.exports = router;
