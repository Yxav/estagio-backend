
exports.seed = knex => {
  return knex('navers').del()
    .then(function () {
      return knex('navers').insert([
        { id: 3, name: "Yuri X", birthdate: '2000-06-12', admission_date:'2020-06-12', job_role: "Desenvolvedor"},
        { id: 4, name: "Joe L.", birthdate: '1998-05-12', admission_date: '2020-05-12', job_role: "Desenvolvedor"},
        { id: 7, name: "Homer S.", birthdate: '1988-06-12', admission_date:' 2020-07-12', job_role: "Desenvolvedor"}
      ])
    })
}

