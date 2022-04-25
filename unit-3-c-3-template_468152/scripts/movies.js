// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

// Here is your key: a691fe8d

// : http://www.omdbapi.com/?i=tt3896198&apikey=a691fe8d

// http://www.omdbapi.com/?apikey=a691fe8d&t=avengers


let show = JSON.parse(localStorage.getItem("amount"))

appent(show)

function appent(bag)
{
    document.getElementById("wallet").innerHTML= null;
    document.getElementById("wallet").append(bag)
}










async function searchfun()
{
 
try{

    const movie = document.getElementById("search").value 


    const url = `https://www.omdbapi.com/?apikey=a691fe8d&s=${movie}`


    const res =await fetch(url)

 const data = await res.json()

//  console.log(data.Search)

//  display(data.Search)
return data.Search

}
catch(err){
    console.log("err",err)
}

}



function display(data)
{
   data.forEach(el => {
       let div = document.createElement("div")
    let image = document.createElement("img")
    image.src =el.Poster

    let h4 = document.createElement("h4")
  h4.innerText = el.Title

    let btn = document.createElement("button")
  btn.innerText="Book Now"
  btn.setAttribute("class","book_now")
btn.addEventListener("click",function(){
    bookfun(el)
})

div.append(image,h4,btn)


document.getElementById("movies").append(div)

   });
  
}


function bookfun(el)
{
    localStorage.setItem("movie",JSON.stringify(el))

    window.location.href = "checkout.html"
}












async function main()
{
    let data = await searchfun()

    if(data == undefined)
    {
        return
    }
    else{
        display(data)
    }
}


async function debouncing(func,delay)
{
    setTimeout(function(){
        func()
    },delay)
}