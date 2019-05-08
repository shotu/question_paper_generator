var questionsController = require("../controllers/questions");
var appRouter = function (app) {

  app.get("/api/questions", function(req, res) {    
    console.log("page ",req.query.page)
    let pageNumber = req.query.page;
    let marks = 100;
    let easy = 50;
    let medium = 25;
    let hard = 25;
    questionsController.getQuestions(marks, easy, medium, hard, (err, data)=>{
      if(err){
        res.status(500).send("Internal error occured");
      }
      res.json(data);
      // res.status(200).send("Welcome to our restful API");
    })
   
  });
}

module.exports = appRouter;