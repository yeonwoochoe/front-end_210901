// const mon = "mon";
// const tue = "tue";
// const web = "wed";
// const thu = "thu";
// const fri = "fri";
// const sat = "sat";
// const sun = "sun";

// const days0wfweek = [mon , tue , web , thu , fri , sat , sun];


const age = parseInt(prompt("너몇살이야?")); 


if (isNaN(age) || age < 0 ){
  console.log("숫자를 입력해주세요! 반드시 정수를!");
} else if(age < 18) {
  console.log("당신은 미성년자입니다.")
} else if(age >= 18 && age <=50) {
  console.log("당신은 음주가 가능합니다")
} else if (age > 50 && age <=80) {
  console.log("경험할수 있다.")
}else if (age === 100) { // age가 100이 같냐는 뜻.
  console.log("너는 현명하구나!")
} else if (age > 80) {
  console.log("너는 뭐든지 먹을수있다.")
}