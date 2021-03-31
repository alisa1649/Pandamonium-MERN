const seeder = require('mongoose-seed');

const db = 'mongodb://127.0.0.1/testdb';

seeder.connect(db, function(){
    seeder.loadModels(['./models/Forum'], function(err, done) {
        if (err){
            return console.log('seed err', err);
        }
        if (done){
            return console.log('seed done', done);
        }
        // seeder.disconnect()
    });

    seeder.clearModels(['Forum'], function(err, done) {
        if (err){
            return console.log('seed err', err);
        }
        if (done){
            return console.log('seed done', done);
        }
        // seeder.disconnect()
    })

    seeder.populateModels(data, function(err, done) {
        if (err){
            return console.log('seed err', err);
        }
        if (done){
            return console.log('seed done', done);
        }
        seeder.disconnect()
    })
});

const data = [
    {
        'model': 'Forum',
        'documents': [
            {
                'name': 'sampleForum'
            }
        ]
    }
]