# Taboga - Basado en Twitter Bootstrap

Sistema de front-end para el desarrollo de los aplicativos de uso interno y público del IFARHU.

## Acerca del nombre

Taboga, conocida también como Isla de las Flores, es una Isla ubicada en el Pacífico panameño, a unos 20 km. de la Ciudad de Panamá. Fue descubierta en el Siglo XVI por el navegante español Vasco Nuñez de Balboa.

Taboga tiene una historia muy colorida por el paso de muchas culturas por sus tierras, influencias de españoles, franceses, británicos y estadounidenses.

[Conocer más sobre la Isla de Taboga](https://es.wikipedia.org/wiki/Isla_de_Taboga).

## Instalación

* Clonar el proyecto **Nuget-Taboga** al *escritorio*.
* Iniciar el **Visual Studio** y el proyecto deseado donde se va instalar el **Taboga**.
* Al momento de que el proyecto esté abierto, seleccionar la opción **herramientas** de la barra de navegación superior.
* Ir a la opción de **Adminstrador de Paquetes NuGet**, luego opciones de **Configuración del Administrador de Paquetes**.
* En la pestaña de **Orígenes de paquete**, se debe agregar un nuevo origen de paquetes disponible, en el **signo de ('+').**
* Clickear en el **botón de (...)** y especificar la carpeta de **Taboga** encontrada en el **escritorio.**
* Se debe colocar un nombre significativo para identificar este origen de paquete.
* Dar click en **Aceptar**.
* Nuevamente se escoge **Herramientas**, luego **Administrar paquetes NuGet para la solución...**.
* En la ventana emergente, se debe escoger la pestaña de **Examinar**, luego cambiar a mano derecha **Origen del Paquete:** al nombre del paquete que se especificó en pasos anteriores.
* Escoger el paquete que nombró abajo, luego seleccionar en el checkbox el proyecto donde se va instalar Taboga y clickear instalar.
* Al instalarse el Taboga, dirigirse al explorador de soluciones, y ubicar el archivo **package.json** y ejecutar ctrl+s para ejecutar el **npm install**.
* Luego se procede al **bower.json**, en donde se hace ctrl+s nuevamente para ejecutar el **bower install**.
* Luego abrir el archivo **gulpfile.js**, y seleccionarlo en el **explorador de soluciones** con click derecho, y escoger la opción **Explorador del Ejecutor de Tareas**.
* En la ventana emergente se debe ver las tareas que están asignadas al **gulpfile.js**, posteriormente hacer click derecho en la tarea **run_all** y escoger **ejecutar**.
* Esto efectuará un **gulp** a nivel del proyecto, que por consecuencia instala las dependencias faltantes al igual que compila los archivos de **Taboga**. **.SASS* a css y *.js* en sus versiones .min respectivamente

## Componentes adicionales

Adicionalmente a los componentes con que ya cuenta Twitter Bootstrap, Taboga tiene otros componentes propios y los cuales son instalados como dependencias. Dichos componentes son los siguientes:

* jQuery Sparkline
* Select2
* Select2 Bootstrap
* Font Awesome
* Google Web Fonts

## Issues
1. Al correr el **bower.json** se produce: ECMDERR Failed to execute "git clone https:… exit code of #-532462766

Esto es un error relacionado al git que está bundled con el Visual Studio 2015, se debe descargar el git desde la fuente original, y asociarla a su visual studio.

### Trouble Shooting
* [Descargue Git](https://git-scm.com/downloads) desde su pagina web oficial.
* Instale el git segun indique el wizard del instalador.
* Abra el proyecto de Visual Studio donde aparece el error indicado.
* Abrir **Herramientas** > **Opciones** desde la barra de navegación superior.
* Ubicar a mano izquierda el tab de **Proyecto y soluciones** luego el tab de **Herramientas web externas**
* Aquí hay que agregar una nueva ubicación para que el Visual Studio, utilize el **binario de git** que se descargo anteriormente.
* Con su explorador escriba git bash, luego click derecho para **abrir ubicación de archivo**, si esto lleva a un **atajo**, simplemente repita este paso hasta que encuentre el **directorio de git**
* Entrar en la carpeta **bin** luego copiar el **path** de este archivo, puede ser algo como **C:\\..AppData\Local\Programs\Git\bin**.
* Devuelta en **visual studio**, haga click sobre el icono de nueva ubicación y agregue el **path** del bin de la carpeta git.
* Accepte los cambios y luego corra su bower.json nuevamente

## Copyright y licencia

Modificaciones realizadas por la Dirección de Tecnología Informática del Instituto para la Formación y Aprovechamiento de Recursos Humanos (IFARHU).

Code and documentation copyright 2011-2015 Twitter, Inc. Code released under [the MIT license](https://github.com/twbs/bootstrap/blob/master/LICENSE). Docs released under [Creative Commons](https://github.com/twbs/bootstrap/blob/master/docs/LICENSE).