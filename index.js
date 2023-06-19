let myJobs = []
const input = document.querySelector('#input-el');
const saveInput= document.querySelector('#input-btn');
const ulel= document.querySelector('#ulEl');
const deleteBtn = document.getElementById("delete-btn")


// ------------------ function to not disapper the jobs when we refresh----------
let jobsFromLocalStorage = JSON.parse(localStorage.getItem("savedJobs"));
console.log(jobsFromLocalStorage);  
if (jobsFromLocalStorage) {
myJobs = jobsFromLocalStorage
renderJobs()
}

//--------------- adding the function in input button to collect input and 
//-------------- store it in myJobs array and 
saveInput.addEventListener('click', function(){
    // myJobs.push(input.value);
    pushjobs();
    renderJobs();
    // saveJobs();
    input.value="";
})

function pushjobs(){
myJobs.unshift(input.value);
console.log(myJobs);
localStorage.setItem("savedJobs", JSON.stringify(myJobs) )
}

function renderJobs(){ 
     ulel.innerHTML="";
     for(let i=0; i<myJobs.length; i++){
     const li = document.createElement("li");
    //  li.innerHTML= "<a target='_blank' href='" + myJobs[i] + "'>" + myJobs[i] + "</a>";
     li.innerHTML =  ` <a target='_blank' href='${myJobs[i]}'>${myJobs[i]}</a>`
     ulel.append(li);  
     }
}


deleteBtn.addEventListener("click", function() {
    localStorage.clear()
    myJobs = []
    renderLeads()
})
