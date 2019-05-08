
const questionsDb = require("../db/db")
const utility = require("../utility")

exports.getQuestionsSet = (marks, easy, hard, medium) =>{
  return new Promise((resolve, reject)=> {
    // resolve({"data": questions});
    let easySum = (easy/100)*marks;
    let medSum = (medium/100)*marks;
    let hardSum = (hard/100)*marks;
    
    let easyQuestionSetPromise = getQuestions("easy", easySum)
    let mediumQuestionSetPromise = getQuestions("medium", medSum)
    let hardQuestionSetPromise = getQuestions("hard", hardSum)

    Promise.all([easyQuestionSetPromise, mediumQuestionSetPromise, hardQuestionSetPromise])
    .then(function(values) {
     resolve(values)
    });
  })
}

const getQuestions = (type, sum) => {
  return new Promise((resolve, reject)=>{
    let allQuestionsOfPassedType = questionsDb.questions.filter(question => question.difficulty === type);
    return getAllCombinationOfQuestionsForSum(sum, allQuestionsOfPassedType)
    .then(data=> {
      let finalArray = []
      // for (let item of data){
      //   finalArray.push(item)
      // }
      // here we have all the combinations, now we can select any random combination from array
      let lenOfArrayCombination = data.length;
      let rand_index = Math.floor(Math.random() * Math.floor(lenOfArrayCombination-1))
      resolve(data[rand_index])
    }).catch(e =>{
      reject(e);
    })

  })

}

const getAllCombinationOfQuestionsForSum = (sum, questionArray) =>{

  return new Promise((resolve, reject)=>{
    n = questionArray.length;
    let v = [];
    return utility.getCombinations(questionArray, n, v, sum)
      .then(data=>{
        resolve(data);
      }).catch(e =>{
        reject(e);
      })
  })

}

