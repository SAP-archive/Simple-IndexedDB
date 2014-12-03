Simple-IndexedDB
================

#####This API wraps the IndexedDB API and makes working with it much simpler.

__How to use__:

  The main code of the Simple-IndexedDB is in app/storageUtil.
  
  
  Just grab the StorageUtil.js and the StorageUtilException.js and you are ready to use the Simple-IndexedDB.

__What else is in the project__:

  doc: API documentation in HTML format.
  
  
  report: Code coverage reports.
  
  
  tests: Tests.

  Clone the repository, install the bower.json and the package.json and run the Gruntfile.js.
  
  
  Once running the Gruntfile the following tasks run:
  
  
    uglify - for creating a min file
    jshint - for static code check
    jsdoc - Creating the API docs
    qunit - Running qunit tests and code coverage
    karma - Running headless browser tests
    
    
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>JSDoc: Class: StorageUtil</title>
    <script src="scripts/prettify/prettify.js"> </script>
    <script src="scripts/prettify/lang-css.js"> </script>
    <!--[if lt IE 9]>
      <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <link type="text/css" rel="stylesheet" href="styles/prettify-tomorrow.css">
    <link type="text/css" rel="stylesheet" href="styles/jsdoc-default.css">
</head>
<body>
<div id="main">
    <h1 class="page-title">Class: StorageUtil</h1>
<section>
<header>
    <h2>
    StorageUtil
    </h2>
</header>

<article>
    <div class="container-overview">

<dt>
    <h4 class="name" id="StorageUtil"><span class="type-signature"></span>new StorageUtil<span class="signature">()</span><span class="type-signature"></span></h4>   
</dt>
<dd>   
    <div class="description">
        StorageUtil is a util wrapper for IndexedDB API.
    </div>
    
<dl class="details">

    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="StorageUtil.js.html">StorageUtil.js</a>, <a href="StorageUtil.js.html#line6">line 6</a>
    </li></ul></dd>
</dl>
    <h5>Throws:</h5>
<dl>
    <dt>
        <div class="param-desc">
        If browser does not support IndexedDB.
        </div>
    </dt>
    <dt>
        <dl>
            <dt>
                Type
            </dt>
            <dd>
                
<span class="param-type"><a href="global.html#StorageUtilException">StorageUtilException</a></span>


            </dd>
        </dl>
    </dt>
</dl>

</dd>
    </div>

        <h3 class="subsection-title">Methods</h3>
        <dl>
            
<dt>
    <h4 class="name" id="createDB"><span class="type-signature"></span>createDB<span class="signature">(dbName)</span><span class="type-signature"> &rarr; {Promise}</span></h4>
</dt>
<dd>
    <div class="description">
        Creates a new DB inside IndexedDB.
    </div
        <h5>Parameters:</h5>
       
<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>dbName</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>
         
            </td>
            <td class="description last">The name of the DB.</td>
        </tr>

    
    </tbody>
</table>
    

    
<dl class="details">

    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="StorageUtil.js.html">StorageUtil.js</a>, <a href="StorageUtil.js.html#line60">line 60</a>
    </li></ul></dd>

</dl>

    <h5>Returns:</h5>
  
<div class="param-desc">
    Return StorageUtilException if rejected.
</div>

<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type">Promise</span>


    </dd>
</dl>

</dd>
<dt>
    <h4 class="name" id="createTable"><span class="type-signature"></span>createTable<span class="signature">(dbName, tableName)</span><span class="type-signature"> &rarr; {Promise}</span></h4>

</dt>
<dd>
    <div class="description">
        Creates a table inside a DB.
    </div>
    
        <h5>Parameters:</h5>
      
<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        <th>Type</th>

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody
        <tr>
                <td class="name"><code>dbName</code></td>
            <td class="type">
          
<span class="param-type">string</span>
            </td>

            <td class="description last">The name of the DB.</td>
        </tr>

        <tr>
            
                <td class="name"><code>tableName</code></td>

            <td class="type">
<span class="param-type">string</span>
          
            </td>
<td class="description last">The name of the table.</td>
        </tr>

    
    </tbody>
</table>
    

    
<dl class="details">
    

    

    

    

    

    

    

    

    

    
    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="StorageUtil.js.html">StorageUtil.js</a>, <a href="StorageUtil.js.html#line148">line 148</a>
    </li></ul></dd>

</dl>

    <h5>Returns:</h5>
    
            
<div class="param-desc">
    A promise that is resolved once the table has been created, and rejected with StorageUtilException if the creation failed or the table already exists in the DB.
</div>



<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type">Promise</span>


    </dd>
</dl>

        

    
</dd>

        
            
<dt>
    <h4 class="name" id="deleteAllRecords"><span class="type-signature"></span>deleteAllRecords<span class="signature">(dbName, tableName)</span><span class="type-signature"> &rarr; {Promise}</span></h4>

    
</dt>
<dd>

    
    <div class="description">
        Delete all records from table.
    </div>
    

    

    

    
        <h5>Parameters:</h5>
        

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>dbName</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            

            <td class="description last">The name of the DB.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>tableName</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            

            <td class="description last">The name of the table.</td>
        </tr>

    
    </tbody>
</table>
    

    
<dl class="details">
    

    

    

    

    

    

    

    

    

    
    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="StorageUtil.js.html">StorageUtil.js</a>, <a href="StorageUtil.js.html#line368">line 368</a>
    </li></ul></dd>
    

    

    

    
</dl>


    

    

    

    

    

    
    <h5>Returns:</h5>
    
            
<div class="param-desc">
    A promise that is resolved once all records have been deleted. The promise would be rejected with StorageUtilException if the deletion has failed.
</div>



<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type">Promise</span>


    </dd>
</dl>

        

    
</dd>

        
            
<dt>
    <h4 class="name" id="deleteDB"><span class="type-signature"></span>deleteDB<span class="signature">(dbName)</span><span class="type-signature"> &rarr; {Promise}</span></h4>

    
</dt>
<dd>

    
    <div class="description">
        Delete DB.
    </div>
    

    

    

    
        <h5>Parameters:</h5>
        

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>dbName</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            

            <td class="description last">The name of the DB.</td>
        </tr>

    
    </tbody>
</table>
    

    
<dl class="details">
    

    

    

    

    

    

    

    

    

    
    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="StorageUtil.js.html">StorageUtil.js</a>, <a href="StorageUtil.js.html#line551">line 551</a>
    </li></ul></dd>
    

    

    

    
</dl>


    

    

    

    

    

    
    <h5>Returns:</h5>
    
            
<div class="param-desc">
    A promise that is resolved DB has been deleted, and rejected with StorageUtilException once it fails.
</div>



<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type">Promise</span>


    </dd>
</dl>

        

    
</dd>

        
            
<dt>
    <h4 class="name" id="deleteRecords"><span class="type-signature"></span>deleteRecords<span class="signature">(dbName, tableName, dataArray)</span><span class="type-signature"> &rarr; {Promise}</span></h4>

    
</dt>
<dd>

    
    <div class="description">
        Update records in table.
    </div>
    

    

    

    
        <h5>Parameters:</h5>
        

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>dbName</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            

            <td class="description last">The name of the DB.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>tableName</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            

            <td class="description last">The name of the table.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>dataArray</code></td>
            

            <td class="type">
            
                
<span class="param-type">Array</span>


            
            </td>

            

            

            <td class="description last">Array of objects. Each object has two properties, key and value.</td>
        </tr>

    
    </tbody>
</table>
    

    
<dl class="details">
    

    

    

    

    

    

    

    

    

    
    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="StorageUtil.js.html">StorageUtil.js</a>, <a href="StorageUtil.js.html#line412">line 412</a>
    </li></ul></dd>
    

    

    

    
</dl>


    

    

    

    

    

    
    <h5>Returns:</h5>
    
            
<div class="param-desc">
    A promise that is resolved once the records have been deleted. The promise would be rejected with StorageUtilException if the deletion has failed.
</div>



<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type">Promise</span>


    </dd>
</dl>

        

    
</dd>

        
            
<dt>
    <h4 class="name" id="insertRecords"><span class="type-signature"></span>insertRecords<span class="signature">(dbName, tableName, dataArray)</span><span class="type-signature"> &rarr; {Promise}</span></h4>

    
</dt>
<dd>

    
    <div class="description">
        Insert records into table.
    </div>
    

    

    

    
        <h5>Parameters:</h5>
        

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>dbName</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            

            <td class="description last">The name of the DB.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>tableName</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            

            <td class="description last">The name of the table.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>dataArray</code></td>
            

            <td class="type">
            
                
<span class="param-type">Array</span>


            
            </td>

            

            

            <td class="description last">Array of objects. Each object has two properties, key and value.</td>
        </tr>

    
    </tbody>
</table>
    

    
<dl class="details">
    

    

    

    

    

    

    

    

    

    
    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="StorageUtil.js.html">StorageUtil.js</a>, <a href="StorageUtil.js.html#line200">line 200</a>
    </li></ul></dd>
    

    

    

    
</dl>


    

    

    

    

    

    
    <h5>Returns:</h5>
    
            
<div class="param-desc">
    A promise that is resolved once records have been inserted to table, and rejected with StorageUtilException if the insertion has failed.
</div>



<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type">Promise</span>


    </dd>
</dl>

        

    
</dd>

        
            
<dt>
    <h4 class="name" id="isDBExists"><span class="type-signature"></span>isDBExists<span class="signature">(dbName)</span><span class="type-signature"> &rarr; {Promise}</span></h4>

    
</dt>
<dd>

    
    <div class="description">
        Checks if a DB already exists in the IndexedDB.
    </div>
    

    

    

    
        <h5>Parameters:</h5>
        

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>dbName</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            

            <td class="description last">The name of the DB.</td>
        </tr>

    
    </tbody>
</table>
    

    
<dl class="details">
    

    

    

    

    

    

    

    

    

    
    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="StorageUtil.js.html">StorageUtil.js</a>, <a href="StorageUtil.js.html#line102">line 102</a>
    </li></ul></dd>
    

    

    

    
</dl>


    

    

    

    

    

    
    <h5>Returns:</h5>
    
            
<div class="param-desc">
    A promise that returns true or false if resolved and returns StorageUtilException if rejected.
</div>



<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type">Promise</span>


    </dd>
</dl>

        

    
</dd>

        
            
<dt>
    <h4 class="name" id="isTableExists"><span class="type-signature"></span>isTableExists<span class="signature">(dbName, tableName)</span><span class="type-signature"> &rarr; {Promise}</span></h4>

    
</dt>
<dd>

    
    <div class="description">
        Checks if table exists in the DB.
    </div>
    

    

    

    
        <h5>Parameters:</h5>
        

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>dbName</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            

            <td class="description last">The name of the DB.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>tableName</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            

            <td class="description last">The name of the table.</td>
        </tr>

    
    </tbody>
</table>
    

    
<dl class="details">

    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="StorageUtil.js.html">StorageUtil.js</a>, <a href="StorageUtil.js.html#line249">line 249</a>
    </li></ul></dd>

</dl>

    <h5>Returns:</h5>
  
<div class="param-desc">
    A promise that is resolved with true or false is exists or not, and rejected with StorageUtilException once it fails.
</div>



<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type">Promise</span>


    </dd>
</dl>

        

    
</dd>

        
            
<dt>
    <h4 class="name" id="readAllRecords"><span class="type-signature"></span>readAllRecords<span class="signature">(dbName, tableName)</span><span class="type-signature"> &rarr; {Promise}</span></h4>

    
</dt>
<dd>

    
    <div class="description">
        Read all records from table.
    </div>
    

    

    

    
        <h5>Parameters:</h5>
        

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>dbName</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            

            <td class="description last">The name of the DB.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>tableName</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            

            <td class="description last">The name of the table.</td>
        </tr>

    
    </tbody>
</table>
 
<dl class="details">

    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="StorageUtil.js.html">StorageUtil.js</a>, <a href="StorageUtil.js.html#line502">line 502</a>
    </li></ul></dd>
 
</dl>

    <h5>Returns:</h5>
    
            
<div class="param-desc">
    A promise that is resolved with object that contains the records for example: {0:{key:"", value: ""}, 1:{key: "", value: ""}}, and rejected with StorageUtilException once it fails.
</div>



<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type">Promise</span>


    </dd>
</dl>

        

    
</dd>

        
            
<dt>
    <h4 class="name" id="readRecord"><span class="type-signature"></span>readRecord<span class="signature">(dbName, tableName, key)</span><span class="type-signature"> &rarr; {Promise}</span></h4>

    
</dt>
<dd>
    
    <div class="description">
        Read records from table.
    </div>

        <h5>Parameters:</h5>
        

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>dbName</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            

            <td class="description last">The name of the DB.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>tableName</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            

            <td class="description last">The name of the table.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>key</code></td>
            

            <td class="type">
            
            </td>

            

            

            <td class="description last">The key of the record.</td>
        </tr>

    
    </tbody>
</table>
    

    
<dl class="details">
    

    

    

    

    

    

    

    

    

    
    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="StorageUtil.js.html">StorageUtil.js</a>, <a href="StorageUtil.js.html#line462">line 462</a>
    </li></ul></dd>
    

    

    

    
</dl>


    

    

    

    

    

    
    <h5>Returns:</h5>
    
            
<div class="param-desc">
    A promise that is resolved with the value of the record, and rejected with StorageUtilException once it fails.
</div>



<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type">Promise</span>


    </dd>
</dl>

        

    
</dd>

        
            
<dt>
    <h4 class="name" id="updateRecords"><span class="type-signature"></span>updateRecords<span class="signature">(dbName, tableName, dataArray)</span><span class="type-signature"> &rarr; {Promise}</span></h4>

    
</dt>
<dd>

    
    <div class="description">
        Update records in table.
    </div>
    

    

    

    
        <h5>Parameters:</h5>
        

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>dbName</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            

            <td class="description last">The name of the DB.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>tableName</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            

            <td class="description last">The name of the table.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>dataArray</code></td>
            

            <td class="type">
            
                
<span class="param-type">Array</span>


            
            </td>

            

            

            <td class="description last">Array of objects. Each object has two properties, key and value.</td>
        </tr>

    
    </tbody>
</table>
    

    
<dl class="details">
    

    

    

    

    

    

    

    

    

    
    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="StorageUtil.js.html">StorageUtil.js</a>, <a href="StorageUtil.js.html#line300">line 300</a>
    </li></ul></dd>

</dl>

    <h5>Returns:</h5>
    
            
<div class="param-desc">
    A promise that is resolved with array of records that were not updated- this may happen if some of the records were not in the table, that array may be empty if all records were updated. The promise would be rejected with StorageUtilException if the insertion has failed.
</div>



<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type">Promise</span>


    </dd>
</dl>

        

    
</dd>

        </dl>
    

    

    
</article>

</section>




</div>

<nav>
    <h2><a href="index.html">Index</a></h2><h3>Classes</h3><ul><li><a href="StorageUtil.html">StorageUtil</a></li></ul><h3>Global</h3><ul><li><a href="global.html#StorageUtilException">StorageUtilException</a></li></ul>
</nav>

<br clear="both">

<footer>
    Documentation generated by <a href="https://github.com/jsdoc3/jsdoc">JSDoc 3.3.0-alpha9</a> on Sun Nov 16 2014 10:12:42 GMT+0200 (Jerusalem Standard Time)
</footer>

<script> prettyPrint(); </script>
<script src="scripts/linenumber.js"> </script>
</body>
</html>
