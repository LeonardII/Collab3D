
r = require('rethinkdb')

r.connect ({ host: 'localhost' , port: 3000}, function(err, conn) {      if (err) throw err;      console.log(conn);

    r.db('points').tableCreate('countries').run(counn, function(err ,res){         if(err) throw err;      console.log(res);     })  })
