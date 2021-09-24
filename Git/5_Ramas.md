# Ramas

## Crear una nueva rama
Cuando vamos a trabajar en una nueva funcionalidad, es conveniente hacerlo en una nueva rama, para no modificar la rama principal y dejarla inestable. Aunque la orden para
manejar ramas es git branch podemos usar también git checkout.
```
$ git branch hola
$ git checkout hola
Switched to branch 'hola'
```

O de forma más rápida:
```
$ git checkout -b hola
Switched to a new branch 'hola'
```
