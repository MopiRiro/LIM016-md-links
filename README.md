# Markdown Links 📂

***
![imagen1](img/banner.JPG)
***

## 1. Preamble

Markdown is a very popular lightweight markup language among developers. It is used on many platforms
they handle plain text (GitHub, forums, blogs, ...), and it is very common to find several files in that format in any type of repository.

These `Markdown` files usually contain _links_ (links) that are often broken or no longer valid, and that greatly damages the value of the information that you want to share.

## 2. Project summary

The Md-mocgor library is responsible for verifying links from a Markdown file, showing statistical reports of total, broken or invalid links.

## 3. Flowcharts
### Flowcharts API
![imagen2](img/api.jpg)


### Flowcharts CLI
![imagen3](img/cli.JPG)


## 4. Installation

For the installation of this library it will be necessary to execute the following command line in your terminal

``` js
npm i md-mocgor
```

## 5. User guide
### Welcome to Md-Links
``` js
md-mocgor
```
![imagen4](img/welcomeToMdLInks.JPG)

### When you enter the command --help
``` js
md-mocgor --help
```
![imagen5](img/cliHelp.JPG)

### When you enter the path

``` js
md-mocgor ./pruebas
```
![imagen6](img/withRoute.JPG)

### When you enter an invalid path

``` js
md-mocgor ../routeFail
```
![imagen7](img/routeFail.JPG)

### When you enter a route that has no links
``` js
md-mocgor ./pruebas/prueba.md
```
![imagen8](img/noFoundLinks.JPG)

### When you enter a valid path with opcion --validate
``` js
md-mocgor ./pruebas --validate
```
![imagen9](img/cliValidate.JPG)

### When you enter a valid path with opcion --stats
``` js
md-mocgor ./pruebas --stats
```
![imagen10](img/cliStats.JPG)

### When you enter a valid path with --stats --validate 
``` js
md-mocgor ./pruebas --stats --validate
```
![imagen11](img/cliStatsValidate.JPG)

### When you enter a valid path with --validate --stats
``` js
md-mocgor ./pruebas --validate --stats 
```
![imagen12](img/cliStatsValidate.JPG)

### When you enter a valid path with an invalid option

``` js
md-mocgor ./pruebas --valida
```
![imagen13](img/cliInvalid.JPG)


## 6. Checklist

### General

* [ ] Puede instalarse via `npm install --global <github-user>/md-links`

### `README.md`

* [X] Un board con el backlog para la implementación de la librería.
* [X] Documentación técnica de la librería.
* [X] Guía de uso e instalación de la librería

### API `mdLinks(path, opts)`

* [X] El módulo exporta una función con la interfaz (API) esperada.
* [X] Implementa soporte para archivo individual
* [X] Implementa soporte para directorios
* [X] Implementa `options.validate`

### CLI

* [X] Expone ejecutable `md-links` en el path (configurado en `package.json`)
* [X] Se ejecuta sin errores / output esperado
* [X] Implementa `--validate`
* [X] Implementa `--stats`

### Pruebas / tests

* [X] Pruebas unitarias cubren un mínimo del 70% de statements, functions,
  lines, y branches.
* [X] Pasa tests (y linters) (`npm test`).
