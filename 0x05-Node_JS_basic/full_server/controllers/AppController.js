class AppController {
  static getHomePage(req, res) {
    res.status(200);
    res.send('Hello Holberton School!');
  }
}

module.export = AppController;
