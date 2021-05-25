const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema for team
const TeamSchema = new Schema({
  action: {
    type: String,
    required: [false, 'The team field is required']
  },
  id: {
    type: Number
  },
  name: {
    type: String
  },
  link: {
    type: String
  },
  venue: {
    id: {
      type: Number
    },
    name: {
      type: String
    },
    link: {
      type: String
    },
    city: {
      type: String
    },
    timeZone: {
      id: {
        type: String
      },
      offset: {
        type: Number
      },
      tz: {
        type: String
      }
    }
  },
  abbreviation: {
    type: String
  },
  teamName: {
    type: String
  },
  locationName: {
    type: String
  },

  firstYearOfPlay: {
    type: String
  },
  division: {
    id: {
      type: Number
    },
    name: {
      type: String
    },
    link: {
      type: String
    }
  },
  conference: {
    id: {
      type: Number
    },
    name: {
      type: String
    },
    link: {
      type: String
    }
  },
  franchise: {
    franchiseId: {
      type: Number
    },
    teamName: {
      type: String
    },
    link: {
      type: String
    }
  },
  shortName: {
    type: String
  },
  officialSiteUrl: {
    type: String
  },
  franchiseId: {
    type: Number
  },
  active: {
    type: Boolean
  }
});

// create model for team
const Team = mongoose.model('team', TeamSchema);

module.exports = Team;
