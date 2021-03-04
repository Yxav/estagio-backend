exports.seed = knex => {
  return knex('navers_projects').del()
    .then(() => {
      return knex('navers_projects').insert([
        { project_id: 10, naver_id: 3 },
        { project_id: 15, naver_id: 4 },
      ])
    })
}
