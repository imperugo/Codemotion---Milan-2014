(function(db) {
    var sql = require('mssql');

    var config = {
        user: '...',
        password: '...',
        server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
        database: '...',

        options: {
            encrypt: true // Use this if you're on Windows Azure
        }
    };

    db.getUsers = function() {

        var connection = new sql.Connection(config, function(err) {
            // ... error checks

            // Query

            var request = new sql.Request(connection); // or: var request = connection.request();
            request.query('select * from Users', function(err, recordset) {
                // ... error checks

                console.dir(recordset);
            });

            // // Stored Procedure

            // var request = new sql.Request(connection);
            // request.input('input_parameter', sql.Int, 10);
            // request.output('output_parameter', sql.VarChar(50));
            // request.execute('procedure_name', function(err, recordsets, returnValue) {
            //     // ... error checks

            //     console.dir(recordsets);
            // });

        });
    };

})(module.exports);
