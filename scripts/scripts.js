// Object.entries(data).map(entry => {
//   if (entry[0] === 'teams') {
//     entry[1].map(team => {
//       const { id } = team;
//       https
//         .get(`https://statsapi.web.nhl.com/api/v1/teams/${id}/roster`, resp => {
//           let data = '';

//           resp.on('data', chunk => {
//             data += chunk;
//           });

//           resp.on('end', () => {
//             // get player id
//             Object.entries(JSON.parse(data)).map(entry => {
//               if (entry[0] === 'roster') {
//                 entry[1].map(roster => {
//                   const { id, fullName } = roster.person;
//                   if (id) {
//                     // get player info
//                     https
//                       .get(
//                         `https://statsapi.web.nhl.com/api/v1/people/${id}/stats?stats=statsSingleSeason&season=20162017`,
//                         resp => {
//                           let data = '';

//                           resp.on('data', chunk => {
//                             data += chunk;
//                           });

//                           resp.on('end', () => {
//                             // console.log('data: ', JSON.parse(data[0]));
//                             if (JSON.parse(data)) {
//                               Object.values(JSON.parse(data)).map(value => {
//                                 console.log('value: ', value[0].splits);
//                                 if (typeof value[0] === 'object') {
//                                   console.log('hello world');
//                                   // Player.create(value).catch(err => console.log(err));
//                                   Player.findOneAndUpdate({ id }, { $push: { stats: value[0].splits } })
//                                     .then(docs => {
//                                       if (docs) {
//                                         // resolve({ success: true, data: docs });
//                                       } else {
//                                         // reject({ success: false, data: 'no such user exist' });
//                                       }
//                                     })
//                                     .catch(err => {
//                                       console.log('error: ', err);
//                                     });

// Player.findOneAndUpdate({ id }, { $set: { fantasyTeam: '' } })
//   .then(console.log)
//   .catch(console.log);
//                                 }
//                               });
//                             }
//                           });
//                         }
//                       )
//                       .on('error', err => {
//                         console.log('------ Error: ', err.message);
//                       });
//                   }
//                 });
//               }
//             });
//           });
//         })
//         .on('error', err => {
//           console.log('Error: ', err.message);
//         });
//     });
//   }
// });
