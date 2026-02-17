# 🚀 Nimble Gravity - Fullstack Challenge

Este repositorio contiene la resolución del desafío técnico para la posición de **Fullstack Developer**. La aplicación permite listar vacantes disponibles y enviar postulaciones vinculadas a un perfil de candidato mediante una API REST.

## 🛠️ Tecnologías Utilizadas

* **React**: Biblioteca principal para la interfaz de usuario.
* **Vite**: Herramienta de construcción para un desarrollo rápido.
* **Tailwind CSS**: Framework de utilidades para el diseño visual.
* **Git**: Control de versiones para la gestión del código.

## 📋 Funcionalidades del Challenge

1. **Sincronización de Candidato**: Obtención de datos de perfil (`uuid`, `candidateId`, `applicationId`) mediante el correo electrónico del aspirante.
2. **Listado de Vacantes**: Consumo de la API para mostrar las posiciones abiertas en tiempo real.
3. **Formulario de Postulación**: Validación y envío de la URL del repositorio de GitHub para posiciones específicas.
4. **Manejo de Estados**: Gestión de estados de carga (loading) y errores de validación de la API (Bad Request 400).

## 🔧 Instalación y Ejecución

Para correr este proyecto localmente, sigue estos pasos:

1. **Clonar el repositorio**:
   ```bash
   git clone [`https://github.com/MelisaPeano/challenge-nimble.git`]
   cd challenge-nimble

   npm install

   npm run dev