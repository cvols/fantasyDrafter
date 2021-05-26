const Team = require('../models/team');

exports.getNhlTeams = async () => {
  const teams = await Team.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      return data;
    }
  });

  return { teams };
};
