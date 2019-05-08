var questionsController = require("../controllers/questions");
var appRouter = function (app) {

  app.get("/api/questions", function(req, res) {    
    let query = req.query
    return questionsController.getQuestions(query)
    .then(res_data =>{
    //  let finalArray = []
    //   // res_data.values(value => {
    //   //   console.log("set value",value)
        
    //   // })
    //   for (let item of res_data){
    //     finalArray.push(item)
    //   }
      res.json({"sometning": res_data});
    }).catch(e=>{
      console.log("dadada errrer", e)
      res.status(500).send("Some thing went wrong");
    })    
  });
}

module.exports = appRouter;