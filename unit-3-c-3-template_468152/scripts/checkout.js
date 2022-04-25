// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time


let show = JSON.parse(localStorage.getItem("amount")) || 0

appent(show)

function appent(bag)
{
    document.getElementById("wallet").innerHTML= null;
    document.getElementById("wallet").append(bag)
}



let movie = JSON.parse(localStorage.getItem("movie"))
display(movie)

function display(data)
{
    // console.log(data)
    let div = document.createElement("div")

    let img = document.createElement("img")
    img.src=data.Poster

    let h2 = document.createElement("h2")
    h2.innerText=data.Title

    div.append(h2,img)

    document.getElementById("movie").append(div)
}






function confirmfun()
{

    let seat = document.getElementById("number_of_seats").value

    let total = seat*100

    let wallet = JSON.parse(localStorage.getItem("amount"))

    let sum = wallet - total

    if (sum<0)
    {
        alert("Insufficient Balance")
    }
    else {
        alert("Booking Successful")

        localStorage.setItem("amount",JSON.stringify(sum))

        let wal = JSON.parse(localStorage.getItem("amount"))

        appent(wal)
    }
    // console.log(sum)
}