-- SCRIPT FEITO E TESTADO EM MYSQL NA VERSÃO 5.3
SET
  time_zone = "+00:00";

DROP TABLE IF EXISTS projects_navers,
navers,
projects;

-- E.B.1  Crie um script que delete e crie todas as tabelas.
CREATE TABLE navers (
  id BINARY(16) UNIQUE NOT NULL,
  name VARCHAR(255),
  job_role VARCHAR (255),
  birthdate DATE,
  admission_date DATE,
  created_at TIMESTAMP,
  uploaded_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE projects (
  id BINARY(16) UNIQUE NOT NULL,
  name VARCHAR (255) NOT NULL,
  created_at TIMESTAMP,
  uploaded_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE projects_navers (
  id INT AUTO_INCREMENT,
  naver_id BINARY(16),
  project_id BINARY(16),
  PRIMARY KEY(id),
  FOREIGN KEY (naver_id) REFERENCES navers(id) ON DELETE CASCADE,
  FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
);

-- E.B.2 Faça um script que limpe e crie dados nas tabelas.
SET
  sql_safe_updates = 0;

DELETE FROM
  projects_navers;

DELETE FROM
  navers;

DELETE FROM
  projects;

INSERT INTO
  navers(
    id,
    name,
    job_role,
    birthdate,
    admission_date,
    created_at,
    uploaded_at
  )
values
  (
    'c971f4de',
    'Yuri X',
    'Desenvolvedor',
    '2000-06-18',
    '2021-07-25',
    '2020-07-25 22:12:26',
    '2021-08-25 22:12:26'
  ),
  (
    'c971f5fe',
    'Yuri Santos',
    'Desenvolvedor',
    '2001-07-25 ',
    '2020-07-25',
    '2020-07-25 22:12:26',
    '2021-08-25 22:12:26'
  );

INSERT INTO
  projects(id, name, created_at, uploaded_at)
values
  (
    'c971fac0',
    'Projeto Legal',
    '2020-07-25 22:12:26',
    '2021-08-25 22:12:26'
  );

INSERT INTO
  projects_navers(naver_id, project_id)
values
  ('c971f4de', 'c971fac0'),
  ('c971f5fe', 'c971fac0');

-- E.B.3 Faça uma querie que traga todos os navers ordenados pelo seu tempo de empresa admission_date.
SELECT
  CONVERT (id USING utf8) id,
  name,
  job_role,
  birthdate,
  admission_date
FROM
  navers
ORDER BY
  admission_date ASC;

-- E.B.4 Faça uma querie que traga todos os projetos com seus respectivos navers.
SELECT
  CONVERT(p.id USING utf8) project_id,
  p.name,
  CONVERT(n.id USING utf8) naver_id,
  n.name,
  n.job_role,
  n.birthdate,
  n.admission_date
FROM
  projects as p,
  projects_navers as pn,
  navers as n
WHERE
  p.id = pn.project_id
  AND n.id = pn.naver_id;

-- E.B.5 Faça uma querie que traga todos os projetos com sua quantidade de navers.
SELECT
  CONVERT(p.id USING utf8) project_id,
  p.name,
  COUNT(n.id) navers_quantity
FROM
  projects as p,
  projects_navers as pn,
  navers as n
WHERE
  p.id = pn.project_id
  AND n.id = pn.naver_id
GROUP BY
  p.id;
