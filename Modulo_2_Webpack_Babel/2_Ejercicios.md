# CONFIGURACIÓN DE UN PROYECTO CON WEBPACK Y BABEL 

***A continuación, veamos un ejemplo práctico donde se apliquen los conceptos de webpack y babel.***

1. Crear un proyecto para tenerlo versionado (GitHub) preferiblemente (Si desean pueden crear solo el proyecto y abrirlo directamente con VSC que se encuentra en el paso # 3). El repositorio debe tener un archivo readme.md para poderlo clonar
 
![image](https://user-images.githubusercontent.com/30872921/134935404-d090a12d-d261-4bcd-b159-b9a3455469dc.png)

2. Se debe clonar el proyecto en algún directorio 
  - Extrar el url del repositorio 
  
  ![image](https://user-images.githubusercontent.com/30872921/134935675-1575f543-3997-4a58-81d8-8a372f658e65.png)
  
  - Clonar 
  
  ![image](https://user-images.githubusercontent.com/30872921/134936071-76de0c19-7485-4890-8f5f-a8377d80f236.png)

3. Abrimos el proyecto con Visual Studio Code 

 ![image](https://user-images.githubusercontent.com/30872921/134936158-9d11193b-df0b-402e-83ae-8ad569d8c3a8.png)

4. Procedemos a crear un proyecto NPM con el fin de instalar las dependencias necesarias para que funcione webpack y babel. 
   `npm init -y`
   ![image](https://user-images.githubusercontent.com/30872921/134936533-cec7e93d-1c15-4b7d-8c29-2ffd1d80c3e4.png)

    Al insertar el comando y dar Enter, se crea un archivo `package.json` donde queda registrado toda la información del proyecto
    
   ![image](https://user-images.githubusercontent.com/30872921/134936709-04207906-16f3-4032-a778-a7c20690131a.png)


5. Crear la siguiente estructura de archivos y carpetas, los cuales servirán para configurar webpack y babel.
```
/src
/src/app
/src/index.html
/src/app/index.js
/src/app/comantario.js
/src/app/style.css
/.babelrc
/.gitignore
/webpack.config.js
```
![image](https://user-images.githubusercontent.com/30872921/134937330-dce406b4-1bb3-4495-965c-2bea70cd5b5a.png)

## Instalamos los siguientes módulos de mediante NPM.
yarn add webpack webpack-cli @babel/core @babel/cli @babel/preset-env @babel/polyfill babel-loader html-webpack-plugin webpack-dev-server

***webpack:*** webpack es un paquete de módulos. Su objetivo principal es agrupar archivos JavaScript para su uso en un navegador, pero también es capaz de transformar, agrupar o empaquetar casi cualquier recurso o activo. 

***webpack-cli:*** webpack CLI proporciona un conjunto flexible de comandos para que los desarrolladores aumenten la velocidad al configurar un proyecto webpack personalizado. A partir de webpack v4, webpack no espera un 
archivo de configuración, pero a menudo los desarrolladores desean crear una configuración de paquete web más personalizada en función de sus casos de uso y necesidades. La CLI de webpack aborda estas necesidades al proporcionar 
un conjunto de herramientas para mejorar la configuración de la configuración personalizada de webpack.:  

***@babel/core:*** es una cadena de herramientas que se utiliza principalmente para convertir el código ECMAScript 2015+ en una versión de JavaScript compatible con versiones anteriores en navegadores o entornos actuales y anteriores.
Estas son las principales cosas que Babel puede hacer por usted:

***@babel/cli:*** Babel viene con una CLI incorporada que se puede usar para compilar archivos desde la línea de comandos.
Además, varios scripts de puntos de entrada viven en el paquete de nivel superior en @babel/cli/bin. Hay un script de utilidad ejecutable por shell, babel-external-helpers.js, y el script principal de Babel cli, babel.js.  

***@babel/preset-env:*** @babel/preset-env es un preajuste inteligente que le permite utilizar el último JavaScript sin necesidad de microgestión de qué transformaciones de sintaxis (y opcionalmente, polyfills del navegador) son necesarios para
su (s) entorno (s) objetivo. ¡Esto te hace la vida más fácil y los paquetes de JavaScript más pequeños! 

***@babel/polyfill:*** Babel incluye un polyfill que incluye un tiempo de ejecución de regenerador personalizado y core-js.
Esto emulará un entorno ES2015 + completo y está destinado a ser utilizado en una aplicación en lugar de una biblioteca / herramienta. Este polyfill se carga automáticamente cuando se usa babel-node.

***babel-loader:*** Este paquete permite transpilar archivos JavaScript utilizando Babel y webpack.

*Nota:* Los problemas con la salida deben informarse en el rastreador de problemas de Babel.
***html-webpack-plugin:*** Complemento que simplifica la creación de archivos HTML para servir sus paquetes.

***webpack-dev-server:*** Use webpack con un servidor de desarrollo que proporcione recarga en vivo. Esto debe usarse solo para el desarrollo.
Utiliza webpack-dev-middleware debajo del capó, que proporciona acceso rápido en memoria a los activos del paquete web.

![image](https://user-images.githubusercontent.com/30872921/134939213-4b82fa81-7d8f-490a-abad-743285feee03.png)

7. Una vez se complete la instalación de estos módulos, se crea una carpeta /node_modules, en la cual se descargan y almacenan estos módulos para ser utilizados en el proyecto.  

![image](https://user-images.githubusercontent.com/30872921/134940019-e0d45ddf-f5cd-46fd-a7de-b44d85869f6d.png)

8. También se puede visualizar el archivo /package.json donde se adicionan las dependencias  con  las versión más estable que se pueda instalar en la maquina donde se corrió la instalación. 

![image](https://user-images.githubusercontent.com/30872921/134940389-26d9f51b-5779-4373-83a8-d84844abb6db.png)

9. Debido a que estas dependencias quedan configuradas en el archivo /package.json, la carpeta de /node_modules  no puede ser sincronizada en el repositorio, debido a su peso y que en cada maquina puede presentar diferentes instalaciones, ya sea por su sistema operativo (Windows, Linux y todas sus versiones, Mac OS, etc), entre otras factores. Por ello se debe adicionar este directorio en el archivo /.gitignore . 

/.gitignore:  En el gitignore se especificarán todas las rutas y archivos que no se requieren y con ello, el proceso de control de versiones simplemente ignorará esos archivos. Es algo tan habitual que no debíamos de dejarlo pasar en el Manual de Git.

![image](https://user-images.githubusercontent.com/30872921/134940491-5110c61a-fa08-4790-812f-ca9b75745907.png)

10. Procedemos a realizar las configuraciones pertinentes de webpack, para ello adicionaremos el siguiente código JS en el archivo / webpack.config.js.
```
const path = require('path');
module.exports = {
  entry: './src/app/index.js',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
};
```
En este archivo se deben adicionar las reglas y demás configuraciones de webpack, por ahora solo se compilara el archivo /src/app/index.js en un archivo app.bundle.js en la carpeta build.

![image](https://user-images.githubusercontent.com/30872921/134940645-a81c0c01-a197-4023-a39c-e13d10f013f9.png)

11. Una vez se almacena el archivo /webpack.config.js se puede compilar el proyecto, para efectos de prueba adicionemos algún ejemplo en el archivo /src/app/index.js.

![image](https://user-images.githubusercontent.com/30872921/134940854-5d1eeb39-a2a6-44cb-b283-87ac9f551041.png)

Luego procedemos a ejecutar el siguiente comando para compilar el proyecto.<br/>
 `npx webpack`
 
 ![image](https://user-images.githubusercontent.com/30872921/134941030-ccd2b7e6-2b60-44f7-89a5-5a8b5c4bbcc9.png)
 
 Una vez se compila el proyecto, se puede visualizar el directorio /build. Allí se encuentra de momento únicamente /build/app.bundle.js , archivo donde se modifica y comprime el contenido de los archivos  JS configurados en el archivo  /webpack.config.js.
 
12. El mensaje que aparece, indica que el comando npx webpack, se puede ejecutar en diferentes ambientes, con lo cual se logra que la compresión del proyecto cambie, por defecto la compresión o compilado del proyecto se hace en modo producción, pero también se puede hacer en modo desarrollo; los siguientes comandos son los que se poden emplear para cambiar la compilación:
```
module.exports = {
  mode: 'development',
};
```

![image](https://user-images.githubusercontent.com/30872921/134942015-7932a953-2126-408e-bde9-e83a402b6a4f.png)

En este caso se puede ver que el archivo /build/app.bundle.js cambia la apariencia, debido a que se está ejecutando en modo desarrollo.

![image](https://user-images.githubusercontent.com/30872921/134942156-b9cc451a-d100-48ca-a085-5050af362644.png)


13. A continuación, probaremos algunas configuraciones que se pueden realizar con webpack, para ello se configurará el plugin html-webpack-plugin, con este se simplificara la creación del archivo /src/index.html, una vez se compile el proyecto el archivo queda en la ruta /build/index.html, tal como se especifica en el archivo de configuración de webpack. Se puede profundizar en la página de webpack, donde explican la configuración de un plugin.
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
```
module.exports = {
  entry: './src/app/index.js',
  mode: 'development',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new HTMLWebpackPlugin({template: './src/index.html'})
  ]
};
```

![image](https://user-images.githubusercontent.com/30872921/134942653-c4408820-5a59-46e3-82a7-84c50a0ab429.png)

![image](https://user-images.githubusercontent.com/30872921/134942721-088b4729-6789-4962-86a6-ed5b074e6820.png)

14. Una vez se adiciona algún ejemplo en la página /src/index.html, la salida adiciona automáticamente el archivo JS, como se evidencia a continuación. 

![image](https://user-images.githubusercontent.com/30872921/134942790-23543bac-0af5-47cc-afd7-cadb53eca843.png)

![image](https://user-images.githubusercontent.com/30872921/134942869-b81f7ce3-482c-4a32-bd9a-8956bea05136.png)


15. También se puede comprimir los archivos html, para los cual se debe cambiar una configuración en el archivo de configuración de webpack. Dicha configuración se corresponde al plugin html-webpack-plugin, la cual emplea mitificación sobre los archivos que se hayan configurado, esto se puede ver en el apartado del repositorio, donde se encuentra la documentación de este complemento.  Para ello se adiciona el siguiente JSON como parámetro al momento de instanciar un objeto de este plugin. 
```
minify:  {
  collapseWhitespace: true,
  removeComments: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  useShortDoctype: true
}
```
![image](https://user-images.githubusercontent.com/30872921/134942986-52abc7cb-ad9e-4db7-b736-2749cdc82062.png)

![image](https://user-images.githubusercontent.com/30872921/134943077-8f7b8071-91c3-4f2e-ab23-02d1f1b89020.png)

16. Se puede abrir la página directamente desde el proyecto y se observa que no existe ningún error. 

![image](https://user-images.githubusercontent.com/30872921/134943170-2ec6139a-2ec6-4641-aa45-70cd94bd3e8b.png)

17. A continuación, veremos algunas ventajas que tiene WebPack, respecto a la sintaxis moderna de JS. Para ello definiremos una clase llamada Comentario, definida en la ruta /src/app/comentario.js, de igual forma se puede exportar la clase e importarlo desde otros archivos.  Los siguientes ejemplos se definen en cada uno de los archivos que estamos creando.
*/src/app/comentario.js*

```

class Comentario{
    
    obtenerComentarios(){
        return [];
    }
}
export default Comentario;
```
![image](https://user-images.githubusercontent.com/30872921/134943674-67207d07-312a-4386-bac4-337d8547b3a2.png)

*/src/app/index.js*

```
import Comentario from './comentario';

const com = new Comentario();
console.log(com.obtenerComentarios());
```

![image](https://user-images.githubusercontent.com/30872921/134943750-6773942b-3f38-4e3f-9dda-e0f38ba24abe.png)

Una vez se compile nuevamente el proyecto, con el comando npx webpack podemos visualizar la salida en el navegador y notaremos que estamos usando la sintaxis nueva de JS y no tendremos problemas como lo vimos en los inicios del curso.

![image](https://user-images.githubusercontent.com/30872921/134943939-a782cbc7-baa9-4344-835e-d994190d2cd1.png)

18. A continuación, veamos algunas mejoras que podemos hacer al código, consumiendo un servicio que se encuentra en un sitio [eonet](https://eonet.sci.gsfc.nasa.gov/how-to-guide), sitio que permite consumir datos de prueba para ensayar nuestras aplicaciones.  En este caso consumiremos el api de categorías con la siguiente URL: https://eonet.sci.gsfc.nasa.gov/api/v3/categories. Para ello se empleara el async/await y la función fetch para obtener los datos.

![image](https://user-images.githubusercontent.com/30872921/134944257-b5d2ed11-d48f-47f4-a4de-bb93901cc40a.png)

![image](https://user-images.githubusercontent.com/30872921/134944283-557a241c-b710-4dea-a832-8f93fa22cbea.png)

![image](https://user-images.githubusercontent.com/30872921/134944324-90485887-210d-4463-98c2-83fd6cfc5843.png)

19. A continuación, configuraremos un servidor de desarrollo con otro de los complementos que instalamos previamente, esta dependencia es webpack-dev-server con esto lograremos tener un servidor que este escuchando los cambios que se realizan en el proyecto webpack. Para ello se puede ejecutar el siguiente comando: 
`npx webpack serve`

![image](https://user-images.githubusercontent.com/30872921/134944480-a8036077-2df3-4554-b854-1f7bfe17fd28.png)

De esta manera se ejecuta un servidor que está escuchando en el puerto 8080, para ver la salida entramos a la siguiente ruta http://localhost:8080. Con esta dependencia se logra que cualquier cambio que hagamos en el proyecto, se visualice inmediatamente, es decir, que no tenemos que recompilar manualmente.

![image](https://user-images.githubusercontent.com/30872921/134944676-96e35ad0-cd23-4814-b8f5-df553318db2a.png)

![image](https://user-images.githubusercontent.com/30872921/134944712-2ca814fd-1faf-4ccd-9424-a01714b9eac2.png)

 De igual forma, se puede realizar algunas configuraciones en el archivo webpack.config.js, que apliquen para la configuración del servidor, para ello realizamos la siguiente configuración.
 
 ![image](https://user-images.githubusercontent.com/30872921/134944758-6513ea77-1994-4014-80f2-ef660ffe94d3.png)

20. A continuación, usaremos otro plugin, el cual servirá para importar archivos css dentro de los archivos JS que se compilen, dicho plugin es 	 y style-loader, para su instalación ejecutaremos en consola el siguiente comando para instalar dicha dependencia:  npm i css-loader  style-loader

![image](https://user-images.githubusercontent.com/30872921/134945645-597d3d8a-44fb-4f62-b972-11f21dd11daf.png)

21. Luego se deben agregar las siguientes reglas al archivo webpack.config.js, con lo cual, se indica con una expresión regular, que teste los archivos que terminen en .css y en dichos casos use las dos dependencias instaladas anteriormente.  El siguiente código JSON, es el que se debe agregar en el archivo. 
``` 
module:{
     rules: [
         {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],         
}
     ]
  }
```

![image](https://user-images.githubusercontent.com/30872921/134946708-af85c239-6fe4-45e6-aeb6-8dedcb80e304.png)


22. A continuación, creamos el siguiente archivo css /src/app/style.css, el cual lo importaremos desde nuestro archivo JS. 

![image](https://user-images.githubusercontent.com/30872921/134946830-c81d6cbf-af97-46fc-bd1e-5e25ff789217.png)

![image](https://user-images.githubusercontent.com/30872921/134946957-774aadb8-e990-4e9f-bd96-988c9cec7aa3.png)

23. Volvemos a ejecutar los comandos para compilar y desplegar el servidor:
```
 npx webpack -d
	npx webpack-dev-server
```
![image](https://user-images.githubusercontent.com/30872921/134947361-2c9bf010-2c50-4d83-9895-671de7a5a94a.png)


24. A continuación, separaremos los archivos JS y CSS, debido a que al compilar el proyecto todo el código CSS y JS queda dentro del archivo /build/ app.bundle.js, de este modo se logra que no todo quede concentrado en un único archivo. Para ello, se debe usar el siguiente plugin para realizar extracción de css y de este modo poder lograr una separación en la compilación del proyecto, dicho plugin es mini-css-extract-plugin, por lo cual correremos el siguiente comando para lograr instalar este plugin:
`npm install mini-css-extract-plugin`

mini-css-extract-plugin: Este complemento extrae CSS en archivos separados. Crea un archivo CSS por archivo JS que contiene CSS. Es compatible con la carga a pedido de CSS y SourceMaps. Se basa en una nueva característica de webpack v4 (tipos de módulos) y requiere webpack 4 para funcionar.

En comparación con el extracto-text-webpack-plugin:
- Carga asíncrona
- No duplicar la compilación (rendimiento)
- Más fácil de usar
- Específico para CSS

![image](https://user-images.githubusercontent.com/30872921/134947804-1bea7655-df8a-4579-96d7-86249445a402.png)

25. Luego debemos especificar la configuración en el archivo de configuración de WebPack. Para esto, debemos adicionar el siguiente fragmento de código JS.
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
```
module.exports = {
  plugins: [
  	  new MiniCssExtractPlugin({
          filename: 'app.bundle.css'
      }),
  ],
  module:{
     rules: [
         {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
         }
     ]
  }, ,
};
```
![image](https://user-images.githubusercontent.com/30872921/134948351-265ba961-772a-4511-80da-5853717d9ac6.png)

![image](https://user-images.githubusercontent.com/30872921/134948560-3a4ea543-4c88-44d0-ae3c-401d39946f87.png)

![image](https://user-images.githubusercontent.com/30872921/134948773-0fed3975-41d0-4495-9225-0b1598e046a2.png)

![image](https://user-images.githubusercontent.com/30872921/134948724-d6cc7156-599f-47fc-88bb-b43d481a7de1.png)

26. Paso seguido volveremos a compilar el proyecto con el fin de evidenciar la extracción del archivo CSS en la carpeta build.

![image](https://user-images.githubusercontent.com/30872921/134949064-efb15582-5f77-4609-bb15-ec8031e298f7.png)

![image](https://user-images.githubusercontent.com/30872921/134949117-6c328d0d-7d28-40e4-8550-0fba5612137a.png)

27. Podríamos asignar mayor orden al proyecto de compilación, indicando la ruta de compresión de los archivos css y js, para ello modificamos el archivo de configuración de WebPack, de modo que las rutas queden la siguiente manera:

- js/app.bundle.js 
- css/app.bundle.css

![image](https://user-images.githubusercontent.com/30872921/134949388-f77bf0a6-d5c8-4e89-92f2-0d076c52ee41.png)

![image](https://user-images.githubusercontent.com/30872921/134949463-00239cf3-4ef6-441d-a370-1a58538e358e.png)

28. Borre la carpeta de build y vuelva compilar el proyecto y veremos la nueva estructura en el proyecto.

![image](https://user-images.githubusercontent.com/30872921/134949511-d277c5be-3fab-4c8a-a748-e56296332e7f.png)

![image](https://user-images.githubusercontent.com/30872921/134949540-dab8d4c5-dc95-42be-9627-2a724240cc75.png)

29. A continuación, se configurará BABEL en el proyecto para ver su funcionamiento. Para ello configuraremos el archivo .babelrc (la configuración de este archivo se puede encontrar en su sitio). Iniciaremos configurando el archivo de configuración de webpack, agregando la siguiente regla para que verifique todos los archivos JS y convierta el código que no es reconocible por los diferentes navegadores.

 ```
 {
     test: /\.js$/,
     loader: 'babel-loader',
 }
```
![image](https://user-images.githubusercontent.com/30872921/134949680-2de83ca0-57b9-48a2-89b9-0621e294bc49.png)


30. Luego adicionamos la siguiente configuración en el archivo .babelrc
```
{
	"presets":["@babel/preset-env"]
}
```

![image](https://user-images.githubusercontent.com/30872921/134949838-dd36e5aa-3d79-41da-a8f2-34ae55013c78.png)

31. Si ejecutamos el proyecto, nos debe aparecer el siguiente error, debido a que se están usando sintaxis nuevas y se debe requerir el módulo @babel/polyfill, por lo cual se debe agregar en el archivo de configuración de webpack.

![image](https://user-images.githubusercontent.com/30872921/134949927-fba84771-ecaa-4412-b326-0d196055c016.png)

![image](https://user-images.githubusercontent.com/30872921/134949952-dde47e77-3fee-4217-a992-e82a1146a835.png)

32. Al ejecutar nuevamente, veremos que el proyecto funciona correctamente.
 
![image](https://user-images.githubusercontent.com/30872921/134950004-c7f891cc-8990-4fcb-bd39-d13a4b9dc362.png)

33. Para los errores que presenta IE con fetch, debemos instalar la siguiente dependencia Al ejecutar nuevamente
`npm i whatwg-fetch`

34. Luego la debemos importar el archivo donde empleemos la función fetch. 
import {fetch as fetchPolyfill} from 'whatwg-fetch' 

![image](https://user-images.githubusercontent.com/30872921/134950151-2d96827e-306e-4f8a-8d31-0d74e3d492f2.png)

Por último, automatizaremos la tarea de ejecutar los comandos que debemos usar constantemente para compilar y desplegar la aplicación. Para ello modificaremos el archivo package.json.
  "scripts": {
    "dev" : "webpack-dev-server --open",
    "build" : "webpack --mode development ",
    "produccion": "webpack --mode production "
  },

![image](https://user-images.githubusercontent.com/30872921/134950281-ac3500b7-f7c5-426c-ba4b-5130891b94e7.png)

Ejecutamos el comando en la consola npm run dev o npm run build.

![image](https://user-images.githubusercontent.com/30872921/134950342-75a68425-5217-48f6-a036-6c10ef326dfe.png)

![image](https://user-images.githubusercontent.com/30872921/134950471-964300cf-2ba3-4c5e-89ec-ce79a22e90b7.png)


## SITIOS DE CONSULTA Y PROFUNDIZACIÓN
- https://babeljs.io/
- https://webpack.js.org/
- https://www.npmjs.com/
- https://nodejs.org/
- https://github.com/devagiloscarmesa/webpack-project-tutorial.git




