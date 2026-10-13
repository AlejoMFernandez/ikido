# iKidO · Prototipo interactivo

Prototipo navegable de la app iKidO (misiones de la vida real, monedas y premios para chicos).
HTML + CSS + JS puros, sin dependencias ni build. Los sonidos se generan en el navegador (Web Audio).

## Qué se puede probar
- **Gero (chico):** mapa de misiones, «¡La hice!», pantalla de misión cumplida, lluvia de monedas cuando mamá sella, subida de nivel, Tesoro con cofre que se abre, cofre del día y Logros.
- **Laura (mamá):** familia, revisar y sellar misiones, marcar premios como entregados, crear una misión nueva (aparece en el mapa de Gero).
- Lo que hace un perfil le llega al otro. El progreso se guarda en el navegador; «Reiniciar demo» vuelve todo a cero.

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
