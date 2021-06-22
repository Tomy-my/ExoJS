const input = document.getElementById("input") ;
document.getElementById('checkbox').addEventListener('mouseenter', function() {
    
    if(input.type == "password"){
        input.type='text';
    }

    else if (input.type == "text"){
        document.getElementById('checkbox').addEventListener('mouseleave', function(){
            input.type="password";
        })
    }
})
