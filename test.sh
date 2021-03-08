#!/bin/sh

sudo -u postgres psql <<EOF
CREATE DATABASE navetest;
CREATE USER nave WITH PASSWORD 'nave';
GRANT ALL PRIVILEGES ON DATABASE navetest TO nave;
EOF

touch .env 
echo "DATABASE_URL = 'postgres://nave:nave@localhost:5432/navetest'
PORT = 3000" >> .env 


npm i 
npm run db:migrate
npm run db:seed
npm run build
npm start
