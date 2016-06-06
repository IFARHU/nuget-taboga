# Taboga - Basado en Twitter Bootstrap

Sistema de front-end para el desarrollo de los aplicativos de uso interno y público del IFARHU.

## Acerca del nombre

Taboga, conocida también como Isla de las Flores, es una Isla ubicada en el Pacífico panameño, a unos 20 km. de la Ciudad de Panamá. Fue descubierta en el Siglo XVI por el navegante español Vasco Nuñez de Balboa.

Taboga tiene una historia muy colorida por el paso de muchas culturas por sus tierras, influencias de españoles, franceses, británicos y estadounidenses.

[Conocer más sobre la Isla de Taboga](https://es.wikipedia.org/wiki/Isla_de_Taboga).

## Instalación

* Clonar el proyecto **Nuget-Taboga** al *escritorio*
* Iniciar el **Visual Studio** y el proyecto deseado donde se va instalar el **Taboga**
* Al momento de que el proyecto esté abierto, seleccionar la opcion **herramientas** de la barra de navegación superior.
* Ir a la opcion de **Adminstrador de Paquetes NuGet**, luego opciones de **Configuración del Administrador de Paquetes**.
* En la pestaña de **Origenes de paquete**, se debe agregar un nuevo origin de paquetes disponible, en el **signo de ('+').**
* Clickear en el **boton de (...)** y especificar la carpeta de taboga encontrada en el **escritorio.**
* Se debe colocar un nombre significativo para identificar este origen de paquete
* Dar click en **Aceptar**.
* Nuevamente se escoge **Herramientas**, luego **Administrar paquetes NuGet para la solución...**.
* En ventana emergente, se debe escoger la pestaña de Examinar, luego cambiar a mano derecha **Origen del Paquete:** al nombre del paquete que se especificó en pasos anteriores.
* Escoger el paquete que nombró abajo, luego seleccionar en el checkbox el proyecto donde se va instalar taboga y clickear instalar.
* Al instalarse el taboga, dirigirse al explorador de soluciones, y ubicar el archivo **package.json** y ejecutar ctrl+s para ejecutar el **npm install**.
* Luego se procede al **bower.json**, en donde se hace ctrl+s para ejecutar el bower install.
* Simplemente se debe guardar el **package.json** y este procede a realizar una serie de instalaciones de dependencias.
* Luego abrir el archivo **gulpfile.js**, y selecionarlo en el **explorador de soluciones** con click derecho, y escoger la opcion **Explorador del Ejecutor de Tareas**.
* En la ventana emergente se debe ver las tareas que estan asignadas al **gulpfile.js**, luego y hacer click derecho en la tarea **run_all** y escoger ejecutar.
* Esto efectuará un gulp a nivel del proyecto, instalando las dependencias faltantes y colocando los compilados de **Taboga**.

## Componentes adicionales

Adicionalmente a los componentes con que ya cuenta Twitter Bootstrap, Taboga tiene otros componentes propios y los cuales son instalados como dependencias. Dichos componentes son los siguientes:

* jQuery Sparkline
* Select2
* Select2 Bootstrap
* Font Awesome
* Google Web Fonts

## Copyright y licencia

Modificaciones realizadas por la Dirección de Tecnología Informática del Instituto para la Formación y Aprovechamiento de Recursos Humanos (IFARHU).

Code and documentation copyright 2011-2015 Twitter, Inc. Code released under [the MIT license](https://github.com/twbs/bootstrap/blob/master/LICENSE). Docs released under [Creative Commons](https://github.com/twbs/bootstrap/blob/master/docs/LICENSE).