
exports.seed = knex => {
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert([
        { id: 1, name: 'Nave Back-end boilerplate NodeJS' },
        { id: 2, name: 'Nave Back-end boilerplate ReactJS' },
        { id: 3, name: 'Nave initial starter pack' }
      ])
    })
}
