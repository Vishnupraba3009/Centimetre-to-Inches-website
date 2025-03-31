
        function Convert(){
            event.preventDefault();
            let cmval=Number(document.getElementById("input").value);
            let inchval=cmval/2.54;
            let resultid=document.getElementById("result");
            resultid.innerHTML=inchval;
        }
