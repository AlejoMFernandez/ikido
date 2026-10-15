# iKidO · Prototipo interactivo

Prototipo navegable de la app iKidO (misiones de la vida real, monedas y premios para chicos).
HTML + CSS + JS puros, sin dependencias ni build. Los sonidos se generan en el navegador (Web Audio).

## Qué se puede probar
Arranca **vacío**: no hay familia, chicos, misiones ni premios cargados. Todo se crea desde la app.

1. **Adulto:** bienvenida guiada (nombre, mamá/papá, apellido → código de familia → primer hijo con su Kido en huevo y su código secreto). En Familia hay una lista de «Primeros pasos».
2. **Misiones:** con ideas sugeridas, para un hijo, con monedas y repetición semanal o solo hoy.
3. **Premios:** el adulto los carga (con ideas sugeridas) y aparecen en el Tesoro del chico.
4. **Chico:** entra con código de familia + código secreto, cumple misiones en el mapa, recibe la lluvia de monedas cuando el adulto sella, su Kido nace del huevo al subir de nivel, abre el cofre del día, pide premios y, si el adulto los aprueba, abre el cofre. Si el adulto dice «todavía no», le llega el motivo (y las monedas vuelven en el caso de los premios).
5. El adulto ve el historial de monedas de cada hijo y puede agregar más hijos.

El progreso se guarda en el navegador de cada persona. «Empezar de cero» borra todo.

## Probar en local
Abrir con cualquier servidor estático (por ejemplo XAMPP: `http://localhost/2 - CLIENTES/iKid0/prototipo/`).

## Subir a GitHub y Vercel
```bash
cd prototipo
git init
git add .
git commit -m "iKidO prototipo"
git branch -M main
git remote add origin https://github.com/AlejoMFernandez/ikido-prototipo.git
git push -u origin main
```
En Vercel: **Add New → Project → importar el repo**. Framework: *Other*, sin build command, output = raíz. Deploy.

En el iPhone: abrir el link en Safari → Compartir → **Agregar a inicio**, y se abre a pantalla completa como una app.
