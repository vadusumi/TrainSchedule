


// Initialize Firebase
var config = {
    apiKey: "AIzaSyB6jCAGgujRhKKqjWSEktBmaHnVo_jyHSw",
    authDomain: "rcb-train-schedule.firebaseapp.com",
    databaseURL: "https://rcb-train-schedule.firebaseio.com",
    projectId: "rcb-train-schedule",
    storageBucket: "rcb-train-schedule.appspot.com",
    messagingSenderId: "650227004916"
};
  
firebase.initializeApp(config);


var trainData = firebase.database();

var trainName = "";
var destination = "";
var frequency = 0;
var firstTime = 0;



$("#add-train").on("click", function(event) {
    event.preventDefault();
     
    trainName = $("#train-name").val().trim();
    destination = $("#destination").val().trim();
    frequency = $("#frequency").val().trim();
    firstTime = $("#first-time").val().trim();

    trainData.ref().push({

      trainName: trainName,
      destination: destination,
      frequency: frequency,
      firstTime: firstTime,
    
    });
});



trainData.ref().on("child_added", function(snapshot) {
	console.log(snapshot.val().trainName);
	console.log(snapshot.val().destination);
	console.log(snapshot.val().frequency);
	console.log(snapshot.val().firstTime);

	$("#tablebody").append(
	"<tr><td>" + snapshot.val().trainName +
    "</td><td>" + snapshot.val().destination +
    "</td><td>" + snapshot.val().frequency +
    "</td><td>" + snapshot.val().firstTime + " </td></tr>");

});
