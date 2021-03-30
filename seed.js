// const seeder = require('mongoose-seed');

// const db = 'mongodb://localhost:5000/seed';

// seeder.connect(db, function(){
//     seeder.loadModels(['./models/Forum']);

//     seeder.clearModels(['Forum'])
//     seeder.populateModels(data, function(err, done){
//         if (err){
//             return console.log('seed err', err);
//         }
//         if (done){
//             return console.log('seed done', done);
//         }
//         seeder.disconnect()
//     })
// });

// const data = [
//     {
//         'model': 'Forum',
//         'documents': [
//             {
//                 '_id': '1',
//                 'name': 'sampleForum'
//             }
//         ]
//     }
// ]