// Node.js allows to run Javascript on server side
    // a lot of libraries
    // npm etc.
    // best to use LTS versions (long term support)
    // it is asynchronous (runs C++ in under the hood)


// since it doesn't run in the browser, there is no Window object, no event etc.
// no DOM elements either
// unlike the browser, NodeJS can access files on the computer because it works on the server side
/**
 * it uses the MODULE SYSTEM
 * 
 * 1. core libraries - http, fs, path... (no need to install)
 * 2. modules - created by oneself
 * 3. NPM (YARN) modules - very important to read the documentation
 */

/**
 * EXERCISE
 * Create a new Folder - math
 * Create a file math.js
 * create 4 function - multi, divide, plus, minus - 2 inputs parametes (a,b)
 * return the a * b, a / b, a + b, a -b
 * Test these functions
 * create a module from math.js
 * use this functions in app.js
 */


// if we want to inmport/export in ES6 and later, package.json is required
// it can be created by "npm init" or "npm init -y" (default)