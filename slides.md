---
theme: ./theme
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
transition: slide-left
css: unocss
title: Fundamentos de Angular
---

# Fundamentos de Angular

Presentado por: Franz Bendezu

<div>
  <a  alt="Nixvoid" class="text-xl slidev-icon-btn !border-none !hover:text-white">
    <logo-nixvoid class="w-32" />
  </a>
</div>

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>


<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
layout: cover
---
# Introducción a Angular
---
src: ./pages/01-introduction.md
---

---
layout: cover
---
# Setting up Angular Development Environment
---
src: ./pages/02-setup.md
---

---
layout: cover
---
# Angular Architecture
---
src: ./pages/03-architecture.md
---

---
layout: cover
---
# Módulos
---
src: ./pages/04-modules.md
---



---
layout: cover
---
# Angular Templates and Data Binding
---
src: ./pages/05-templates.md
---

---
layout: cover
---
#  Componentes
---
src: ./pages/06-components.md
---

---
layout: cover
---
#  Servicios
---
src: ./pages/07-services.md
---

---
layout: cover
---
#  Routing
---
src: ./pages/08-routing.md
---

---
layout: cover
#  Forms

---

src: ./pages/09-forms.md

---

layout: cover

#  Directivas

---

src: ./pages/10-directives.md

---
layout: cover
---
#  Pipes
---
src: ./pages/11-pipes.md
---

---
layout: cover
---
# Despliegue
---
src: ./pages/12-deployment.md
---

layout: center
class: text-center

---

# Learn More

[Documentations](https://sli.dev) · [GitHub](https://github.com/slidevjs/slidev) · [Showcases](https://sli.dev/showcases.html)
