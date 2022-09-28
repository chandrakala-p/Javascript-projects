
const button = document.querySelector(".btn");
const content = document.querySelector(".content");


function isPalindrome(input) {
    var re = /[^A-Za-z0-9]/g;   //reg exp to accept ly charactars and numbers 
    var regStr = input.toLowerCase().replace(re, '');
    //reverse method to rever ele in array, so making string as array ny using spilt and then joining it to make it string again
    var reverseStr = regStr.split('').reverse().join('');
    return reverseStr === regStr;
}

// console.log(isPalindrome("not palindrom"))



button.addEventListener("click", (e) => {
    const inputValue = document.getElementById("input").value;
    if (isPalindrome(inputValue)) {

        content.innerText = "The Entered Text is Palindrome ";
    }
    else {
        content.innerText = "The Entered Text is not Palindrome ";
    }
})




