const style=document.createElement("style");style.innerHTML=".operating{display:flex;align-items:center;height:30px;}.operating input,.operating button{height:inherit;padding:5px;background-color:white;border:1px solid rgba(0,0,0,0.5);box-sizing:border-box}.operating button{margin-left:5px;}.operating button:active{background-color:lightgray;margin-top:5px}",document.head.appendChild(style);const decryptArticle=async e=>{const t=document.getElementById(e).dataset.cryptoMsg,n=document.getElementById(e).querySelector('input[type="password"]').value,o=await window.crypto.subtle.digest("SHA-256",(new TextEncoder).encode(n)),r=new Uint8Array(o),i=await window.crypto.subtle.importKey("raw",r,{name:"AES-GCM"},!1,["decrypt"]),c=new Uint8Array(atob(t).split("").map(e=>e.charCodeAt(0))),a=c.slice(0,10),d=c.slice(10);try{const t=await window.crypto.subtle.decrypt({name:"AES-GCM",iv:a},i,d),n=(new TextDecoder).decode(t);document.getElementById(e).innerHTML=n}catch(e){alert("密碼錯誤!!")}};