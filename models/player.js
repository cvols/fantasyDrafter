const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FantasyTeam'
  },
  fullName: String,
  link: String,
  firstName: String,
  lastName: String,
  primaryNumber: String,
  birthDate: String,
  currentAge: Number,
  birthCity: String,
  birthStateProvince: String,
  birthCountry: String,
  nationality: String,
  height: String,
  weight: Number,
  active: Boolean,
  alternateCaptain: Boolean,
  captain: Boolean,
  rookie: Boolean,
  shootsCatches: String,
  rosterStatus: String,
  fantasyTeam: Schema.Types.ObjectId || String,
  currentTeam: {
    id: Number,
    name: String,
    link: String
  },
  primaryPosition: {
    type: Object
  },
  stats: {
    season: String,
    stat: {
      timeOnIce: String,
      assists: Number,
      goals: Number,
      pim: Number,
      shots: Number,
      games: Number,
      hits: Number,
      powerPlayGoals: Number,
      powerPlayPoints: Number,
      powerPlayTimeOnIce: String,
      evenTimeOnIce: String,
      penaltyMinutes: String,
      faceOffPct: Number,
      shotPct: Number,
      gameWinningGoals: Number,
      overTimeGoals: Number,
      shortHandedGoals: Number,
      shortHandedPoints: Number,
      shortHandedTimeOnIce: String,
      blocked: Number,
      plusMinus: Number,
      points: Number,
      shifts: Number,
      timeOnIcePerGame: String,
      evenTimeOnIcePerGame: String,
      shortHandedTimeOnIcePerGame: String,
      powerPlayTimeOnIcePerGame: String
    }
  }
});

const Player = mongoose.model('player', PlayerSchema);

module.exports = Player;
