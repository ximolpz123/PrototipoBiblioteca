# Prototipo Biblioteca Universitaria

## 🎯 Justificación del Problema UX
El sistema bibliotecario anterior resultaba complejo y obsoleto para nuestro User Persona principal (Tomás, estudiante universitario). Requería demasiados pasos para encontrar y reservar un recurso, generando fricción y frustración. Este prototipo soluciona dicho problema mediante una interfaz limpia, enfocada en una **búsqueda centralizada con autocompletado inteligente**, **filtros visuales rápidos** y un **proceso de reserva ágil (1 Clic)**, reduciendo drásticamente la carga cognitiva.

## ✨ Características y Mejoras Implementadas
- **Diseño Moderno y Responsivo:** Interfaces fluidas que se adaptan a móviles (Android/iOS) y Desktop usando CSS Grid y Flexbox.
- **Búsqueda Inteligente (Simulada):** Autocompletado y filtrado instantáneo a medida que el usuario escribe.
- **Filtros Rápidos (Píldoras):** Interfaz táctil amigable para alternar entre "Todos", "Solo Físicos" y "Solo Digitales".
- **Semáforo Visual de Disponibilidad:** Indicadores claros de estado en cada tarjeta (🟢 Disponible, 🔴 Prestado).
- **Reserva Ágil en 1 Clic:** Flujo directo sin formularios adicionales que confirma la reserva instantáneamente.
- **Persistencia Local:** Uso seguro de la API de `LocalStorage` para guardar y mantener las reservas en el navegador.

## 🛠️ Stack Tecnológico
- **Frontend Framework:** React (ES6+ / Componentes Funcionales / Hooks)
- **Estructura y Estilos:** HTML5 Semántico y CSS3 Moderno (Variables, Flexbox, Grid)
- **Datos:** JSON Local (Mock Data) y LocalStorage

## 🚀 Manual de Instalación (Paso a Paso)
Sigue estos comandos exactos para ejecutar el software funcional en tu máquina local:

1. **Clonar el repositorio:**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd PrototipoBiblioteca
   ```

2. **Instalar dependencias:**
   Asegúrate de tener Node.js instalado en tu sistema.
   ```bash
   npm install
   ```

3. **Ejecutar la aplicación:**
   Levanta el servidor local de desarrollo.
   ```bash
   npm start
   ```

4. **Visualizar el prototipo:**
   Abre tu navegador web e ingresa a `http://localhost:3000`
