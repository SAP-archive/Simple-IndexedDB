
module("Storage Util");

var dbName = "dbTest";
var tableName = "tableTest";
var key = "keyTest";
var key2 = "key2Test";
var key3 = "key3Test";
var insertRecord = [{key:key, value:{"testing":"test"}}, {key:key3, value:{"testing":"test3"}}];
var updateRecord = [{key:key, value:{"testing":"test1"}}, {key:key3, value:{"testing":"test4"}}];
var updateRecordNotExists = [{key:key2, value:{"testing":"test"}}, {key:key, value:{"testing":"test2"}}];
var deleteRecords = [key, key3];
var _storageUtil;
var dbCreated = false;
var tableCreated = false;
var counter = 0;

QUnit.begin(function( data ) {
    data.totalTests; // Number;
});

QUnit.moduleStart(function(details) {
    if(details.name === "Storage Util")
    {
        stop();
        _storageUtil = new StorageUtil();
        _storageUtil.deleteDB(dbName).then(function(){
            _storageUtil.createDB(dbName).then(function(result){
                dbCreated = true;
                _storageUtil.createTable(dbName, tableName).then(function(result){
                    tableCreated = true;
                    start();
                    counter++;
                },function(){assert.ok( false, "Create table fails" ); start();})
            },function(){assert.ok( false, "Create DB fails" ); start();})
        },function(){assert.ok( false, "Delete DB fails" ); start();})
    }
});

QUnit.testStart(function(details){
    if(details.module === "Storage Util" && counter > 0)
    {
        stop();
        _storageUtil.deleteAllRecords(dbName, tableName).then(function(){start();},function(){ start();});
    }
})

asyncTest("Create DB", function() {
    expect(1);
    _storageUtil.isDBExists(dbName).then(function(result){
        equal(result, true, "DB should have been created");
        start();
    },function(){assert.ok( false, "Test Failed" ); start();})

});

asyncTest("Is DB not real exists", function() {
    expect(1);
    _storageUtil.isDBExists("blaaDB").then(function(result){
        equal(result, false, "DB should have been created");
        start();
    },function(){assert.ok( false, "Test Failed" ); start();})

});

asyncTest("Create Table", function() {
    expect(1);
    _storageUtil.isTableExists(dbName, tableName).then(function(result){
        equal(result, true, "Table should have been created");
        start();
    },function(){assert.ok( false, "Test Failed" ); start();})

});

asyncTest("Is table not real exists", function() {
    expect(1);
    _storageUtil.isTableExists(dbName, "blaaTable").then(function(result){
        equal(result, false, "Table should not have been created");
        start();
    },function(){assert.ok( false, "Test Failed" ); start();})

});

asyncTest("Insert Record", function() {
    expect(1);
    _storageUtil.insertRecords(dbName, tableName, insertRecord).then(function(result){
        equal(true, true, "Record Inserted to table");
        start();
    },function(){assert.ok( false, "Test Failed" ); start();})
});

asyncTest("Insert Records", function() {

    _storageUtil.insertRecords(dbName, tableName, insertRecord).then(function(){
        _storageUtil.readAllRecords(dbName, tableName).then(function(result){
            var result;
            var counter = 0;
            for(var obj in result)
            {
                obj = ""; // I am setting obj to empty string because if I wont use obj in someway jshint will fail the build
                counter++;
            }
            equal(counter, 2, "Insert records");
            start();
        })
    },function(){assert.ok( false, "Test Failed" ); start();})
});

asyncTest("Delete all Records", function() {

    _storageUtil.deleteAllRecords(dbName, tableName).then(function(){
        _storageUtil.readAllRecords(dbName, tableName).then(function(result){
            var result;
            var counter = 0;
            for(var obj in result)
            {
                obj = ""; // I am setting obj to empty string because if I wont use obj in someway jshint will fail the build
                counter++;
            }
            equal(counter, 0, "Delete all records");
            start();
        })
    },function(){assert.ok( false, "Test Failed" ); start();})
});

asyncTest("Update Record", function() {
    expect(1);
    _storageUtil.insertRecords(dbName, tableName, insertRecord).then(function(){
        _storageUtil.updateRecords(dbName, tableName, updateRecord).then(function(result){
            equal(true, true, "Record updated in table");
            start();
        },function(){assert.ok( false, "Test Failed" ); start();})
    },function(){assert.ok( false, "Test Failed" ); start();})
});


asyncTest("Update Records", function() {

    _storageUtil.insertRecords(dbName, tableName, insertRecord).then(function(){
        _storageUtil.updateRecords(dbName, tableName, updateRecord).then(function(){
            _storageUtil.readAllRecords(dbName, tableName).then(function(result){
                for(var obj in result)
                {
                    if(result[obj].key === key)
                    {
                        equal(result[obj].value.testing, "test1", "Insert records");
                    }

                    if(result[obj].key === key3)
                    {
                        equal(result[obj].value.testing, "test4", "Insert records");
                    }
                }

                start();
            })
        },function(){assert.ok( false, "Test Failed" ); start();})
    },function(){assert.ok( false, "Test Failed" ); start();})
});

asyncTest("Update Records Not Exists", function() {

    _storageUtil.insertRecords(dbName, tableName, insertRecord).then(function(){
        _storageUtil.updateRecords(dbName, tableName, updateRecordNotExists).then(function(result){
            equal(result.length, 1, "Update Records Not Exists");
            equal(result[0], key2, "Update Records Not Exists");
            start();
        },function(result){
            assert.ok( false, "Test Failed" ); start();
        },function(){assert.ok( false, "Test Failed" ); start();})
    },function(){assert.ok( false, "Test Failed" ); start();})
});

asyncTest("Delete Records", function() {

    _storageUtil.insertRecords(dbName, tableName, insertRecord).then(function(){
        _storageUtil.deleteRecords(dbName, tableName, deleteRecords).then(function(result){
            equal(true, true, "Delete Records");
            _storageUtil.readAllRecords(dbName, tableName).then(function(result){
                var counter = 0;
                for(var obj in result)
                {
                    obj = ""; // I am setting obj to empty string because if I wont use obj in someway jshint will fail the build
                    counter++;
                }
                equal(counter, 0, "Delete Records");
                start();
            },function(){assert.ok( false, "Test Failed" ); start();})
        },function(){assert.ok( false, "Test Failed" ); start();})
    },function(){assert.ok( false, "Test Failed" ); start();})
});

asyncTest("Is Table Exists", function() {
    expect(1);
    _storageUtil.isTableExists(dbName, tableName).then(function(result){
        equal(result, true, "Is Table Exists");
        start();
    },function(){assert.ok( false, "Test Failed" ); start();})
});

asyncTest("Is Table Not Exists", function() {
    expect(1);
    _storageUtil.isTableExists(dbName, "TableNotExists").then(function(result){
        equal(result, false, "Is Table Not Exists");
        start();
    },function(){assert.ok( false, "Test Failed" ); start();})
});

 asyncTest("Read Record", function() {
 expect(1);
 _storageUtil.insertRecords(dbName, tableName, insertRecord).then(function(){
     _storageUtil.readRecord(dbName, tableName, key).then(function(result){
     equal(result.testing, "test", "Read Record");
     start();
     })
 },function(){assert.ok( false, "Test Failed" ); start();})
 });

asyncTest("Is DB Exists", function() {
    expect(1);
    _storageUtil.isDBExists(dbName).then(function(result){
        equal(result, true, "Is DB Exists");
        start();
    },function(){assert.ok( false, "Test Failed" ); start();})
});
