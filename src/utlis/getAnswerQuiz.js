export const getAnswerQuiz = (data , setData , title , prefix) => {
    const editedAnswers = data.map((answer) => {
        if(answer.id === prefix){
           return answer = {...answer , answer : title}
        }
        return answer
       })
       setData(editedAnswers)
}