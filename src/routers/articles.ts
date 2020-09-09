import { Router } from 'express';
import { createConnection } from 'typeorm';
// import entities
import { Article } from '../entities/Article';

const router = Router()

createConnection().then(connection => {
  const articleRepository = connection.getRepository(Article)
  router.get('/', async(req, res) => {
    const articles = await articleRepository.find()
    res.json(articles)
  })
  router.post('/', async(req, res) => {
    const { url } = req.body
    console.log(req.body);
    const newArticle = new Article(url)
    const article = await articleRepository.create(newArticle)
    const result = await articleRepository.save(article)
    res.json(result)
  })

})

export default router