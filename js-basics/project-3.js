console.log('project-3');

let accordian =document.getElementsByClassName('content');

for(i=0;i<accordian;i++){
    accordian[i].addEventListener('click', function(){
        this.classList.toggle('active');

    })
}