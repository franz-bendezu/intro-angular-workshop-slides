# **Introducción a los pipes**

Los pipes son una característica de Angular que le permite transformar los datos antes de que se muestren en la vista. Los pipes son una forma de dar formato a los datos para que sean más legibles y fáciles de entender para el usuario.

Hay dos tipos de pipes en Angular: ** pipes puras** y ** pipes impuras**. Las canalizaciones puras solo transforman los datos si el valor de entrada o los parámetros cambian, mientras que las canalizaciones impuras pueden transformar los datos cada vez que se ejecuta la detección de cambios.

---

# **Pipes integrados**

Angular viene con varias pipes integradas que puede usar de inmediato. Éstas incluyen:

- `DatePipe` para formatear fechas
- `UpperCasePipe` y `LowerCasePipe` para transformar texto a mayúsculas o minúsculas
- `DecimalPipe` para formatear números con puntos decimales
- `CurrencyPipe` para formatear valores de moneda
- `PercentPipe` para formatear porcentajes
- `AsyncPipe` para suscribirse a observables y devolver su valor más reciente

---

# **Creación de pipes personalizadas**

Además de los pipes integrados, también puede crear sus propias pipes personalizadas en Angular. Para crear una tubería personalizada, debe definir una nueva clase con el decorador `@Pipe`. El decorador `@Pipe` toma un objeto con una propiedad `name`, que es el nombre de la tubería que desea crear. La clase también necesita implementar la interfaz `PipeTransform` y proporcionar una implementación para el método `transform`.

```typescript
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "capitalize" })
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return "";
    }

    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
```

```html
<p>{{ 'hello world' | capitalize }}</p>
<!-- Output: "Hello world" -->
```
