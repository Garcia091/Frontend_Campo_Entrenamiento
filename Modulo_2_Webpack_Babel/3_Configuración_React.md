# configuración de webpack y babel para React
1. Abrimos una terminal gitbash
2. Ingresamos al escritorio, creamos una carpeta para nuestro proyecto y abrimos dicha carpeta en VSC

![image](https://user-images.githubusercontent.com/30872921/134976528-0ad031cf-4525-4de5-8a50-787bd1666fe3.png)

3. Verificar que tengamos instalado node.js `node –version`
![image](https://user-images.githubusercontent.com/30872921/134976976-3dad8802-cfa7-4244-a611-ec6523c901c8.png)

5. Vamos a instalar unas dependencias para poder trabajar con react. Estas dependencias se deben guardar como dependencias de producción
 ```
  npm install react react-dom –save
```
![image](https://user-images.githubusercontent.com/30872921/134977158-d17a204c-3445-4c1d-9e23-8205152dbee3.png)

6. Vamos a actualizar el contrato con nuestra aplicación package.json
`npm init –Y`

![image](https://user-images.githubusercontent.com/30872921/134977344-6853f07d-64c6-4a4f-9fe3-264072a12661.png)

Como vemos en la imagen el package.json me permite administrar los elementos de mi aplicacion, nombre, versión, descripción, instalaciones, entre otros.

![image](https://user-images.githubusercontent.com/30872921/134977392-512aa5a6-e181-47d0-96cd-7dc16e4ff1bf.png)

7. Vamos a crear nuestra estructura de carpetas
```
/public
/public/index.html
/src
/src/componente
/src/componente/About.jsx
/src/componente/Ejemplo.jsx
/src/style/About.css
/index.js
/.babelrc
/.gitignore
/webpack.config.js
```
8. Vamos a crear una carpeta llamada public
- Ingresamos a public y dentro de ella creamos un archivo llamado index.html

![image](https://user-images.githubusercontent.com/30872921/134978938-a5ed5dfc-aeb8-4270-badc-3309794471af.png)

9. Nos devolvemos a nuestra carpeta raíz y creamos una carpeta llamada src (carpeta de recursos) acá ubicaremos toda la lógica de nuestra aplicación, luego ingresamos a la carpeta de recursos

![image](https://user-images.githubusercontent.com/30872921/134979024-324fcdf9-2ee5-4a99-b6bd-a885897824ab.png)

Dentro de src creamos una carpeta llamada components y otra llamada containers

![image](https://user-images.githubusercontent.com/30872921/134979134-6ab56470-eb04-419c-8b70-6a7218246d50.png)

> components => tendremos los componentes hijos de nuestra aplicación

> containers => tendremos los elementos que trabajaran como padres o como contenedores de nuestra página

10. Vamos a  ingresar a la carpeta components y creamos un archivo que llamaremos About.jsx

![image](https://user-images.githubusercontent.com/30872921/134979372-e9bfba4d-1eb3-4ff1-a906-18c5fbc791d2.png)

11. Nos devolvemos a la carpeta src y creamos un archivo llamado index.js y este será el punto de entrada a nuestra aplicación, y dentro de este archivo realizaremos las configuraciones necesarias y pertinentes para decirle a nuestro proyecto que vamos a trabajar con react.

![image](https://user-images.githubusercontent.com/30872921/134979617-95dcb612-1be2-4a69-9ea4-4f9aaffe1e5f.png)

12. Dentro de la carpeta public, creamos un archivo llamado index.html, vamos a ingresar y vamos a incorporar una estructura base de html. Adicionar un h1 y una división con un id root

![image](https://user-images.githubusercontent.com/30872921/134979723-6a72087a-3339-423a-83e6-5343fb687dc5.png)

13. Nos vamos para la carpeta src y abrimos el archivo index.js e importamos las librerías de react y reac-dom.<br/>
> react-dom => es el que nos ayuda a hacer render de nuestra aplicación o ayuda a colocar nuestro componente de entrada en nuestra aplicación

![image](https://user-images.githubusercontent.com/30872921/134979831-41b1b3af-9a45-495f-8ef7-c1c9df6e52ea.png)

14. Nos vamos para la carpeta components que se encuentra dentro de la carpeta src y abrimos el archivo About.jsx

![image](https://user-images.githubusercontent.com/30872921/134979904-6ad03091-9484-431a-a893-76e321ea75d1.png)

15. Vamos a implementar el componente para poderlo ver. La implementación de un componente es convertirlo en un elemento o etiqueta
- Importamos About dentro del archivo index
- Como elemento de entrada usamos el `<div id="root">` definido en el archivo index.html de la carpeta public
- ReacDOM con su función render nos permite tener la relación de lo que quiero mostrar y en donde lo quiero mostrar

![image](https://user-images.githubusercontent.com/30872921/134980139-63721d54-8830-42c5-a866-ff827d32d591.png)

16. [Gist para configuración de webpack y babel](https://gist.githubusercontent.com/jennymontoya1001/4cda0e4d2014b0b7d512a4cd94e9c99b/raw/905e4e9c8e4eaa4c7f09b24dbe761e2540285f2b/ReactWebpackBabel)

***Vamos a configurar babel**
1. Vamos a instalar unas librerías como dependencia
2. Loader para cargar nuestra aplicación el comando `--save-dev` guarda las librerias como dependencias de desarrollo 
3. Dentro de la carpeta raíz del proyecto instalamos

```
npm install @babel/core @babel/preset-react @babel/preset-env babel-eslint babel-loader --save-dev
```

![image](https://user-images.githubusercontent.com/30872921/134980730-9881eb54-32cb-4ff9-8018-595d30529e89.png)

17. Fuera de la carpeta src creamos un archivo llamado .babelrc

![image](https://user-images.githubusercontent.com/30872921/134980923-9f2f8c45-04d5-4bdb-8e7f-c6834e4a2b0f.png)

18. [Ahora vamos a configurar webpack]
(https://gist.githubusercontent.com/jennymontoya1001/4cda0e4d2014b0b7d512a4cd94e9c99b/raw/905e4e9c8e4eaa4c7f09b24dbe761e2540285f2b/ReactWebpackBabel)

```
npm install webpack webpack-cli html-webpack-plugin html-loader mini-css-extract-plugin css-loader --save-dev
```

![image](https://user-images.githubusercontent.com/30872921/134981150-4add3966-7846-4acc-aa00-90ae28951e3d.png)

Vamos a instalar otra dependencia de desarrollo que nos sirve para cargar nuestra aplicación en local webpack dev server
```
npm i -D webpack-dev-server
```
![image](https://user-images.githubusercontent.com/30872921/134981360-7a466e20-3cdd-4000-9831-97bb4244388f.png)

- Dentro de la carpeta raíz, a la misma altura de src creamos un archivo llamado webpack.config.js
- Agregamos la configuración al archivo

![image](https://user-images.githubusercontent.com/30872921/134981574-b5ddbc6d-c7eb-4611-838e-bba9c09f6556.png)

Dentro de la carpeta src creamos una carpeta llamada styles y dentro de ella un archivo llamado About.css

![image](https://user-images.githubusercontent.com/30872921/134981735-52e271ba-6b92-4432-a44b-05661448e2ac.png)

Importamos estos estilos dentro del componente About.jsx

![image](https://user-images.githubusercontent.com/30872921/134981782-1847dc5b-6640-433b-8cc5-52501962d8d8.png)

Nos vamos para nuestro paquete json y nos ubicamos en la zona de los scripts

![image](https://user-images.githubusercontent.com/30872921/134981841-33e30b0c-7f9b-4452-972b-16388419d8b8.png)

Ahora vamos a correr nuestro proyecto en modo de desarrollo

![image](https://user-images.githubusercontent.com/30872921/134981925-804754d9-413e-42aa-a6d8-dc741120a649.png)

![image](https://user-images.githubusercontent.com/30872921/134982013-c654aea9-ebac-47b6-9ca2-7f10c396e530.png)

Vamos a verificar en nuestro navegador
Ingresamos al http://localhost:3005/

![image](https://user-images.githubusercontent.com/30872921/134982155-cf0e17e1-e075-4b87-9ed4-d7fc6b266599.png)






