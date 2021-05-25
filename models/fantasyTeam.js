const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FantasyTeamSchema = new Schema({
  id: Number,
  teamName: String,
  owner: String,
  roster: {
    C1: String,
    C2: String,
    LW1: String,
    LW2: String,
    RW1: String,
    RW2: String,
    D1: String,
    D2: String,
    D3: String,
    D4: String,
    G1: String,
    G2: String,
    BENCH1: String,
    BENCH2: String,
    BENCH3: String,
    BENCH4: String,
    BENCH5: String,
    BENCH6: String,
    BENCH7: String
  },
  keepers: {
    F1: String,
    F2: String,
    D1: String,
    G1: String,
    R1: String
  }
});

const FantasyTeam = mongoose.model('fantasyTeam', FantasyTeamSchema);

module.exports = FantasyTeam;
