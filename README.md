# Template para proyectos frontend con Angular+

## Consideraciones
- Cambiar nombre del proyecto al que corresponda en los siguientes archivos realizando un replace all de "template-project-frontend" a "nombre del proyecto" y "[proyect]" a "nombre del proyecto"

![ejemplo con vscode](https://gitlab.com/senegocia/template-project-frontend/uploads/66e372e542cf0a133ab89a6a1b1081ea/Screenshot_6.png)
![ejemplo con vscode](https://gitlab.com/senegocia/template-project-frontend/uploads/03b2b72a478b39cd78780215fb72a37f/Screenshot_3.png)

## url development
```
http://localhost:4200/home?hash=qO3mqAQpDcBlSDM3Kjb5QTZOfZiPYrw0v2CEpVay1XjmJcLexNdR7BwI0JAVR2AiMxH9-anzb5t20aOr2ldeQOILkV**3rCVi0Pw1LvYmzHua0So8y0r5rYxcI9z9JSfTCVfwUZisTPxbPOUgQTHVntGe6HCzjrXBmC-8ppXcYuY7kbEmSx7yVCA2W1iAbS9

https://devapp.senegocia.com/template-project-frontend/home?hash=qO3mqAQpDcBlSDM3Kjb5QTZOfZiPYrw0v2CEpVay1XjmJcLexNdR7BwI0JAVR2AiMxH9-anzb5t20aOr2ldeQOILkV**3rCVi0Pw1LvYmzHua0So8y0r5rYxcI9z9JSfTCVfwUZisTPxbPOUgQTHVntGe6HCzjrXBmC-8ppXcYuY7kbEmSx7yVCA2W1iAbS9
```

## Build Docker image
```
docker build -t registry.gitlab.com/senegocia/template-project-frontend:dev --build-arg config=dev .
docker build -t senegocia/[proyect]:qa --build-arg config=qa .
docker build -t senegocia/[proyect]:latest --build-arg config=production .
```

## Push docker image to DockerHub registry
```
docker push registry.gitlab.com/senegocia/template-project-frontend:dev
docker push senegocia/[proyect]:qa
docker push senegocia/[proyect]:latest
```

## Update dependencies Angular
```
ng update @angular-eslint/builder @angular-eslint/eslint-plugin @angular-eslint/eslint-plugin-template @angular-eslint/schematics @angular-eslint/template-parser @angular/core @angular/cli
```
