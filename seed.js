const db = require('./config/keys').mongoURI;
const seeder = require('mongoose-seed');



const data = [
    {
        'model': 'Forum',
        'documents': [
            {
                // '_id': '1',
                'name': 'sampleForum'
            }
        ]
    }
]

seeder.connect(db, function(){
    seeder.loadModels(['./models/Forum'], function(err, done){
        if (err){
            return console.log('seed err', err);
        }
        if (done){
            return console.log('seed done', done);
        }
        // seeder.disconnect()
    });

    seeder.clearModels(['Forum'], function(err, done){
        if (err){
            return console.log('seed err', err);
        }
        if (done){
            return console.log('seed done', done);
        }
        // seeder.disconnect()
    });

    seeder.populateModels(data, function(err, done){
        if (err){
            return console.log('seed err', err);
        }
        if (done){
            return console.log('seed done', done);
        }
        seeder.disconnect()
    });
});
