let arrten = ['DATABASE','TPHCM','DANH SÁCH SINH VIEN','HOA'
            ,'TOAN','LÝ','SINH', 'ANH', 'LTHDT','CẤU TRÚC DỮ LIỆU',
            'ĐƯỜNG LỐI CÁCH MẠNG']


function FolderButton(){
    let file= document.getElementById("folder");
    for (let i=0; i< arrten.length; i++){
    let nut= document.createElement("button");
    let link=document.createElement("a");
    // let anh=document.createElement("img");
    
    link.href="./folder.svg"
    // anh.src=""
    nut.innerText= arrten[i];   
    
    nut.appendChild(link);
    file.appendChild(nut);
    }
}
FolderButton();


