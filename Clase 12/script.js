        var nameInput=document.getElementById("name");
        
      
        nameInput.addEventListener("keyup", function(event){
            if(event.keyCode === 13){
                event.preventDefault();
                showName();
            }
        });

        function showName(){
           var name= document.getElementById("name").value;
            alert(name);
        }
        function showHello(name){   
            alert("Hello" + name);
        }

        function askName(){
            var name = prompt("Ingresa nombre");
            alert(name);
        }
