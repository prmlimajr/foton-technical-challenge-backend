exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('books')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {
          name: 'The Hill We Climb',
          author: 'Amanda Gorman',
          description:
            "The poem read on President Joe Biden's Inauguration Day, by the youngest poet to write and perform an inaugural poem.",
          cover: '9780593465271.jpg',
        },
        {
          name: 'The Midnight Library',
          author: 'Matt Haig',
          description:
            'Nora Seed finds a library beyond the edge of the universe that contains books with multiple possibilities of the lives one could have lived.',
          cover: '9780525559474.jpg',
        },
        {
          name: 'Good Company',
          author: "Cynthia D'Aprix Sweeney",
          description:
            'The foundation of a marriage between actors is shaken when they reunite with an old friend who is now a TV star.',
          cover: '9780062876003.jpg',
        },
        {
          name: 'The Red Book',
          author: 'James Patterson and David Ellis',
          description:
            'The second book in the Black Book thriller series. Chicago detective Billy Harney investigates his own past.',
          cover: '9780316499408.jpg',
        },
        {
          name: 'Northern Spy',
          author: 'Flynn Berry',
          description:
            'The sister of a BBC producer may have joined the Irish Republican Army.',
          cover: '9780735224995.jpg',
        },
        {
          name: 'The Invisible Life of Addie Laure',
          author: 'V.E. Schwab',
          description:
            'A Faustian bargain comes with a curse that affects the adventure Addie LaRue has across centuries.',
          cover: '9780765387561.jpg',
        },
      ]);
    });
};
