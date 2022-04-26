function starthearingfunction(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/0Nf1yF70i/model.json" , modelReady)
}
function modelReady(){
    console.log("0Nf1yF0i Working");
    classifier.classify(gotResults);
}
function gotResults(){
    
}