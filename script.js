
//generating hexcode  
const getcode = () => {
    let randomnumber = Math.floor(Math.random() * 16777215)
    let hexcode = '#' + randomnumber.toString(16)
    //pushing hexcode to bc and in h1 tag
    document.body.style.backgroundColor = hexcode;
    document.getElementById('hex').innerHTML = hexcode;

    navigator.clipboard.writeText(hexcode) // copy code for use


}

//event call 
document.getElementById('btn').addEventListener(
    'click',
    getcode
)

//intial call 
getcode()