











































































 let inp =   document.querySelector("input")
let btn =     document.querySelector("button")
let xayot = inp.value





 function avaz () {
  let time = new Date()
  let hours = time.getHours()
  let minutes = time.getMinutes()
  let vremya = hours + ":" + minutes
       return(vremya)
 }


avaz()
let math =  


btn.onclick= (event) => {
  event.preventDefault()
  let arr = {
      id : Math.floor(Math.random() * 10) ,
     
      isDone : false,
      time : avaz()
  }
     arr.title = inp.value
  console.log(arr);
}
 