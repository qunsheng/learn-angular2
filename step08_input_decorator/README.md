
## Install npm packages


Run:

```bash
npm install
npm start
```

Make sure `npm start` is running and simultaneously re-compiles the workspace

## Add New component 'childOne'

Add new folder 'components' under app folder

Add new file childOne.component.ts under components folder

You should see childOne.component.js file and childOne.component.js.map will automatically generated

Editing childOne.component.ts

selector should be child-one

class name should ChildOneComponent

Modify app.module.ts: 
    1) similar to import AppComponent, import ChildOneComponent; 
    2) similar to AppComponent, add ChildOneComponent to declarations

Modify app.component.ts, add tag <child-one></child-one> somewhere in template

Then you will see the new child-one component show up in browser

## passing data from parent component to child component using @Input

Modify app.component.ts, prepare a data object

Modify app.component.ts, use property binding to bind data to chile component

Modify childOne.component.ts, use @input decorator to receive the input from parent componnet

Modify childOne.component.ts, use the data passed from parent component in childOne component



