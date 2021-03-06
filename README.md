# Desafio de Back-end - NAVE

Solução do desafio proposto pela Nave, para a vaga de estágio em Back-end.
API construída com Node.JS, PostgreSQL, Express e Objection.

## Conteúdo



# Antes de começar
## Instalação

1. Instale o Node, na versão LTS;
2. Instale o banco de dados PostgreSQL;
3. Instale as dependências usando o yarn ou npm:  `npm install` ou ` yarn`;


## Antes de rodar:
1. Será necessário criar um banco de dados, com os comandos abaixo:
- CREATE USER nave WITH PASSWORD nave
- CREATE DATABASE navetest
- GRANT ALL PRIVILEGES ON DATABASE navetest to nave

2. Faça uma cópia do arquivo .env-example, e renomeie para .env, depois complete com os dados acima

## Ou
  Execute o script `test.sh`, que fará a criação do banco de dados e usuário automaticamente.

### Próximos passos

3. Execute o código de migrações: `npm run db:up`, que realizará as migrações e inserção de dados no banco.
4. Execute o código para rodar o projeto: `npm start`

## Insomnia
[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://raw.githubusercontent.com/Yxav/estagio-backend/main/doc-insomnia?token=ALTR6P4WYTPPKCZPQ26CKBLAILREK)

## Produção
Esta API se encontra em produção no link: https://teste-nave-yuri-xavier.herokuapp.com/navers





