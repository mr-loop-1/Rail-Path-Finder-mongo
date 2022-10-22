# Rail Path Finder

Running Instance - [railpathfinder.herokuapp.com](http://railpathfinder.herokuapp.com)

# Version History
| Date | Summary | Improvement | Link
| ---- | ------- | ----- | ------|
| Jan 2022 | Initial Release | normal DFS | [Old Repo](https://github.com/mr-loop-1/metro-path-mongodb)
| July 2022 | Second Version | major (shortest path algo upgrade) | [Old Repo](https://github.com/mr-loop-1/metro-path-mongodb/tree/main)
| Oct 2022 | Current Version | major (ReactJs, ES6, refactor) | [This Repo](#repository-container-header)

## Note
`node_modules` for both react and express are included in the code itself due to dependency issues from npm version when executing npm install.

`package.json` scripts have been modified to spin both backend and frontend with on command. If want to change port number, do it both in `app.js` and `React_js/package.json` proxy.

## Up and Running
1. Clone the repo
2. Make sure that port 5300 is free
3. Do `npm start` only in the root directory

## Known Bug
- Selecting stations that don't have a junction in between will give double route

## Tech Stack
MongoDb, ExpressJs, ReactJs, NodeJs (basically mern in the current release)