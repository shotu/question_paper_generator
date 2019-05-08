
var questionService = require("../services/questions")
exports.getQuestions = (query) => {
  
return new Promise((resolve, reject)=> {
  let marks = parseInt(query.marks);
  let easy = parseInt(query.easy);
  let medium = parseInt(query.medium);
  let hard = parseInt(query.hard);
  
  return validateParams(query)
   .then(data=>{
    console.log("Params validated");
      return questionService.getQuestionsSet(marks, easy, hard, medium)
    }).then(data => {
      resolve(data);
    }).catch(e=>{
      reject(e);
    })
})

}
const validateParams = (query) => {
  return new Promise((resolve, reject)=>{
    if (typeof query.marks === 'undefined' || query.marks === null || query.marks < 1) {   
      reject("Marks query params is not valid");
    }

    if (typeof query.easy === 'undefined' || query.easy === null || query.easy < 1) { 
      reject("easy query params is not valid");
    }

    if (typeof query.medium === 'undefined' || query.medium === null || query.medium < 1) {
      reject("medium query params is not valid");
    }

    if (typeof query.hard === 'undefined' || query.medium === null || query.medium < 1) {
      reject("medium query params is not valid");
    }

    if ((parseInt(query.hard) + parseInt(query.medium) + parseInt(query.easy))!==100){
      reject("Distribution of percentage among easy, medium and hard is not 100 %");
    }
    resolve()
  })
}