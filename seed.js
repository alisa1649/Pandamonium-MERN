const db = require('./config/keys').mongoURI;
const seeder = require('mongoose-seed');

// const db = 'mongodb://127.0.0.1:27017/pandamonium';

// const id = ObjectId()

const data = [
    {
        'model': 'Forum',
        'documents': [
            {
                // '_id': id,
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