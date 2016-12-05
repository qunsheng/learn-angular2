# Two-way data binding

Two-way data binding combines the input and output binding into a single notation using the ngModel directive.+


## Install npm packages and start compilor


Download files from  https://github.com/angular/quickstart and copy to workspace


Run:

```bash
npm install
npm start
```

## Binding two way

[(ngModel)]:  What this is doing behind the scenes is equivalent to:  [ngModel] + (ngModelChange)

Modify app.component.ts:
1) use templateUrl: app/app.component.html instead of template;
2) implement onCountChanged method.

Create app.component.html:
1) add new file app.component.html;
2) use [()] to do the two way Binding;
3) bind countChange event.

Create new component counter.component.ts:
1) create new folder components; 
2) create new template file counter.component.html; 
3) create new ts file counter.component.ts.

To create your own component that supports two-way binding, 
you must define an @Output property to match an @Input, but suffix it with the Change. 
inside class CounterComponent shows how to make property count support two-way binding.



