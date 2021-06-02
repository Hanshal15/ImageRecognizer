//https://teachablemachine.withgoogle.com/models/p_RhLJlWw/
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri)
{
    document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
});
}

console.log("ml5 version is:" + ml5.version);

var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/p_RhLJlWw/model.json",modelLoaded);

function modelLoaded() 
{
    console.log("the model is loaded");
}

function identify_image() {
     image= document.getElementById("captured_image");
     classifier.classify(image,gotResult);//classify is a function used to compare the captured image with the model and get the result
     
}

function gotResult(error,results) {
if(error){
    console.error(error);
} 
else{
    console.log(results);
    document.getElementById("object_name").innerHTML = results[0].label;
    document.getElementById("object_accuracy").innerHTML = results[0].confidence.toFixed(3);

}

}