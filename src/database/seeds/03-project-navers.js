exports.seed = knex => {
  return knex('navers_projects').del()
    .then(() => {
      return knex('navers_projects').insert([
        { project_id: 1, naver_id: 3 },
        { project_id: 2, naver_id: 2 },
        { project_id: 3, naver_id: 1 },
        { project_id: 3, naver_id: 3 },
        { project_id: 2, naver_id: 2 },
        { project_id: 1, naver_id: 1 }
      ])
    })
}
