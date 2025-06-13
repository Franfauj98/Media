# Flavors and more

##

## Architecture
The objective is to follow the DDD architecture concept like the following : 

```
src/
├── app/
│   ├── core/
│   │   ├── services/
│   │   │   ├── api.service.ts
│   │   │   ├── auth.service.ts
│   │   │   └── ...
│   │   ├── models/
│   │   │   ├── user.model.ts
│   │   │   └── ...
│   │   ├── guards/
│   │   │   ├── auth.guard.ts
│   │   │   └── ...
│   │   └── interceptors/
│   │       ├── http.interceptor.ts
│   │       └── ...
│   ├── shared/
│   │   ├── components/
│   │   │   ├── header/
│   │   │   │   ├── header.component.ts
│   │   │   │   ├── header.component.html
│   │   │   │   ├── header.component.scss
│   │   │   │   └── header.component.spec.ts
│   │   │   ├── footer/
│   │   │   │   ├── footer.component.ts
│   │   │   │   ├── footer.component.html
│   │   │   │   ├── footer.component.scss
│   │   │   │   └── footer.component.spec.ts
│   │   │   └── ...
│   │   ├── directives/
│   │   │   ├── highlight.directive.ts
│   │   │   └── ...
│   │   ├── pipes/
│   │   │   ├── capitalize.pipe.ts
│   │   │   └── ...
│   │   └── services/
│   │       ├── logging.service.ts
│   │       └── ...
│   ├── features/
│   │   ├── carnet-de-recette/
│   │   │   ├── components/
│   │   │   │   ├── recipe-list/
│   │   │   │   │   ├── recipe-list.component.ts
│   │   │   │   │   ├── recipe-list.component.html
│   │   │   │   │   ├── recipe-list.component.scss
│   │   │   │   │   └── recipe-list.component.spec.ts
│   │   │   │   ├── recipe-detail/
│   │   │   │   │   ├── recipe-detail.component.ts
│   │   │   │   │   ├── recipe-detail.component.html
│   │   │   │   │   ├── recipe-detail.component.scss
│   │   │   │   │   └── recipe-detail.component.spec.ts
│   │   │   │   └── ...
│   │   │   ├── services/
│   │   │   │   ├── recipe.service.ts
│   │   │   │   └── ...
│   │   │   ├── models/
│   │   │   │   ├── recipe.model.ts
│   │   │   │   └── ...
│   │   │   ├── carnet-de-recette.module.ts
│   │   │   ├── carnet-de-recette-routing.module.ts
│   │   │   └── ...
│   │   └── a-propos/
│   │       ├── components/
│   │       │   ├── about/
│   │       │   │   ├── about.component.ts
│   │       │   │   ├── about.component.html
│   │       │   │   ├── about.component.scss
│   │       │   │   └── about.component.spec.ts
│   │       │   └── ...
│   │       ├── services/
│   │       │   ├── about.service.ts
│   │       │   └── ...
│   │       ├── models/
│   │       │   ├── about.model.ts
│   │       │   └── ...
│   │       ├── a-propos.module.ts
│   │       ├── a-propos-routing.module.ts
│   │       └── ...
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.scss
│   ├── app.module.ts
│   └── app-routing.module.ts
├── assets/
│   ├── images/
│   ├── styles/
│   └── ...
├── environments/
│   ├── environment.ts
│   └── environment.prod.ts
└── ...
```

