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


***Containers:*** Referencia a componentes <br/>
***Components:*** hace referencia a pequeños trozos de la aplicación 

Instalar la sigueinte extensión en Visual Studio Code

![image](https://user-images.githubusercontent.com/30872921/136860670-4b27b573-e004-4738-b3d7-e0c8567a24a1.png)


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
![image](https://user-images.githubusercontent.com/30872921/136860785-43e0404a-cdd0-4eb8-b6e6-355df61134df.png)
Renderizar el componente principal 
Importar el contendor en el archivo index.js
Vamos a utilizar el componente para que se convierta en elemento usándolo como etiqueta 

![image](https://user-images.githubusercontent.com/30872921/136860828-068e86a1-5494-407e-9b24-2bde4820a629.png) 

9.	Crear el componente de las tarjetas

![image](https://user-images.githubusercontent.com/30872921/136861013-8c235036-36f9-4b76-9484-de03aaf52708.png)

Renderizar el componente Cards.jsx en el contendor 

![image](https://user-images.githubusercontent.com/30872921/136861133-fd5b04c9-9b0a-44f4-954f-6238058b95c1.png)

10.	Crear una carpeta con el nombre assets, para archivos estáticos o de prueba 
11.	Crear una data de prueba data.json

![image](https://user-images.githubusercontent.com/30872921/136861157-3a9d4060-2c2c-46d8-bcc6-0b9c9fac49c7.png)

En la data.json vamos a usar la estructura de un json server

![image](https://user-images.githubusercontent.com/30872921/136861186-1155ce2e-63ba-4178-b438-14d3c36a89b7.png)

Instalar la dependencia json server https://www.npmjs.com/package/json-server  `npm i json-server`
Ejecutar la data con el siguiente comando por medio del servidor de json server <br/>
`json-server --watch ./assets/db.json --port 3004`

![image](https://user-images.githubusercontent.com/30872921/136861248-1b7735f2-b320-4128-bfc6-06ab87a40476.png)

En la dirección asignada podemos consumir los datos de forma temporal mientras en servidor este encendido 
En el contendor principal vamos a consumir nuestra películas por medio de un fetch
 
![image](https://user-images.githubusercontent.com/30872921/136861324-3b7f0e7e-f7e3-438d-8997-6da9eec08a2f.png)

![image](https://user-images.githubusercontent.com/30872921/136861358-ddf262fb-6ee1-418a-8b7f-bcad85603dc3.png)

Crear un estado para almacenar la información de las películas, el estado es un objeto que nos permite guardar información con la habilidad de mutar cuando su información cambie 
 
![image](https://user-images.githubusercontent.com/30872921/136861378-4a8772bc-3509-4e8f-8c81-dcbf3d3f6d2f.png)

Para asignarle la información debemos ejecutar una función que permite que el estado se actualice 

![image](https://user-images.githubusercontent.com/30872921/136861400-08b73a77-237e-42c3-bb17-fd7830751366.png)

Como ejemplo vamos a recorrer los datos en el contendor

![image](https://user-images.githubusercontent.com/30872921/136861428-b209d14c-5ee6-40e8-8805-491f24bea53b.png)

Como podemos ver el estado fue actualizado de forma correcta, por ende podemos recorrer las películas 
Vamos a enviar la información del state al componente Card.jsx por medio de props
 
![image](https://user-images.githubusercontent.com/30872921/136861475-19b394bc-d1f9-4b97-acb8-90fb73135bf6.png)

Todos los componentes usan state y props por defecto, por tal motivo las invocamos y consumimos la información 

![image](https://user-images.githubusercontent.com/30872921/136861499-7f11fad0-d7c2-4390-8180-26027350a5da.png)

Para desestructurar la informacion de los props hacemos lo siguiente

![image](https://user-images.githubusercontent.com/30872921/136861531-45dbe87f-26a0-43d6-9fb8-0423e3267e9b.png)

Agregar estilos del marco de trabajo Bootstrap, vamos a utilizar bootswatch que es una librería de bootstrap
`npm install bootswatch`

importar los estilos <br/>
`import 'bootswatch/dist/solar/bootstrap.min.css' `

![image](https://user-images.githubusercontent.com/30872921/136861593-70715f53-c769-4af7-8b2b-ff1e9e3aab06.png)

Resultado: Ya tenemos estilos de Bootstrap, vamos a organizar las películas 
 
![image](https://user-images.githubusercontent.com/30872921/136861704-948103cc-4e2f-4cdb-a1e1-f2fcf8658966.png)

Estilos asignados
 
![image](https://user-images.githubusercontent.com/30872921/136861736-4bff0ba5-58cd-40cf-85d5-2ecc934dca98.png)

Resultado

![image](https://user-images.githubusercontent.com/30872921/136861771-099d0706-9c5d-46f0-9838-76a52030c00f.png)

Consumir Api: <br/>
Ir a https://www.omdbapi.com/ <br/>
Ir a API Key <br/>
Registrarse de forma gratuita <br/>

![image](https://user-images.githubusercontent.com/30872921/136861823-84e1f423-66e6-437c-a92f-bbb78a7d0279.png)

Activar cuenta 

![image](https://user-images.githubusercontent.com/30872921/136861839-ce854ebd-9a02-40fe-b1b8-103ebce3dc98.png)

El Api la vamos a consumir para búsqueda

![image](https://user-images.githubusercontent.com/30872921/136861863-772c2fa2-8cc6-4169-b182-bf0c9e6633a0.png)
 
Resultado

![image](https://user-images.githubusercontent.com/30872921/136861881-e0af258a-d8fc-43eb-923a-b5d86217099d.png)

El estado tiene unos nuevos elementos para controlar la búsqueda de la película y los errores que puedan surgir en la ejecución de la app.

![image](https://user-images.githubusercontent.com/30872921/136861900-e66c5ee8-7a49-46ea-b8c3-66bb93438f29.png)

Agregar el buscador para hacer la búsqueda de forma dinámica
 
![image](https://user-images.githubusercontent.com/30872921/136861930-63cbf9af-0829-4d7b-b6c2-8e99c5751a09.png)

Realizar la función para el evento onSubmit, se hace una nueva actualización al estado y se realiza una nueva petición a el API
 
![image](https://user-images.githubusercontent.com/30872921/136861981-b76010a5-7cd5-4dae-9543-97a8ac6ea0a1.png)

En el componente cards vamos a crear un botón detalle 

![image](https://user-images.githubusercontent.com/30872921/136862025-95bc575c-2cbf-49c5-baee-1d2ca1e196d0.png)


## Crear enrutamiento:
Instalar react-router-dom https://reactrouter.com/ <br/>
`npm i react-router-dom`

Crear una barra de navegación 

![image](https://user-images.githubusercontent.com/30872921/136862063-2ca2f14a-e6ea-4ec3-a587-b46a32dd7bb5.png)

Crear el componente NavBar.jsx

![image](https://user-images.githubusercontent.com/30872921/136862081-b92deb0b-b08a-47c9-9d53-fdd6ec2159c0.png)

Crear un componente de clase 
Agregar el contenido de Bootstrap

![image](https://user-images.githubusercontent.com/30872921/136862104-c4e4995c-4dd7-4a1c-8bae-42ce777304c2.png)

Cuando copiamos elementos puros de HTML React no soporta algunas etiquetas ya que no tiene cierre o su singtaxis en este marco de trabajo se implementa de diferente manera
1.	Buscar todas las eqtiquetas que no tienen cierre y con un / generarle el cierre

![image](https://user-images.githubusercontent.com/30872921/136863660-0e6c6804-a333-43bf-b715-99090a3b5e42.png)

Renderizar el componente en el container, para esto vamos a crear una carpeta llama routers
Y crear un archivo AppRouter.js

![image](https://user-images.githubusercontent.com/30872921/136863685-d79d0baf-97d5-421d-bea2-b5011cc5c3f3.png)

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




