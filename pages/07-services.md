# **Introducción a los servicios:**

- Los servicios se utilizan para proporcionar una funcionalidad que se puede compartir entre varios componentes.
- Se pueden utilizar para recuperar datos, realizar cálculos o interactuar con sistemas externos.

```typescript
@Injectable({
  providedIn: "root",
})
export class ExampleService {
  getData(): Observable<any> {
    return this.http.get("http://example.com/data");
  }
}
```

---

# **Creando un servicio:**

- Los servicios se pueden crear mediante la CLI de Angular o manualmente mediante la creación de una clase de TypeScript.
- Los servicios suelen estar decorados con el decorador @Injectable para indicar que se pueden inyectar con dependencias.

```typescript
@Injectable({
  providedIn: "root",
})
export class ExampleService {
  // service logic goes here
}
```

---

# **Inyectando un servicio:**

- Los servicios se pueden inyectar en componentes utilizando el constructor.
- El sistema de inyección de dependencia Angular proporcionará automáticamente la instancia de servicio requerida.

```typescript
@Component({
  selector: "app-example",
  template: ` <p>{{ exampleService.getData() | async }}</p> `,
})
export class ExampleComponent {
  constructor(public exampleService: ExampleService) {}
}
```

---

# **HttpClient y solicitudes HTTP:**

- El módulo HttpClient se usa para realizar solicitudes HTTP en Angular.
- Proporciona varios métodos, como obtener, publicar, colocar, eliminar y más.
- Las solicitudes HTTP se pueden utilizar para recuperar o modificar datos de sistemas externos.

```typescript
@Injectable({
  providedIn: "root",
})
export class ExampleService {
  getData(): Observable<any> {
    return this.http.get("http://example.com/data");
  }
}
```
