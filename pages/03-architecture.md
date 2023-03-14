# **Decoradores en Angular**

- En TypeScript, los decoradores son funciones especiales que se utilizan para agregar metadatos a las clases, métodos, propiedades y parámetros de una función.

- Los decoradores son una característica muy poderosa de TypeScript y de Angular, ya que permiten agregar funcionalidad a un componente, servicio o directiva sin tener que modificar su código directamente.

- Los decoradores son una forma de modificar el comportamiento de una clase, método o propiedad en tiempo de ejecución, y se utilizan comúnmente en Angular para definir componentes, servicios, directivas y otras construcciones de la plataforma.

- Existen mucho decoradores incorporados en Angular, algunos de ellos son:
  <div class="grid grid-cols-2 gap-4">
    <div>

      - @Component
      - @Injectable
      - @Directive
      - @Pipe

    </div>

    <div>
      
      - @Input
      - @Output
      - @HostListener
      - @HostBinding

    </div>
  </div>

---

# **Inyección de dependencias en Angular**

- La inyección de dependencias es un patrón de diseño que se utiliza para proporcionar objetos o instancias de clases a una clase que los necesita.
- En Angular, la inyección de dependencias se utiliza para proporcionar servicios, componentes y otras dependencias a los componentes que los necesitan.

- En Angular, se utiliza la inyección de dependencias para evitar la creación de objetos de forma manual en los componentes y servicios, lo que puede llevar a un código desordenado y difícil de mantener.

- En Angular, permite la creación de objetos de manera automatizada y así se asegura que cada objeto pueda tener la misma instancia en toda la aplicación.

- Un ejemplo de inyección de dependencias en Angular es cuando se inyecta un servicio en un componente. Para hacerlo, se define el servicio como una dependencia del componente en el constructor de la clase del componente.

---

# **Componentes**

- Los componentes son los componentes básicos de una aplicación Angular.
- Son responsables de gestionar la UI (User Interface) y las interacciones de los usuarios.
- Cada componente consta de tres partes: una clase de TypeScript, una plantilla HTML y una hoja de estilo CSS.
- Los componentes pueden comunicarse entre sí a través de entradas y salidas.

**app.component.ts**

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "My App";
}
```

---

**app.component.html**

```html
<h1 class="title">{{ title }}</h1>
```

**app.component.css**

```css
.title {
  color: blue;
}
```

---

# **Servicios**

- Los servicios se utilizan para compartir datos y funciones entre diferentes partes de una aplicación Angular.
- Son objetos singleton que se pueden inyectar en componentes, directivas y otros servicios.
- Los servicios se pueden utilizar para tareas como la obtención de datos de un servidor, la gestión de la autenticación de usuarios y el registro.

```typescript
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MyService {
  data = ["item 1", "item 2", "item 3"];

  getData() {
    return this.data;
  }
}
```

---

# **Pipes**

- Los pipes se utilizan para transformar el valor de una expresión en un formato deseado antes de mostrarla en la vista.
- Hay dos tipos de pipes en Angular: pipes integrados y pipes personalizados.
- Los pipes integrados proporcionan funcionalidades comunes como el formateo de fecha, el formateo de números, el ordenado , la conversión de texto a mayúsculas o minúsculas, entre otros.
- Los pipes personalizados permiten crear funcionalidades específicas para una aplicación en particular.

**app.component.html**

```html
...
<p>{{ date | date }}</p>
<p>{{ price | currency }}</p>
```

---

**app.component.ts**

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  //...
  date = new Date();
  price = 10.5;
}
```

---

# **Directivas**

- Las directivas se utilizan para agregar comportamiento y modificar el DOM (Document Object Model) de una aplicación Angular.
- Hay dos tipos de directivas en Angular: directivas estructurales y de atributos.
- Las directivas estructurales modifican la estructura del DOM agregando o eliminando elementos, mientras que las directivas de atributos modifican el comportamiento o la apariencia de los elementos.
- Las directivas se pueden usar para agregar animaciones, cambiar el estilo de los elementos o mostrar u ocultar elementos de forma condicional.
- Angular viene con varias directivas integradas, como ngIf, ngFor, ngStyle, entre otras.

**app.component.html**

```html
...
<div *ngIf="isLoggedIn()">Bienvenido {{username}}!</div>
<div *ngIf="!isLoggedIn()">Por favor inicia sesión.</div>
```

---

**app.component.ts**

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  //...
  username: string = "Juan";
  isLoggedIn(): boolean {
    return true; // En una aplicación real esto sería evaluado dinámicamente
  }
}
```

---

# **Módulos**

- Los módulos se utilizan para organizar y encapsular componentes, servicios y directivas relacionados en una unidad cohesiva.
- Cada aplicación Angular tiene al menos un módulo raíz, que es el punto de partida de la aplicación.
- Los módulos ayudan a mantener el código organizado, facilitan la reutilización del código en diferentes partes de la aplicación y mejoran el rendimiento mediante la carga diferida del código cuando es necesario.

```typescript
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ProductListComponent } from "./product-list.component";
import { ProductService } from "./product.service";

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  declarations: [AppComponent, ProductListComponent],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
```
