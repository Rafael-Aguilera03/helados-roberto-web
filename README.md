#  Helados Roberto — Catálogo Web & Pedidos

Plataforma web responsive y catálogo digital interactivo desarrollada para **Helados Roberto**, distribuidora de helados Lomoro. Nace como una solución concreta para eliminar las fricciones operativas y los tiempos muertos en la atención al cliente, evitando el envío manual de listas de precios, fotos y descripciones por chat. La web permite a los usuarios autogestionar su consulta en segundos y disparar pedidos directos vía WhatsApp listos para despachar.

**Sitio en vivo:** [https://helados-roberto.vercel.app](https://helados-roberto.vercel.app)

---

##  Problema de Negocio y Solución

* **Tiempos de espera reducidos:** Elimina la demora que implicaba responder manualmente por WhatsApp con PDFs, fotos pesadas o mensajes largos para consultar precios y disponibilidad.
* **Autonomía del cliente:** Toda la información (precios minoristas/mayoristas, formatos, presentaciones y sabores) queda centralizada y accesible las 24 horas desde cualquier dispositivo.
* **Mensajes preestructurados:** Al armar el pedido o consultar desde la web, WhatsApp se abre con un texto claro y detallado, ahorrando idas y vueltas entre vendedor y cliente.

---

##  Características

* **Modo Minorista / Mayorista:** Alternador dinámico que adapta la lista de productos y precios según el tipo de cliente.
* **Filtros por Categoría:** Navegación por tabs para explorar baldes, potes, palitos y especialidades.
* **Integración con WhatsApp:** Disparo directo de consultas y pedidos formateados sin fricción.
* **Diseño Mobile-First:** Experiencia rápida y fluida pensada para el tráfico habitual proveniente de links en redes o estados.
* **Analíticas Cookieless:** Métricas anónimas en tiempo real mediante Vercel Web Analytics, sin almacenar datos personales ni requerir banners invasivos.
* **Open Graph Optimizado:** Vista previa atractiva configurada al compartir el enlace en WhatsApp o redes.

---

##  Stack Tecnológico

* **Frontend:** React + Vite
* **Estilos:** Tailwind CSS
* **Iconos:** Lucide React
* **Hosting & CI/CD:** Vercel
* **Control de versiones:** Git & GitHub

---

##  Estructura del Proyecto

├── public/              # Archivos estáticos, imágenes de productos y favicon
├── src/
│   ├── assets/          # Recursos multimedia
│   ├── components/      # Componentes reutilizables (Header, ProductCard, etc.)
│   ├── data/            # Catálogo de productos y datos estáticos (products.js)
│   ├── App.jsx          # Componente raíz con layout y lógica principal
│   ├── main.jsx         # Punto de entrada de la aplicación
│   └── index.css        # Configuración base de estilos con Tailwind
├── vercel.json          # Configuración de cabeceras de seguridad y routing
├── package.json
└── vite.config.js

---

##  Desarrollo y Mantenimiento

Comandos para la gestión y actualización interna del catálogo:

* Instalar dependencias: `npm install`
* Servidor de desarrollo local: `npm run dev`
* Compilación para producción: `npm run build`

---

##  Propiedad y Uso

Proyecto desarrollado a medida para **Helados Roberto**. Código y recursos multimedia reservados para uso comercial del negocio. Mostrado públicamente con fines exclusivos de demostración técnica y portfolio profesional.
