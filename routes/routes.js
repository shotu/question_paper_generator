var questionsController = require("../controllers/questions");
var appRouter = function (app) {

  app.get("/api/questions", function(req, res) {    
    
    let query = req.query
    questionsController.getQuestions(query, (err, data)=>{
      if(err){
        res.status(500).send("Internal error occured");
      }
      res.json(data);
      // res.status(200).send("Welcome to our restful API");
    })
   
  });
}

module.exports = appRouter;