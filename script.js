form.addEventListener('submit',(e)=>{
    
    let Password=document.querySelector('.password').value
    let confirm=document.querySelector('.confirm').value
    let out=document.querySelector('.output')
    if(Password!=confirm){
        e.preventDefault()
        out.innerText="Password are Not Same"
        out.style.backgroundColor="red"
    }else{
        out.innerText=''
        out.innerText="password are same"
        out.style.backgroundColor="green"
    }
})