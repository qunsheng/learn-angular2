# Two-way data binding by importing FormsModule

Now ngModel directive belongs to FormsModule, we can do two way binding by just importing FormsModule

## Install npm packages and start compilor


Download files from  https://github.com/angular/quickstart and copy to workspace


Run:

```bash
npm install
npm start
```

## Binding two way by importing FormsModule

Modify app.module.ts: import the FormsModule from @angular/forms inside imports of AppModule(NgModule)

Modify app.component.ts: use [(ngModel)] to do the two way binding




