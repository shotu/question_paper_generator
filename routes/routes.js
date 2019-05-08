var questionsController = require("../controllers/questions");
var appRouter = function (app) {

  app.get("/api/questions", function(req, res) {    
    let query = req.query
    return questionsController.getQuestions(query)
    .then(res_data => {
      res.json({"Questions": res_data});
    }).catch(e=> {
      console.log("Application error", e);
      res.status(500).send("Some thing went wrong");
    })
  });
}
module.exports = appRouter;