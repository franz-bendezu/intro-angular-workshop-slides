# **Introducción a las plantillas:**

- Las plantillas en Angular se utilizan para definir la UI (interfaz de usuario) de una aplicación.
- Están escritos en HTML y pueden contener sintaxis y directivas específicas de Angular.
- Las plantillas se pueden definir en línea o en un archivo separado.

```html
<app-example></app-example>
```

---

# **Enlace de propiedad:**

- El enlace de propiedad se utiliza para establecer el valor de la propiedad de un elemento en la plantilla.
- Le permite vincular el valor de una propiedad de componente a una propiedad de elemento, como el valor de un campo de entrada o la fuente de una imagen.
- El enlace de propiedad se indica mediante corchetes (`[]`) en la plantilla.

```html
<input [valor]="exampleProperty" />
```

---

# **Enlace de eventos**

- El enlace de eventos se usa para manejar eventos de usuario, como clics o pulsaciones de teclas, en la plantilla.
- Le permite vincular un evento en un elemento a un método de componente, que se ejecuta cuando se activa el evento.
- El enlace de eventos se indica entre paréntesis (`()`) en la plantilla.

```html
<button (click)="exampleMethod()">¡Haz clic en mí!</button>
```

---

# **Enlace bidireccional:**

- El enlace bidireccional se utiliza para vincular una propiedad de componente con el valor de un elemento de entrada, de modo que los cambios en el componente o en la plantilla se sincronicen automáticamente.
- Te permite actualizar el modelo y la vista simultáneamente, sin tener que escribir código adicional.
- El enlace bidireccional se indica mediante una combinación de corchetes y paréntesis (`[()]`) en la plantilla.

```html
<input [(ngModel)]="exampleProperty" />
```
