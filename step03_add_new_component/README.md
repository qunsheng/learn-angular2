# Add New component 'user'



## Install npm packages


Run:

```bash
npm install
npm start
```

Make sure `npm start` is running and simultaneously re-compiles the workspace

## Add New component 'user'

Add new folder 'components' under app folder

Add new file user.component.js under components folder

You should see user.component.ts file and user.component.js.map will automatically generated

Copy everything from app.component.ts to user.component.ts

Change selector from my-app to user

Change class from AppComponent to UserComponent

Modify app.module.ts: 
    1) similar to import AppComponent, import Usercomponent; 
    2) similar to AppComponent, add UserComponent to declarations

Modify app.component.ts, add tag <user></user> somewhere in template

Then you will see the new user component show up in browser






