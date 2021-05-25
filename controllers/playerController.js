const Player = require('../models/player');

exports.addFantasyTeamToPlayer = async (req, res, next) => {
  const { playerId, fantasyTeamId } = req.body;

  const player = await Player.findByIdAndUpdate(playerId, { fantasyTeam: fantasyTeamId }, (err, resp) => {
    if (err) {
      console.log(err);
    } else {
      return resp;
    }
  });

  return { player };
};
