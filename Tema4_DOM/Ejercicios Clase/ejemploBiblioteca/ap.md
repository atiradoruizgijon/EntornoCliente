## Notas del DOM

Vemos que nos devuelve el html de las imagenes, enlaces, todo en arrays.

output de la consola:

```javascript
document.images
HTMLCollection { 0: img.w-16.h-16.rounded, 1: img.w-16.h-16.rounded
, length: 2 }
​
0: <img class="w-16 h-16 rounded" src="foto1.jpg" height="100" width="80" alt="Foto Libro 1">​
1: <img class="w-16 h-16 rounded" src="foto2.jpg" height="100" width="80" alt="Foto Libro 2">
​
length: 2
​
<prototype>: HTMLCollectionPrototype { item: item(), namedItem: namedItem(), length: Getter, … }

document.images.length
2
document.images[0]
<img class="w-16 h-16 rounded" src="foto1.jpg" height="100" width="80" alt="Foto Libro 1">
```

Aquí podemos ver el las hojas de estilo que carga:

```javascript
document.styleSheets.length
1
document.styleSheets
StyleSheetList [ CSSStyleSheet http://localhost/EntornoCliente/Tema4_DOM/Ejercicios%20Clase/ejemploBiblioteca/styles.css ]
```

Los enlaces:

```javascript
document.links
HTMLCollection { 0: a.text-blue-500.hover:underline.mr-4, 1: a.text-blue-500.hover:underline.mr-4, 2: a.text-blue-500.hover:underline
, length: 3 }

document.links[0]
<a class="text-blue-500 hover:underline mr-4" href="https://www.amazon.es">

```

Los formularios:

```javascript
document.forms
HTMLCollection { 0: form.bg-white.p-6.rounded.shadow-md.max-w-md.mx-auto
, length: 1 }

document.forms[0]
<form class="bg-white p-6 rounded shadow-md max-w-md mx-auto">
```

Podemos coger elementos por ID:

```javascript
document.getElementById("txtNombre");
<input id="txtNombre" class="mt-1 block w-full px-4 p…e focus:border-blue-500" type="text" placeholder="Introduce tu nombre">
```

Lo que nos devuelve realmente no es html, si no un objeto.

Podemos hacer incluso que marque opciones o checkbox:

```javascript
document.getElementById("chkSocioBiblioteca").checked = true
true 
```

Podemos escoger por las etiquetas HTML tambien.
Aqui recojo todas las tablas en un array (en este caso solo una):

```javascript
document.getElementsByTagName("table");
HTMLCollection { 0: table#tblLibros.min-w-full.border, length: 1, … }
```

Con este selector puedes seleccionar por ID con '#' y con
otras formas con otros caracteres:
```javascript
document.querySelector("#tblLibros");
<table id="tblLibros" class="min-w-full border">
```