const ArticlesService = {
    getAllArticles(knex){
        return knex.select('*').from(slugful_articles_main)
    }
}

module.exports = ArticlesService