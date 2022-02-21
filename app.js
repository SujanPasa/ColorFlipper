
function colorGenerator(){
    const arr =["A" , "B", "C" , "D", "E", "F", "1" , "2" , "3" , "4", "5", "6", "7", "8" , "9" , "0"];
    let generatedColor = "";
    for(i = 0; i<6; i++){
        let position = Math.floor(Math.random()*arr.length);
        generatedColor += arr[position];
    }
    return generatedColor;   
}


document.getElementById("click-me").addEventListener("click", function(){
    let color = "#" + colorGenerator();
    console.log(color);
    document.getElementById("color-name").innerText = color;
    document.body.style.backgroundColor = color;
});