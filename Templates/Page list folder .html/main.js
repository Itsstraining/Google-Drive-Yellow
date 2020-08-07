// let arrten = [{name: "database", link: "https://drive.google.com/file/d/1-bNFtVaoRuHCIZD5ZjaC-IGbEoPZ0oxK/view"},{name:"Anh",link:"https://drive.google.com/file/d/1NadcjYGg9zpfJbUe7SjurO8Tfl0XDo4k/view?usp=drive_open"},{name:"Speaking",link:"https://drive.google.com/file/d/1f8pa11S9Ao2BGZhny491Dd5jGLscnZkx/view"},{nam:"written",link:"https://drive.google.com/file/d/1lsew44esHEI6MdAl-GJ5jk4hqhP7OFIG/view"}]
// function FolderButton(){
//     let file= document.getElementById("folder");
//     for (let i=0; i< arrten.length; i++){
//     let nut= document.createElement("button");
    
//     let anh=document.createElement("img");
    
//     link.href = arrten[i].link;
//     nut.onclick(()=>{
//         window.open(arrten[i]);
//         window.focus()
//     })
//     nut.innerText= arrten[i].name;  
//     anh.src="./folder.svg"
//     anh.width = 20; 
    
//     file.appendChild(nut);
//     nut.appendChild(anh);
//     }
// }
// FolderButton();
    function like(){
        let form= document.getElementById("like");
        if(form.style.display == "none"){
            form.style.display = "block";

        } else{
            form.style.display = "none"
        }
    }




