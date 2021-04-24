const Yup = require('yup');
const rfr = require('rfr');
const connection = rfr('src/database/connection');

class BookController {
  async index(req, res) {
    const { search, page, perPage } = req.query;

    let bookList = connection('books')
      .select('books.*')
      .offset((page - 1) * perPage)
      .limit(perPage);

    if (search) {
      bookList = bookList.andWhere((builder) => {
        builder.where('books.name', 'like', `%${search}%`);
        builder.orWhere('books.author', 'like', `%${search}%`);
      });
    }

    const rows = await bookList;

    const books = rows.map((book) => {
      return {
        id: book.id,
        name: book.name,
        author: book.author,
        description: book.description,
        cover: book.cover,
      };
    });

    return res.json(books);
  }

  async show(req, res) {
    const id = req.params.id;

    const [query] = await connection('books').select('books.*').where({ id });

    if (!query) {
      return res.status(404).json({ error: 'Book not found' });
    }

    return res.json(query);
  }

  async store(req, res) {}

  async updated(req, res) {}

  async destroy(req, res) {}
}

module.exports = new BookController();
