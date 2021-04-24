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

  async store(req, res) {
    const { name, author, description } = req.body;
    const { filename: cover } = req.file;

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      author: Yup.string().required(),
      description: Yup.string(),
      cover: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(403).json({ error: 'Validation failed' });
    }

    const [bookAlreadyExists] = await connection('books')
      .select('books.*')
      .where({ 'books.name': name, 'books.author': author });

    if (bookAlreadyExists) {
      return res
        .status(403)
        .json({ error: 'Book already exists in the database' });
    }

    const created = new Date();
    const updated = new Date();

    const book = {
      name,
      author,
      description,
      cover,
      created,
      updated,
    };

    const [id] = await connection('books').insert(book, 'id');

    if (!id) {
      return res.status(500).json({ error: 'Connection failed' });
    }

    return {
      id,
      name,
      author,
      description,
      cover,
      created,
      updated,
    };
  }

  async updated(req, res) {}

  async destroy(req, res) {}
}

module.exports = new BookController();
