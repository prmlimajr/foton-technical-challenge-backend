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
        {
          name: 'Ocean Prey',
          author: 'John Sandford',
          description:
            'The 31st book in the Prey series. When federal officers are killed, Lucas Davenport and Virgil Flowers team up to investigate matters.',
          cover: '9780593087022.jpg',
        },
        {
          name: "The Devil's Hand",
          author: 'Jack Carr',
          description:
            'The fourth book in the Terminal List series. James Reece is given a top-secret C.I.A. mission.',
          cover: '9781982123741.jpg',
        },
        {
          name: 'The Four Winds',
          author: 'Kristin Hannah',
          description:
            'As dust storms roll during the Great Depression, Elsa must choose between saving the family and farm or heading West.',
          cover: '9781250178602.jpg',
        },
        {
          name: 'Where The Crawdads Sing',
          author: 'Delia Owens',
          description:
            'In a quiet town on the North Carolina coast in 1969, a young woman who survived alone in the marsh becomes a murder suspect.',
          cover: '9780735219090.jpg',
        },
        {
          name: 'On The House',
          author: 'John Boehner',
          description:
            'The former speaker of the House reflects on his time in Washington, key political figures and the current state of the Republican Party.',
          cover: '9781250238443.jpg',
        },
        {
          name: 'Empire of Pain',
          author: 'Patrick Radden Keefe',
          description:
            'A portrait of the Sackler family, known for their philanthropy toward institutions around the world, and their involvement with Valium and OxyContin.',
          cover: '9780385545686.jpg',
        },
        {
          name: 'The Code Breaker',
          author: 'Walter Isaacson',
          description:
            'How the Nobel Prize winner Jennifer Doudna and her colleagues invented CRISPR, a tool that can edit DNA.',
          cover: '9781982115852.jpg',
        },
        {
          name: 'Broken Horses',
          author: 'Brandi Carlile',
          description:
            'The six-time Grammy Award-winning singer and songwriter recounts difficulties during her formative years and her hard-won successes.',
          cover: '9780593237243.jpg',
        },
        {
          name: 'The Body Keeps the Score',
          author: 'Bessel van der Kolk',
          description:
            'How trauma affects the body and mind, and innovative treatments for recovery.',
          cover: '9780670785933.jpg',
        },
        {
          name: 'Braiding Sweetgrass',
          author: 'Robin Wall Kimmerer',
          description:
            'A botanist and member of the Citizen Potawatomi Nation espouses having an understanding and appreciation of plants and animals.',
          cover: '9781571313560.jpg',
        },
        {
          name: 'White Fragility',
          author: 'Robin DiAngelo',
          description:
            'Historical and cultural analyses on what causes defensive moves by white people and how this inhibits cross-racial dialogue.',
          cover: '9780807047415.jpg',
        },
      ]);
    });
};
