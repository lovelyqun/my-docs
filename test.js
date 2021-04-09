function debounce(fn,delay=500){
    let timeout = null
    return function (){
        clearTimeout(timeout)
        timeout = setTimeout(()=>{
            // fn.apply(this,arguments)
            fn(arguments)
        },delay)
    }
}
function sayHi(e) {
    console.log(this)
    console.log(e.target.innerWidth, e.target.innerHeight);
}
window.addEventListener('resize', debounce(sayHi));
