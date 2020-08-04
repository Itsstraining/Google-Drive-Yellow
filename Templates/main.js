let arrten = ['DATABASE','TPHCM','DANH SÁCH SINH VIEN','HOA','TOAN','LÝ','SINH', 'ANH', 'LTHDT','CẤU TRÚC DỮ LIỆU','ĐƯỜNG LỐI CÁCH MẠNG']


function renderFolderButton(){
    let hd= document.getElementById("hd");
    for (let i=0; i< arrten.length; i++){
    let dt= document.createElement("button");
    let fd=document.createElement("a");
    let anh=document.createElement("img");
    anh.src ="./folder.svg";
    fd.appendChild(anh);
    dt.classList.add('btn','btn-success');
    dt.innerText= arrten[i];
    hd.appendChild(dt);
    }
}


