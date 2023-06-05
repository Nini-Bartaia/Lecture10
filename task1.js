function mySetTimeout(delay){

    return new Promise((resolve)=>{
        setTimeout(resolve, delay)
        
    })
}

mySetTimeout(3000).then(console.log('timeout'))

 