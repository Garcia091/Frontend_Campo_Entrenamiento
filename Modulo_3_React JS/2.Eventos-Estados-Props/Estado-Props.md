# State - props

## Pasos: 

1. Crear una aplicación con el generador de React `https://create-react-app.dev/`

  ![image](https://user-images.githubusercontent.com/30872921/136859102-892c4e81-a10c-488b-afbc-153dadcf8a85.png)
  
Comando: `npx create-react-app my-app`

2. Ingresar a la carpeta de la aplicación `cd pelicula`<br/>
3. Abrir un Visual Studio Code `code .`
4. Ejecutar la app `yarn start` o `npm start`

 ![image](https://user-images.githubusercontent.com/30872921/136859136-06d37d8d-5bfb-4063-bfef-d765e33e0000.png)

5.	Después de la creación, su proyecto debería verse así:

![image](https://user-images.githubusercontent.com/30872921/136859239-97bfd9a1-fdb2-4f5d-93e8-d95791b98bcc.png)

6.	Limpiar la estructura de trabajo <br/>
En la carpeta publica, borrar todo menos el archivo index.html
 
![image](https://user-images.githubusercontent.com/30872921/136859339-c863aca7-0e77-4257-ae4c-07a6e25710a8.png)

Limpiar el archivo index

![image](https://user-images.githubusercontent.com/30872921/136859469-78e10336-6d82-485e-bf1a-cf8badc9e433.png)

Limpiar la carpeta `src`

Borrar todo menos el archivo `index.js`

![image](https://user-images.githubusercontent.com/30872921/136859558-a8d6bb4d-b218-4fd2-887b-d10c276bb176.png)

Limpiar el archivo index.js

![image](https://user-images.githubusercontent.com/30872921/136859620-5c2f772b-4ead-4a5e-992f-227ff2da18fa.png)

7.	Crear las carpetas de trabajo

![image](https://user-images.githubusercontent.com/30872921/136859656-d6b9070a-5656-4b90-b9f5-fbec8153b2e9.png) 


***Containers:*** Referencia a componentes 
***Components:*** hace referencia a pequeños trozos de la aplicación 

***Snipper más usados:***<br/>
`imp` →	import moduleName from 'module'<br/>
`enf` →	export const functionName = (params) => { } <br/>
`nfn` →	const functionName = (params) => { } <br/>
`state` → this.state.stateName <br/>
`clg` →	console.log(object)<br/>

rcc

![image](https://user-images.githubusercontent.com/30872921/136860470-3d882494-369d-48d9-95be-dafd9500b39e.png)

rfc

![image](https://user-images.githubusercontent.com/30872921/136860523-f87452eb-02d3-4769-8d40-40c37e98ea43.png)

rafce

![image](https://user-images.githubusercontent.com/30872921/136860552-d4522e89-651e-4de4-b074-aefdc5102d15.png)

 
8.	Crear el contenedor principal llamado ListContainer.jsx
 
Renderizar el componente principal 
Importar el contendor en el archivo index.js
Vamos a utilizar el componente para que se convierta en elemento usándolo como etiqueta 
 
 
9.	Crear el componente de las tarjetas
 
Renderizar el componente Cards.jsx en el contendor 
 
 
10.	Crear una carpeta con el nombre assets, para archivos estáticos o de prueba 
11.	Crear una data de prueba data.json
 
En la data.json vamos a usar la estructura de un json server
 
Instalar la dependencia json server https://www.npmjs.com/package/json-server 
npm i json-server
Ejecutar la data con el siguiente comando por medio del servidor de json server
json-server --watch ./assets/db.json --port 3004
 
En la dirección asignada podemos consumir los datos de forma temporal mientras en servidor este encendido 
En el contendor principal vamos a consumir nuestra películas por medio de un fetch
 
 
Crear un estado para almacenar la información de las películas, el estado es un objeto que nos permite guardar información con la habilidad de mutar cuando su información cambie 
 
Para asignarle la información debemos ejecutar una función que permite que el estado se actualice 




Como ejemplo vamos a recorrer los datos en el contendor
 


Como podemos ver el estado fue actualizado de forma correcta, por ende podemos recorrer las películas 
Vamos a enviar la información del state al componente Card.jsx por medio de props
 
Todos los componentes usan state y props por defecto, por tal motivo las invocamos y consumimos la información 
 
Para desestructurar la informacion de los props hacemos lo siguiente
 
Agregar estilos del marco de trabajo Bootstrap, vamos a utilizar bootswatch que es una librería de bootstrap
npm install bootswatch
importar los estilos
import 'bootswatch/dist/solar/bootstrap.min.css'

Resultado: Ya tenemos estilos de Bootstrap, vamos a organizar las películas 
 
Estilos asignados
 
Resultado
  
Consumir Api: 
Ir a https://www.omdbapi.com/ 
Ir a API Key
Registrarse de forma gratuita
 

Activar cuenta 
 
El Api la vamos a consumir para búsqueda
 
Resultado
 
El estado tiene unos nuevos elementos para controlar la búsqueda de la película y los errores que puedan surgir en la ejecución de la app
 
Agregar el buscador para hacer la búsqueda de forma dinámica
 
Realizar la función para el evento onSubmit, se hace una nueva actualización al estado y se realiza una nueva petición a el API
 
En el componente cards vamos a crear un botón detalle 


Crear enrutamiento:
Instalar react-router-dom https://reactrouter.com/ 
npm i react-router-dom

Crear una barra de navegación 
 
Crear el componente NavBar.jsx
 
Crear un componente de clase 
Agregar el contenido de Bootstrap
 
Cuando copiamos elementos puros de HTML React no soporta algunas etiquetas ya que no tiene cierre o su singtaxis en este marco de trabajo se implementa de diferente manera
1.	Buscar todas las eqtiquetas que no tienen cierre y con un / generarle el cierre
 

Renderizar el componente en el container, para esto vamos a crear una carpeta llama routers
Y crear un archivo AppRouter.js
 
Agregar el enrutamiento importando las dependencias 
 
Crear la estructura de enrutamiento 
 
Crear la url para detalles y para la pagina principal 
 
Renderizar AppRouter en index.js
 
La url de detalle va a hacer dinámica
 
¿Como enviar datos por url en React?



Agregar la barra de navegación al enrutamiento 
Borrar el componente Navbar del contenedor y agregarlo en AppRouter.js
 
En NavBar.js importar react-router-dom y utlizar el componente Link
 
Todas las etiquetas <a> van a cambiar por Link
 
 
La palabra href cambia por to y se le asigna la url que creamos en AppRouter.js




