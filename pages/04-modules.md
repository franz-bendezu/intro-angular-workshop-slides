# Introducción to modules

En Angular, los módulos son una forma de organizar la aplicación en diferentes bloques de funcionalidad. Cada módulo está compuesto por un conjunto de componentes, servicios, directivas y pipes que trabajan juntos para proporcionar una funcionalidad específica.

Los módulos se pueden utilizar para dividir una aplicación en diferentes áreas, o para separar características de una aplicación en módulos separados que pueden ser reutilizados en diferentes partes de la aplicación.

# NgModule decorator

El decorador NgModule es un elemento clave en la definición de módulos en Angular. Se utiliza para decorar una clase que define un módulo, y proporciona información sobre los componentes, directivas, pipes y servicios que se incluyen en el módulo.

El decorador NgModule también se utiliza para especificar otros detalles del módulo, como su nombre, las importaciones y exportaciones de otros módulos, y cualquier configuración que sea necesaria para que el módulo funcione correctamente.

## El decorador toma un objeto como argumento con las siguientes propiedades:

- `declarations`: un array de componentes, directivas y pipes que pertenecen al módulo.
- `imports`: un array de módulos que el módulo actual necesita.
- `exports`: un array de componentes, directivas y pipes que el módulo actual quiere hacer disponible a otros módulos.
- `providers`: un array de servicios que el módulo actual proporciona.
- `bootstrap`: un array de componentes que deben ser iniciados cuando se inicia la aplicación.

Aquí hay un ejemplo de cómo se ve el decorador NgModule en un módulo:

```typescript
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

---

# Core Module

El Core Module es un tipo especial de módulo en Angular que se utiliza para organizar y proporcionar servicios que son necesarios en toda la aplicación. Estos servicios pueden incluir cosas como servicios de autenticación, servicios de logging y servicios de datos compartidos.

El Core Module se importa en el AppModule de la aplicación y se utiliza para proporcionar una forma centralizada de acceder a los servicios de la aplicación.


```typescript
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class CoreModule {}
```

---

# Shared Modules

Un módulo compartido o Shared Module es un módulo que contiene componentes, directivas y pipes que se pueden reutilizar en toda la aplicación. Estos componentes, directivas y pipes se exportan desde el módulo para que puedan ser importados y utilizados en otros módulos.

Aquí hay un ejemplo de cómo se vería un Shared Module:

```typescript
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { MyComponent } from "./my-component.component";
import { MyDirective } from "./my-directive.directive";
import { MyPipe } from "./my-pipe.pipe";

@NgModule({
  declarations: [MyComponent, MyDirective, MyPipe],
  imports: [CommonModule, FormsModule],
  exports: [MyComponent, MyDirective, MyPipe],
})
export class SharedModule {}
```
