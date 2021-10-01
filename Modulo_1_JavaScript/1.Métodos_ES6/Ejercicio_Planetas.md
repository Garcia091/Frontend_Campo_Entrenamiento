# Planetas

![image](https://user-images.githubusercontent.com/30872921/135636296-dcae6e3f-ed21-4ec9-bd99-3d5640ae329b.png)

1.	Crear la estructura de trabajo

![image](https://user-images.githubusercontent.com/30872921/135636456-98d279b0-1ecb-4631-aaa3-be762bc084cd.png)

2.	Vincular los archivos externos al archivo index.html 

![image](https://user-images.githubusercontent.com/30872921/135636545-e21505fa-4372-447a-8287-9aa8a0131157.png)

3.	Inicializar el repositorio con git
`git init`

![image](https://user-images.githubusercontent.com/30872921/135636642-fb3a3ff6-fd1a-4e04-b5a7-5c9f37e18d5c.png)

4.	Listar todas las carpeta para ver la carpeta `git ls -al`

![image](https://user-images.githubusercontent.com/30872921/135636738-6e70958e-1b05-4942-9d4c-0fe85fae2afa.png)

5.	Crear la estructura de la aplicación 
  1.	Agregar el titulo de la pestaña del navegados a planetas.
  
  ![image](https://user-images.githubusercontent.com/30872921/135636955-cbbf94a5-7297-4547-814c-512b630ebc80.png)
  
  2.	Crear el encabezado principal de la app con una etiqueta `<h1>`
  3.	Crear una tabla con el nombre, el tamaño y la distancia del planeta
  
  ![image](https://user-images.githubusercontent.com/30872921/135637063-e5a72bb9-4bf3-41f4-9cae-7392ce152000.png)
  
6.	Realizar un git status para agregar los cambios al staging `git status`
  
![image](https://user-images.githubusercontent.com/30872921/135637641-62d9781d-61b2-4bf0-9eb3-b786a0ca2c1a.png)

7.	Agregar la información <br/>
Agregar archivo con la misma extención `git add *.html`

![image](https://user-images.githubusercontent.com/30872921/135637717-17dcd363-7da7-46f1-9d1b-16d062a75fc7.png)

`git commit -m "Agregando html"`
  
 ![image](https://user-images.githubusercontent.com/30872921/135638301-35700fe5-d25a-4ca5-a64c-a05e023ef4e0.png)

Agregar todos los archivos que estén en una carpeta <br/>
`git add style/` <br/>
`git status` <br/>
`git commit -m "Agregar carpeta de estilos"` <br/>

![image](https://user-images.githubusercontent.com/30872921/135638366-30709840-055b-4167-9039-65a124184aad.png)

Agregar todo y luego excluir un archivo
`git add -A`<br/>
`git reset script/main.js`

![image](https://user-images.githubusercontent.com/30872921/135638438-ad438f39-be7b-4c3b-8086-692f5624e0c4.png)

Renombrar main por Peliculas.js
Agregar el archivo Peliculas y hacer commit
 `git commit -m “Carpeta del JavaScript”`
 ![image](https://user-images.githubusercontent.com/30872921/135638530-53f686a1-aca8-4427-93e9-fafea798619f.png)

Verificar el historial de commit 
`git log`
 
  ![image](https://user-images.githubusercontent.com/30872921/135638614-0bf4942f-f885-45ab-be9b-75671ab00dde.png)

Renombrar la rama de master a main `git branch -M main`
  
 ![image](https://user-images.githubusercontent.com/30872921/135639384-bd49c980-59ca-47b7-b000-1a1fb115d961.png)

Agregar un repositorio Remoto <br/>
Crear un repositorio y compiar la url del repositorio remoto 
  
 ![image](https://user-images.githubusercontent.com/30872921/135639443-666de02e-0be4-4158-8b86-ce01b0ef9bde.png)

Subir la informacion al repositorio 
`git push origin main`
  
![image](https://user-images.githubusercontent.com/30872921/135639525-c0866a7e-70f2-4d8e-86a8-f98cc223adc9.png)

Hacer cambios en el repositorio para ver como podemos volver a una verison anterior.
  
![image](https://user-images.githubusercontent.com/30872921/135639700-328a0c46-af17-459c-acba-29e3ae65d523.png)

Los cambios que realizamos no nos gusta, para regregar al estado del ultio commit realizado, ejecutamos el siguiente comando 
`git checkout -- .`
 
![image](https://user-images.githubusercontent.com/30872921/135639773-10e85484-7c7e-4deb-a3a2-403c1ff65e5c.png)

Revisar el codigo en visual studio code, los cambios desaparecieron 

![image](https://user-images.githubusercontent.com/30872921/135639839-5dcb3a6b-d594-47cc-ba6f-163f7bbc4354.png)

8.	Crear la estructura para el html <br/>
En el cuerpo de la tabla vamos a gregar diferentes inputs para capturar la informacion de los planetas
 
![image](https://user-images.githubusercontent.com/30872921/135639942-ecc3e0ee-c24a-488b-9090-c2e7e1a05e73.png)

Crear diferentes id para utilixar los datos desde JavaScritp
> n_planeta: Numero del planeta  <br/>
> np_planeta: Nombre del planeta <br/>
> d_planeta: distancia del planeta <br/>
> t_planeta: tamaño del planeta <br/>

9.	Agregar los botones 

![image](https://user-images.githubusercontent.com/30872921/135640014-929e1c66-823c-460e-abf3-148d3ae326af.png)

Resultado en el navegador
 
![image](https://user-images.githubusercontent.com/30872921/135640154-2c264559-bcda-4f95-866d-164496f82d2b.png)

10.	Hacer commit de los cambios realizados y enviar la informacion al repositorio
 
 ![image](https://user-images.githubusercontent.com/30872921/135640277-14fb10af-dbac-4b9a-a8d7-af6cef519363.png)

11.	Historial de commit <br/>
`git log`

![image](https://user-images.githubusercontent.com/30872921/135640328-b2822fcc-d465-41af-8dc7-9ddb4be16729.png)
  
`git log --online`
 
![image](https://user-images.githubusercontent.com/30872921/135640396-f0283e6f-258b-4170-8f25-c5d3ab1ab95c.png)
  
`git log --oneline --decorate --all –graph`
 
 ![image](https://user-images.githubusercontent.com/30872921/135640447-52dd5e9a-ddbf-4926-83f1-337e5fdec5d4.png)


## Alias:
***Crear un alias*** <br/>
`git config --global alias.lg "log --oneline --decorate --all --graph"`
![image](https://user-images.githubusercontent.com/30872921/135642714-6e3d15b5-3da9-46db-a1a5-4f7076c9d947.png)

Ahora con el comando lg ejecutamos todo la línea anterior <br/>
`git lg`<br/>
para observar todos los alias que hemos creado<br/>
`git config --global -l` <br/>

![image](https://user-images.githubusercontent.com/30872921/135643454-873819fc-c662-4fd0-bc96-ad9d8dd0f81a.png)

Para saber la rama y los cambios realizados 
git status -s -b
 
![image](https://user-images.githubusercontent.com/30872921/135643507-a001c03c-a524-4c3f-bba4-547563317068.png)

Realicemos un cambio a ver qué pasa con el comando anterior. Nos permite ver los cambios de forma resumida

![image](https://user-images.githubusercontent.com/30872921/135643626-5d43b830-8ea2-4dce-8d09-c17432ae8d2b.png)

Ya tenemos una version estable de nuestra apliacación, vamos a crear ramas para desarrollar 
Las Ramas son conocidas como líneas de tiempo
1.	Crear una rama developers
 
![image](https://user-images.githubusercontent.com/30872921/135643713-c99d4231-b199-49ae-b89e-be19500b824f.png)

2.	Crear cambios en la rama developers
En el archivo script.js vamos a trabajar con los elementos básicos de la programación (variables, ciclos, array, objetos)
1.	Crear dos array con nombres planetas y distancia
 
![image](https://user-images.githubusercontent.com/30872921/135643771-ae2132d3-9bbc-4604-a24c-30778114527f.png)

Tipos de formas de recorrer un array
1.	Con ciclo while

![image](https://user-images.githubusercontent.com/30872921/135643835-b0e92cd3-4009-4e14-afae-a34b6e4bd89c.png)

Se debe tener cuidado de no crear un ciclo infinito.
2.	Ciclo for:

![image](https://user-images.githubusercontent.com/30872921/135643948-0e3dfd64-221b-4f5d-95d4-2e1479f5c423.png)

![image](https://user-images.githubusercontent.com/30872921/135644076-29499004-900b-4477-a980-ff2c6e71b5f1.png)

Todo objeto tiene internamanete Prototipado que me permite realizar funciones internamente en un array.

![image](https://user-images.githubusercontent.com/30872921/135644171-cfa07f37-1f34-48d0-874f-955828cf37de.png)

Ciclo for In

![image](https://user-images.githubusercontent.com/30872921/135644246-fa13042b-c015-41a9-abf7-a2d5f4f6103a.png)

Recorrer la información de planetas:

![image](https://user-images.githubusercontent.com/30872921/135644295-bb1e1e5f-05bd-48ac-b1e4-86d7470676d9.png)

Ciclo For OF
Estructura:

![image](https://user-images.githubusercontent.com/30872921/135644338-144922b8-4863-42af-8dab-d58611082954.png)

 
# Operador de igualdad `=`
`=` El operador de JavaScript asigna un valor al operando izquierdo depende del valor del operando disponible en el lado derecho. El primer operando debe ser una variable.<br/>

`==`
El operador `==` es un operador de igualdad. Comprueba si sus dos operandos son iguales o no cambiando la expresión de un tipo de datos a otros. Puede usar el operador == para comparar la identidad de dos operandos, aunque no sean de un tipo similar.<br/>

`===`
•	Igualdad estricta === comprueba que dos valores y sus tipos sean iguales

Ejemplo comparar si las distacias de los planetas son igual a ‘5’, para este ejercicio vamos a trabajar con un for In.

***Distancias***
 
![image](https://user-images.githubusercontent.com/30872921/135645172-1dcab834-a443-4b25-a915-ff208357bbb2.png)
 
Operador estricto:<br/>
En este ejercicio no encuentra simulitud porque los tipo y los valores no son iguales.
 
![image](https://user-images.githubusercontent.com/30872921/135645809-bdf57310-c743-4373-8864-abe15ad29a38.png)

![image](https://user-images.githubusercontent.com/30872921/135645902-a2d5471a-e715-4316-ad81-0519f58b836d.png)

## Diferencias entre commit y restaurar archivos
Iniciamos verificando el estado de los archivos.

![image](https://user-images.githubusercontent.com/30872921/135646057-52273a14-11f9-4d39-951e-487e8ef12e5d.png)

Verificar los cambios que hemos realizados de forma local con la ultima version del respositorio <br/>
`git diff ` <br/>
cambios que se realizaron en los archivos, el compara el commit anterior con el escritorio actual

![image](https://user-images.githubusercontent.com/30872921/135646489-e668f775-45bf-4ced-aefd-3b407a64d9cd.png)

Para salir del editor presionamos la letra `q` <br/>
Verificar todo lo que está en el staged <br/>
`git diff --staged`

![image](https://user-images.githubusercontent.com/30872921/135646538-9c824738-ee30-45c8-b89d-05d8531a6c11.png)
 
Sacarlo del staged:<br/>
`git reset HEAD Archivo `
 
![image](https://user-images.githubusercontent.com/30872921/135646607-c9e6556c-802e-474f-83d2-a7f4074f01d2.png)

`git diff --staged` <br/>
Como vemos en la imgen no tenemos nada en el staging area.<br/>
Actualizar el mensaje del commit. <br/>
Si en algun momento realizamos un commit con el nombre incorrecto lo podemos renombrar por medio de comando de git.<br/>
Para este ejercicio vamos a volver a subir los cambios y realizmos un commit con el mensaje de “Agregar información de planetas”. 
Este cambio solo aplica al ultimo commit.<br/>

![image](https://user-images.githubusercontent.com/30872921/135647075-709a8089-6a0d-41ef-a9d8-efbfbb9e0208.png)

La informacion que subi al staging no es correcta, por ende vamos a remombrar el commit <br/>
`git commit --amend -m “Renombrar”`

![image](https://user-images.githubusercontent.com/30872921/135647215-f28c25e7-1043-4ac7-96aa-9a8a449e474e.png)

Se me olvido agregar un archivo en el commit, para resolver el error uso el siguiente comando <br/>
`git reset --soft HEAD^`
 
![image](https://user-images.githubusercontent.com/30872921/135647468-9a30d5fa-8b95-41b8-8d9b-041a433c3555.png)

Verificamos los cambios

![image](https://user-images.githubusercontent.com/30872921/135647515-9fcbb60f-c372-4ad3-bc8f-6a0cdfcdf75e.png)

El commit esta activo, esta a la espera de que carguen nuevamente los datos. Se deben cargar los datos nuevamente con commit.
 
![image](https://user-images.githubusercontent.com/30872921/135647776-a15b9942-9634-4bd1-91bd-d88d3703e6df.png)
 
Subir los cambios a la rama developers
 
![image](https://user-images.githubusercontent.com/30872921/135647849-060b73df-7921-45e1-987f-59fc0266a4ce.png)

Si estamos seguros de los cambios realizados en la rama developers, vamos a combinar los cambios con la rama main.
Merge:<br/>
1. ***Fast-forward:*** se dispara cuando git no reconoce cambios y se puede integrar a la rama principal sin ningún problema 
2. ***Uniones automática:***
3. ***Uniones manuales:*** cuando salen conflictos git pide actualización manual y hace un merge commit para guardar los cambios
Realicemos el Merge a la rama main.

Pasos para ramas:<br/>
***Crear ramas:*** git branch nombreRama
***Moverme de rama:*** git checkout nombreRama. Para hacer un merge debemos estar en la rama a donde vamos a combinar, en este caso main.
***Comparar ramas:*** git diff nombreRama main.

![image](https://user-images.githubusercontent.com/30872921/135648168-3a4414c6-88dc-410e-b900-71d22459b26f.png)

Cuando estamos seguros de la informacion ejercutamos 
`git merge developers`  ***Nota:*** debe estar parado en la rama que quiere actualizar

![image](https://user-images.githubusercontent.com/30872921/135648293-c7809e43-545e-4767-978c-4cb9dbbd0386.png)
 
Verificar que los cambios nuevos si esten en la rama main.<br/>
Subir los cambios al repositorio<br/>
`git push origin main`
 
![image](https://user-images.githubusercontent.com/30872921/135648388-5d785971-7be9-410b-b067-b67756b84af7.png)

La ultima version, esta en la rama main y en developers
 
![image](https://user-images.githubusercontent.com/30872921/135648512-1a69b1a4-72e1-4e22-9ecb-3cef2d9f7593.png)

***Lenguaje tipado:***
Un lenguaje de programación es fuertemente tipado si no se permiten violaciones de los tipos de datos, es decir, dado el valor de una variable de un tipo concreto, no se puede usar como si fuera de otro tipo distinto a menos que se haga una conversión.

> forEach:
 
![image](https://user-images.githubusercontent.com/30872921/135648706-a3ceb3de-cf3e-4c4f-bd20-323864372137.png)

> Map:

![image](https://user-images.githubusercontent.com/30872921/135648763-a362ed72-64e7-4698-a5cc-690a4c3a2970.png)

![image](https://user-images.githubusercontent.com/30872921/135648848-c9ce5663-56f5-401d-bf48-d58e35178baf.png)

La funcion map tiene la opcion de retornar un nuevo array asignandolo a una variable

![image](https://user-images.githubusercontent.com/30872921/135648895-d2afb2f0-4477-4085-a355-0aa5ef572f4b.png)

***Agregar estos nuevos cambios a la rama developers***
1.	Cambiar de rama 
2.	Agregar cambios 
3.	Hacer commit 
4.	Entregar cambios al repositorio

![image](https://user-images.githubusercontent.com/30872921/135649000-cbd91be9-a5c4-4f4b-922e-83725d1e1ded.png)

***Agregar cambios con conflictos:***
Cambiar el titulo del ejercicio 

![image](https://user-images.githubusercontent.com/30872921/135649064-ef5a8006-e3de-4f03-991e-5f41c91e253c.png)

Agregar cambios a la rama developers

![image](https://user-images.githubusercontent.com/30872921/135649107-37f5c585-7c8d-46a5-8b89-3e578db42817.png)

Combinar las ramas 

![image](https://user-images.githubusercontent.com/30872921/135649177-79f9859e-c154-4659-99a7-9dbf58bc62ce.png)

Ese ejrcicio no genero conflictos vamos a intentarlo de nuevo

En main:

![image](https://user-images.githubusercontent.com/30872921/135649222-e2f63f3e-68f4-42b5-8b22-a821863750d3.png)

En developers:

![image](https://user-images.githubusercontent.com/30872921/135649251-7c73a693-ad74-44cf-a1e1-3b312e33e002.png)

Se deben tener creados los commit para cada cambio.
 
![image](https://user-images.githubusercontent.com/30872921/135649309-2efb5afe-ed24-47e1-a342-a703d0ae6690.png)

Tenermos el conflicto creado, en su editor de texto validar que informacion desea conservar.

![image](https://user-images.githubusercontent.com/30872921/135649372-14024163-2b0f-4479-bfb9-5f65d60153ef.png)

Cuando hacemos un merge, el por defecto genera un commit, cuando no se puede completar el proceso la rama en la cual estabas trabajando quedara de esta manera. Soluciona el conflicto y guarda los cambios.

![image](https://user-images.githubusercontent.com/30872921/135649430-bb727ac8-668e-400f-ae55-6425a92a544c.png)

Guardar cambios.

![image](https://user-images.githubusercontent.com/30872921/135649486-1ed7d1f9-158b-48b3-ba73-298bed2a6900.png)

Si necesitas borrar la rama lo puedes hacer con el siguiente comando <br/>
`git branch -d developers`
