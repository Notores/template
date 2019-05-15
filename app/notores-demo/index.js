const {NotoresModule, routeWithHandle} = require('@notores/core');

class DemoModule extends NotoresModule {
    init(){
        this.addRoutes();
        
        super.init();
    }

    addRoutes() {
        routeWithHandle(
            'notores-demo',
            '/',
            [
                (req, res, next) => {
                    res.locals.setBody({message:'Thank you for installing Notores!'});
                    next();
                }
            ],
            {
                accepts: ['html', 'json'],
            },
        );
    }
}

module.exports = new DemoModule();