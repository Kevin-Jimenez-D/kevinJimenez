let myfrom=document.querySelector("form");
let myTabla=document.querySelector("#myData");

myfrom.addEventListener("submit", async(e)=>{
    e.preventDefault();
    const data=Object.fromEntries(new FormData(e.target));
    const {valor} =data;
    data.valor=(typeof valor === "string") ? Number(valor) : null;
    let config={
        method:"POST",
        headers : {"content-type" : "application/json"},
        body: JSON.stringify(data)
    };
    let res = await (await fetch("https://6509e7e7f6553137159c3ae5.mockapi.io/API",config)).json();
    console.log(res);
})