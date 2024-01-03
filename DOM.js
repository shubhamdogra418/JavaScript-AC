const king=document.getElementById('leader');
king.innerText= "king of leaves";
king.addEventListener('click', function () {
    king.style.backgroundColor="red";
})



const head4= document.querySelector('.heading3');
head4.innerHTML= "hello head 4";

const madeh1= document.createElement('h1');
madeh1.textContent="heading 1 has been created using DOM";
document.body.appendChild(madeh1);

const ulist= document.getElementById("unlist");

const listEl= document.createElement("li");
listEl.textContent="orange";
document.ul.appendChild(listEl);