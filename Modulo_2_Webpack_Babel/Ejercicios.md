# A continuación, veamos un ejemplo práctico donde se apliquen los conceptos de webpack y babel.
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

