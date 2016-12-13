# Step10Routing

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.21.
Run `ng new step10_routing` to generate code

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Add Bootstrap css

Go to bootswatch.com, pickup Darkly theme:
 1) click Download-->bootstrap.min.css-->copy the link -->add to index.html;
 2) click Preview -->page source --> cut header part --> add to app.component.html

## add router link

add routerLink="about" and routerLink="services" for the routing link.


## Generate about and service component

Run `ng generate component about` to generate a new about component.
Run `ng generate component services` to generate a new services component.

## Create new router module

create/edit app.router.ts file, define the paths.

## Add routes module 

Modify app.module.ts to import newly crated routes module

## Add router-outlet tag to app.component.html
