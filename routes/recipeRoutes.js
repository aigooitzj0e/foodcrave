const unirest = require('unirest');

module.exports = app => {
    app.get('/api/recipe_random', (req, res) => {
        const recipe = unirest
            .get(
                'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=1&tags=vegetarian%2Cdessert'
            )
            .header(
                'X-Mashape-Key',
                'FKRFGxDYHlmshQOHCKyi4kz7BaThp1rIrjVjsnBaR1UBaRVO5s'
            )
            .header('Accept', 'application/json')
            .end(function(result) {
                res.send(result.body);
            });
    });
};
