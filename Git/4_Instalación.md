# Instalación  
La instalación de Git es muy facil de optener. Desde la web oficial de [Git](https://git-scm.com/) puedes obtener las instrucciones para instalarlo en las diferentes
distribuciones de Linux, windows y Mac.

## Configuración
Lo primero que deberías hacer cuando instalas Git es establecer tu nombre de usuario y dirección de correo electrónico. Esto es importante porque las confirmaciones 
de cambios (commits) en Git usan esta información, y es introducida de manera inmutable en los commits que envías:
```
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```

## Crear un proyecto
Creamos un directorio donde colocar el código
```
$ mkdir curso-de-git
$ cd curso-de-git
```
Creamos un archivo index.html que muestre Ejercicio Clase #1.
```
$ touch index.html
```
Generamos la estructura báscia
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body style="background-color: aqua; text-align: center;">
    
    <h1>Ejercicio Clase #1</h1>
</body>
</html>
```

