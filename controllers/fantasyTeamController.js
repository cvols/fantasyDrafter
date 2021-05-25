const FantasyTeam = require('../models/fantasyTeam');

exports.createFantasyTeam = async (req, res) => {
  const fantasyTeam = await FantasyTeam.create(req.body, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      return data;
    }
  });

  return { fantasyTeam };
};

exports.getFantasyTeam = async (req, res, next) => {
  const fantasyTeam = await FantasyTeam.findOne({ _id: req.params.id })
    .then(resp => {
      return resp;
    })
    .catch(next);

  return { fantasyTeam };
};

exports.addPlayerToRoster = async (req, res, next) => {
  const { fantasyTeamId, position, playerName } = req.body;

  const params = {
    params: {
      id: fantasyTeamId
    }
  };

  const roster = await this.getFantasyTeam(params);
  const addPlayer = await FantasyTeam.findByIdAndUpdate(
    fantasyTeamId,
    {
      roster: {
        ...roster.fantasyTeam.roster,
        [position]: playerName
      }
    },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        return data;
      }
    }
  );

  return { addPlayer };
};
