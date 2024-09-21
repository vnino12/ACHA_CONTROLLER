const pal = {
    index: (req, res) => {
      res.render('index'); 
    },
    contact: (req, res) => {
      res.render('contact'); 
    },
    product: (req, res) => {
      res.render('products'); 
    },
    services: (req, res) => {
      res.render('services'); 
    },
    about: (req, res) => {
      res.render('about');
    }
  };
  
  module.exports = pal;
  