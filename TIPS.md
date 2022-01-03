# Angular CLI

## Important

### Creating stuff

Use the command from where you want your component to be generated

#### Component / Services / Guard
<br/>
Generate a component

```
ng generate component < name of component >
```
This creates a folder containing the component, if you only want the three / four files directly created into your folder type this:

```
ng g component < name of component > --flat
```

This command can easily be used for services and guards among others to make it so much faster creating it and importing it

```
ng g component / guard / service < name of component >
```

## What are services?

Serviecs are files used mainly for maintaining state and containing logic that is used widely by the application. In this repo the only service is for the api and guard, but in other applications services often should include something for security, user state, guards etc.



