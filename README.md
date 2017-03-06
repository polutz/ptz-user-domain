# ptz-user-domain

[![Build Status](https://travis-ci.org/polutz/ptz-user-domain.svg)](https://travis-ci.org/polutz/ptz-user-domain)
[![codecov.io](http://codecov.io/github/polutz/ptz-user-domain/coverage.svg)](http://codecov.io/github/polutz/ptz-user-domain)
[![Dependency Status](https://gemnasium.com/polutz/ptz-user-domain.svg)](https://gemnasium.com/polutz/ptz-user-domain)
[![bitHound Score](https://www.bithound.io/github/gotwarlost/istanbul/badges/score.svg)](https://www.bithound.io/github/polutz/ptz-user-domain)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

Este é o coração dos Usuários no Polutz, conjunto de móludos baseados em DDD (Domain Driven Design) 
e TDD (Test Driven Development).
Sinta-se livre para usar em seus projetos, e contribuir!

Nessa camada de Domínio (Domain), a ideia é utilizar o minimo possível de dependências, 
tentando ficar ao máximo com javascript puro.

Core Domain: https://github.com/polutz/ptz-core-domain

User Domain: https://github.com/polutz/ptz-user-domain

User Repository: https://github.com/polutz/ptz-user-repository

Projeto que utiliza os modulos acima: https://github.com/angeloocana/freecomclub

Tarefas: https://trello.com/b/w9BqiPdz/frecom-club

Stack: react, redux, relay, graphql, nodejs e mongodb.

Metodologias: TDD (Test Driven Development), DDD (Domain Driven Design).

Tools: Docker, Typescript, babel, webpack, mocha, gulp.

## Prerequisites

1. Latest version of Node to be installed.

## NPM Global packages
```
    npm install ts-node -g
    npm install typescript-node -g
    npm install babel-cli -g
```

## Typings Global Packages 
```
    typings install dt~mocha --global --save
```

## Setup
```
    npm install   
    node gensalt.js
```

## Test
```
    npm test
```