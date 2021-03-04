
exports.seed = knex => {
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert([
        { id: 10, name: 'Nave Back-end boilerplate NodeJS' },
        { id: 15, name: 'Nave Back-end boilerplate ReactJS' },
        { id: 35, name: 'Nave initial starter pack' }
      ])
    })
}

// ids com valores diferentes, para não dar conflito de primary keys
