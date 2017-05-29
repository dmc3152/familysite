# quickstart
This is an Angular 4 MEAN quickstart package

Make sure the following are installed on your local machine:
- Node.js
- MongoDB
- Angular CLI (@angular/cli)
- nodemon

The following packages are installed:
- bootstrap@next
- font-awesome
- angular2-jwt

This quickstart includes examples of how to make basic protected requests. The auth service and guard are created to protect routes and authenticate the user that is logged in.

Follow These instructions to fork the repository:
1. Create a new empty github repository
2. Clone it locally:
<pre>git clone https://github.com/USERNAME/NEWREPO.git</pre>
3. Navigate into the repository:
<pre>cd NEWREPO</pre>
4. Add the original github repository as remote of the the new local repository:
<pre>git remote add upstream https://github.com/dmc3152/quickstart.git</pre>
5. Pull down a copy of the original github repository to the new local repository:
<pre>git pull upstream master</pre>
6. Push the files from your new local repository to the new github repository:
<pre>git push origin master</pre>

In order to use this repository, first fork the repository and then make the following changes:
1. Update package.json
- Name
- Description
- Repository URL
- Bugs URL
- Homepage
2. Run npm install in the root directory and in the angular-src directory
3. Update the README to reflect the purpose of the project