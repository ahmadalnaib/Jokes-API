const btn= document.querySelector("#btn");
btn.addEventListener("click",loadData);



function loadData(e){


  const number= document.querySelector(".n").value;

const xhr=new XMLHttpRequest();
xhr.open("GET",`http://api.icndb.com/jokes/random/${number}`,true);

xhr.onload=function(){
  if(xhr.status===200){

    const R=JSON.parse(this.responseText);

    let output='';
    if(R.type==="success"){
      
      R.value.forEach((j)=>{

        output += `<li>${j.joke}</li>`

      });

    }else {
      output += '<li>SometHING WENT WRONG</li>'
    }

    document.querySelector(".j").innerHTML=output;
   
  }
}



xhr.send();

e.preventDefault();

}