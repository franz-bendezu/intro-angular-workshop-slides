# **Configurando enrutamiento en Angular:**

- Angular proporciona un módulo de enrutador incorporado que se puede usar para definir rutas y navegar entre vistas.
- El RouterModule debe importarse y configurarse con las rutas definidas en el AppModule.

```typescript
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

---

# **Navegación usando la directiva RouterLink:**

- La directiva RouterLink se puede usar para navegar entre vistas usando enlaces en la plantilla.
- Proporciona una manera fácil de crear enlaces que navegan a rutas específicas.

```html
<nav>
  <a routerLink="/">Home</a>
  <a routerLink="/about">About</a>
  <a routerLink="/contact">Contact</a>
</nav>
```

---

# **Pasando parámetros a una ruta:**

- Los parámetros de ruta se pueden usar para pasar datos a una ruta.
- Se pueden definir en la ruta de la ruta y acceder a ellos en el componente mediante el servicio ActivatedRoute.

```typescript
const routes: Routes = [{ path: "user/:id", component: UserComponent }];

@Component({
  selector: "app-user",
  template: ` <p>User ID: {{ userId }}</p> `,
})
export class UserComponent implements OnInit {
  userId: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = params["id"];
    });
  }
}
```
