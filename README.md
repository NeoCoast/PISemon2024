# React + Vite PISemon App

PISemon es una aplicación web implementada con el objetivo de introducir a los estudiantes del PIS a una aplicación React + Vite utilizando **las prácticas de código esperadas**. 

En la rama `complete-app` se encuentra la aplicación completa, mientras que la rama `main` contiene el código inicial para realizar la tarea.

## API Externa

La aplicación utiliza la API de Pokémon de [PokéAPI](https://pokeapi.co/) para obtener y mostrar los Pokémones.

Puedes consultar la [documentación](https://pokeapi.co/docs/v2) de la API y jugar con los distintos endpoints para obtener más información.

## Instalación de Dependencias y Ejecución de la Aplicación

Sigue los pasos a continuación para configurar y ejecutar la aplicación localmente:

### 1. Clonar el Repositorio

```bash
git clone git@github.com:NeoCoast/PISemon2024.git
cd pisemon-2024
```

### 2. Configurar Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto y agrega la siguiente variable de entorno:

```plaintext
VITE_POKEAPI_BASE_URL=https://pokeapi.co/api/v2/pokemon/
```

### 3. Instalar Dependencias

Asegúrate de tener `yarn` instalado. Si no lo tienes, puedes instalarlo ejecutando:

```bash
npm install -g yarn
```

Una vez que tengas `yarn` instalado, ejecuta el siguiente comando para instalar las dependencias del proyecto:

```bash
yarn install
```

### 4. Ejecutar la Aplicación

Para iniciar la aplicación en modo desarrollo, usa el siguiente comando:

```bash
yarn dev
```

Para compilar la aplicación para producción, ejecuta:

```bash
yarn build
```

Y para previsualizar la aplicación compilada:

```bash
yarn preview
```

## Ejercicio práctico

### 1. Añadir Paginación al Contenedor de Home

- Agregar paginación para obtener los Pokémones más rápidamente.
- Permitir que el usuario seleccione el tamaño de página.

### 2. Obtener cada Pokémon desde la API

- Reemplazar los Pokémones hardcodeados en `PokemonPage.jsx` por un Pokémon obtenido de la API.

## Estructura del Proyecto

```plaintext
PISemon2024
├── .env
├── package.json
├── README.md
├── vite.config.js
├── src
│   ├── api
│   │   └── pokeApi.js
│   ├── assets
│   │   ├── arrow.png
│   │   └── ... otros archivos ...
│   ├── components
│   │   ├── NotFound
│   │   │   ├── index.jsx
│   │   │   └── styles.scss
│   │   ├── PokemonCard
│   │   │   ├── index.jsx
│   │   │   └── styles.scss
│   │   ├── PokemonList
│   │   │   ├── index.jsx
│   │   │   └── styles.scss
│   │   └── ... otros componentes ...
│   └── containers
│       ├── Home
│       │   ├── index.jsx
│       │   └── styles.scss
│       ├── PokemonPage
│       │   ├── index.jsx
│       │   └── styles.scss
│       └── ... otros contenedores ...
└── ... otros archivos y directorios ...
```

### ¡Buena suerte y diviértete programando!

