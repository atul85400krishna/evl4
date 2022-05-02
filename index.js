// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("masaiFrom").addEventListener("submit",funteam);
var mt=JSON.stringify(localStorage.getItem("Match details")) ||[];
funArry=[];
function funteam(){
    event.preventDefault()
    var teamsobj={
        match:masaifrom.matchNum.value,
        team:masaifrom.teama.value,
        team2:masaifrom.teamb.value,
        sunday:masaifrom.data.value,
        place:masaifrom.venue.value
    }
    mt.push(teamsobj)
    localStorage.setItem("Match Data",JSON.stringify(mt))
    console.log(mt)
    window.location.href="matches.html"
}