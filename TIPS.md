# Angular CLI

## Important

#### Component / Services / Guard

Use the command from where you want your component to be generated <br><br>
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

<br/>

# What are services?

Serviecs are files used mainly for maintaining state and containing logic that is used widely by the application. In this repo the only service is for the api and guard, but in other applications services often should include something for security, user state, guards etc.

<br>

# Underrated practices

- Interfaces
- classes
- Helper methods
- Focus on generic functions, write once use everywhere
- Code warmup, start your day with 30 - 60 minutes with a task from https://edabit.com/

# Further research

Promises

https://www.youtube.com/watch?v=DHvZLI7Db8E&t=187s&ab_channel=WebDevSimplified

async await

https://www.youtube.com/watch?v=V_Kr9OSfDeU&t=330s&ab_channel=WebDevSimplified

Complete picture

https://www.youtube.com/watch?v=670f71LTWpM&ab_channel=JamesQQuick

Generics

https://www.youtube.com/watch?v=nViEqpgwxHE&ab_channel=BenAwad

The broken windows theory for software development

https://medium.com/@learnstuff.io/broken-window-theory-in-software-development-bef627a1ce99
