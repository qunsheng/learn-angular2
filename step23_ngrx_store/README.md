# Set up ngrx

## Install npm packages

Run:

```bash
npm install
npm install @ngrx/core @ngrx/store --save
npm start
```

Make sure `npm start` is running and simultaneously re-compiles the workspace

## Modify system.config.js to map the ngrx modules to the new bundes/*.umd.js

Paths defined alias

Map tells the system loader where to look for things

Two new js file should be add to here

## Implement

Create a reducer function

In app's main module, import reducer and use the StoreModule.provideStore(reducers) function to pass the reduce to store

Then inject the Store service into components and services. Use store.select to select slice(s) of state:

