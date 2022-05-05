const blackFriday = true;

function amazonPromise(x){
    return new Promise((ok,notok)=> {
        if (x) ok('Sorry')
        else notok('this is')
    })
}

// const promise = amazonPromise(blackFriday);

// promise.then((ok)=>console.log(ok),notok=>console.log(notok))

async function amazon(boo) {
    try{
        let res = await amazonPromise();
        console.log(res);
    }
    catch(err){
        console.log(err);
    }
}

amazon()