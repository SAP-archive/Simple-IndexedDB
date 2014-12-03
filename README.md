Simple-IndexedDB
================

![alt text](https://github.com/SAP/Simple-IndexedDB/blob/master/indexedDBImage.jpg)

#####This API wraps the IndexedDB API and makes working with it much simpler.


__How to use__:

  The main code of the Simple-IndexedDB is in app/storageUtil.
  
  
  Grab the StorageUtil.js and the StorageUtilException.js and you are ready to use the Simple-IndexedDB.
  
  
  *The API uses promise, please make sure to use the q open source library (https://github.com/kriskowal/q)
  
  
  [API](http://htmlpreview.github.io/?https://github.com/SAP/Simple-IndexedDB/blob/master/doc/index.html)

__What else is in the project__:

  doc: API documentation in HTML format.
  
  
  report: Code coverage reports.
  
  
  tests: Tests.

  Clone the repository, install the bower.json and the package.json and run the Gruntfile.js.
  
  
  Once running the Gruntfile the following tasks run:
  
  
    uglify - Creating minified file
    jshint - Static code check
    jsdoc - Creating API docs
    qunit - Running qunit tests and code coverage
    karma - Running headless browser tests
  
