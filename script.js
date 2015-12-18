var questions = [{nation:"Afghanistan", capital:"Kabul"},
	            {nation:"Albania", capital:"Tirane"},
	            {nation:"Algeria", capital:"Algiers"},
	            {nation:"Andorra", capital:"Andorra la Vella"},
	            {nation:"Angola", capital:"Luanda"},
	            {nation:"Antigua and Barbuda", capital:"Saint John's"},
	            {nation:"Argentina", capital:"Buenos Aires"},
	            {nation:"Armenia", capital:"Yerevan"},
	            {nation:"Australia", capital:"Canberra"},
	            {nation:"Austria", capital:"Vienna"},
	            {nation:"Azerbaijan", capital:"Baku"},
	            {nation:"Bahrain", capital:"Manama"},
	            {nation:"Bangladesh", capital:"Dhaka"},
	            {nation:"Barbados", capital:"Bridgetown"},
	            {nation:"Belarus", capital:"Minsk"},
	            {nation:"Belgium", capital:"Brussels"},
	            {nation:"Belize", capital:"Belmopan"},
	            {nation:"Benin", capital:"Porto-Novo"},
	            {nation:"Bhutan", capital:"Thimphu"},
	            {nation:"Bolivia", capital:"La Paz"},
	            {nation:"Bosnia and Herzegovina", capital:"Sarajevo"},
	            {nation:"Botswana", capital:"Gaborone"},
	            {nation:"Brazil", capital:"Brasilia"},
	            {nation:"Brunei", capital:"Bandar Seri Begawan"},
	            {nation:"Bulgaria", capital:"Sofia"},
	            {nation:"Burkina Faso", capital:"Ouagadougou"},
	            {nation:"Burma", capital:"Rangoon"},
	            {nation:"Burundi", capital:"Bujumbura"},
	            {nation:"Cambodia", capital:"Phnom Penh"},
	            {nation:"Cameroon", capital:"Yaounde"},
	            {nation:"Canada", capital:"Ottawa"},
	            {nation:"Cape Verde", capital:"Praia"},
	            {nation:"Central African Republic", capital:"Bangui"},
	            {nation:"Chad", capital:"N'Djamena"},
	            {nation:"Chile", capital:"Santiago"},
	            {nation:"China", capital:"Beijing"},
	            {nation:"Colombia", capital:"Bogota"},
	            {nation:"Comoros", capital:"Moroni"},
	            {nation:"Costa Rica", capital:"San Jose"},
	            {nation:"Cote d'Ivoire", capital:"Yamoussoukro"},
	            {nation:"Croatia", capital:"Zagreb"},
	            {nation:"Cuba", capital:"Havana"},
	            {nation:"Cyprus", capital:"Nicosia"},
	            {nation:"Czech Republic", capital:"Prague"},
	            {nation:"Democratic Republic of the Congo", capital:"Kinshasa"},
	            {nation:"Denmark", capital:"Copenhagen"},
	            {nation:"Djibouti", capital:"Djibouti"},
	            {nation:"Dominica", capital:"Roseau"},
	            {nation:"Dominican Republic", capital:"Santo Domingo"},
	            {nation:"East Timor", capital:"Dili"},
	            {nation:"Ecuador", capital:"Quito"},
	            {nation:"Egypt", capital:"Cairo"},
	            {nation:"El Salvador", capital:"San Salvador"},
	            {nation:"Equatorial Guinea", capital:"Malabo"},
	            {nation:"Eritrea", capital:"Asmara"},
	            {nation:"Estonia", capital:"Tallinn"},
	            {nation:"Ethiopia", capital:"Addis Ababa"},
	            {nation:"Federated States of Micronesia", capital:"Palikir"},
	            {nation:"Fiji", capital:"Suva"},
	            {nation:"Finland", capital:"Helsinki"},
	            {nation:"France", capital:"Paris"},
	            {nation:"Gabon", capital:"Libreville"},
	            {nation:"Georgia", capital:"Tbilisi"},
	            {nation:"Germany", capital:"Berlin"},
	            {nation:"Ghana", capital:"Accra"},
	            {nation:"Greece", capital:"Athens"},
	            {nation:"Grenada", capital:"Saint George's"},
	            {nation:"Guatemala", capital:"Guatemala City"},
	            {nation:"Guinea", capital:"Conakry"},
	            {nation:"Guinea-Bissau", capital:"Bissau"},
	            {nation:"Guyana", capital:"Georgetown"},
	            {nation:"Haiti", capital:"Port-au-Prince"},
	            {nation:"Honduras", capital:"Tegucigalpa"},
	            {nation:"Hungary", capital:"Budapest"},
	            {nation:"Iceland", capital:"Reykjavik"},
	            {nation:"India", capital:"New Delhi"},
	            {nation:"Indonesia", capital:"Jakarta"},
	            {nation:"Iran", capital:"Tehran"},
	            {nation:"Iraq", capital:"Baghdad"},
	            {nation:"Ireland", capital:"Dublin"},
	            {nation:"Israel", capital:"Jerusalem"},
	            {nation:"Italy", capital:"Rome"},
	            {nation:"Jamaica", capital:"Kingston"},
	            {nation:"Japan", capital:"Tokyo"},
	            {nation:"Jordan", capital:"Amman"},
	            {nation:"Kazakhstan", capital:"Astana"},
	            {nation:"Kenya", capital:"Nairobi"},
	            {nation:"Kiribati", capital:"Tarawa"},
	            {nation:"Kuwait", capital:"Kuwait City"},
	            {nation:"Kyrgyzstan", capital:"Bishtek"},
	            {nation:"Laos", capital:"Vientiane"},
	            {nation:"Latvia", capital:"Riga"},
	            {nation:"Lebanon", capital:"Beirut"},
	            {nation:"Lesotho", capital:"Maseru"},
	            {nation:"Liberia", capital:"Monrovia"},
	            {nation:"Libya", capital:"Tripoli"},
	            {nation:"Liechtenstein", capital:"Vaduz"},
	            {nation:"Lithuania", capital:"Vilnius"},
	            {nation:"Luxembourg", capital:"Luxembourg"},
	            {nation:"Macedonia", capital:"Skopje"},
	            {nation:"Madagascar", capital:"Antananarivo"},
	            {nation:"Malawi", capital:"Lilongwe"},
	            {nation:"Malaysia", capital:"Kuala Lumpur"},
	            {nation:"Maldives", capital:"Male"},
	            {nation:"Mali", capital:"Bamako"},
	            {nation:"Malta", capital:"Valletta"},
	            {nation:"Marshall Islands", capital:"Majuro"},
	            {nation:"Mauritania", capital:"Nouakchott"},
	            {nation:"Mauritius", capital:"Port Louis"},
	            {nation:"Mexico", capital:"Mexico City"},
	            {nation:"Moldova", capital:"Chisinau"},
	            {nation:"Monaco", capital:"Monaco"},
	            {nation:"Mongolia", capital:"Ulaanbaatar"},
	            {nation:"Morocco", capital:"Rabat"},
	            {nation:"Mozambique", capital:"Maputo"},
	            {nation:"Namibia", capital:"Windhoek"},
	            {nation:"Nauru", capital:"Yaren District"},
	            {nation:"Nepal", capital:"Kathmandu"},
	            {nation:"Netherlands", capital:"Amsterdam"},
	            {nation:"New Zealand", capital:"Wellington"},
	            {nation:"Nicaragua", capital:"Managua"},
	            {nation:"Niger", capital:"Niamey"},
	            {nation:"Nigeria", capital:"Abuja"},
	            {nation:"North Korea", capital:"Pyongyang"},
	            {nation:"Norway", capital:"Oslo"},
	            {nation:"Oman", capital:"Muscat"},
	            {nation:"Pakistan", capital:"Islamabad"},
	            {nation:"Palau", capital:"Koror"},
	            {nation:"Panama", capital:"Panama City"},
	            {nation:"Papua New Guinea", capital:"Port Moresby"},
	            {nation:"Paraguay", capital:"Asuncion"},
	            {nation:"Peru", capital:"Lima"},
	            {nation:"Philippines", capital:"Manila"},
	            {nation:"Poland", capital:"Warsaw"},
	            {nation:"Portugal", capital:"Lisbon"},
	            {nation:"Qatar", capital:"Doha"},
	            {nation:"Republic of the Congo", capital:"Brazzaville"},
	            {nation:"Romania", capital:"Bucharest"},
	            {nation:"Russia", capital:"Moscow"},
	            {nation:"Rwanda", capital:"Kigali"},
	            {nation:"Saint Kitts and Nevis", capital:"Basseterre"},
	            {nation:"Saint Lucia", capital:"Castries"},
	            {nation:"Saint Vincent and the Grenadines", capital:"Kingstown"},
	            {nation:"Samoa", capital:"Apia"},
	            {nation:"San Marino", capital:"San Marino"},
	            {nation:"Sao Tome and Principe", capital:"Sao Tome"},
	            {nation:"Saudi Arabia", capital:"Riyadh"},
	            {nation:"Senegal", capital:"Dakar"},
	            {nation:"Serbia and Montenegro", capital:"Belgrade"},
	            {nation:"Seychelles", capital:"Victoria"},
	            {nation:"Sierra Leone", capital:"Freetown"},
	            {nation:"Singapore", capital:"Singapore"},
	            {nation:"Slovakia", capital:"Bratislava"},
	            {nation:"Slovenia", capital:"Ljubljana"},
	            {nation:"Solomon Islands", capital:"Honiara"},
	            {nation:"Somalia", capital:"Mogadishu"},
	            {nation:"South Africa", capital:"Pretoria"},
	            {nation:"South Korea", capital:"Seoul"},
	            {nation:"Spain", capital:"Madrid"},
	            {nation:"Sri Lanka", capital:"Colombo"},
	            {nation:"Sudan", capital:"Khartoum"},
	            {nation:"Suriname", capital:"Paramaribo"},
	            {nation:"Swaziland", capital:"Mbabana"},
	            {nation:"Sweden", capital:"Stockholm"},
	            {nation:"Switzerland", capital:"Bern"},
	            {nation:"Syria", capital:"Damascus"},
	            {nation:"Taiwan", capital:"Taipei"},
	            {nation:"Tajikistan", capital:"Dushanbe"},
	            {nation:"Tanzania", capital:"Dar es Salaam"},
	            {nation:"Thailand", capital:"Bangkok"},
	            {nation:"The Bahamas", capital:"Nassau"},
	            {nation:"The Gambia", capital:"Banjul"},
	            {nation:"Togo", capital:"Lome"},
	            {nation:"Tonga", capital:"Nuku'alofa"},
	            {nation:"Trinidad and Tobago", capital:"Port-of-Spain"},
	            {nation:"Tunisia", capital:"Tunis"},
	            {nation:"Turkey", capital:"Ankara"},
	            {nation:"Turkmenistan", capital:"Ashgabat"},
	            {nation:"Tuvalu", capital:"Funafuti"},
	            {nation:"Uganda", capital:"Kampala"},
	            {nation:"Ukraine", capital:"Kiev"},
	            {nation:"United Arab Emirates", capital:"Abu Dhabi"},
	            {nation:"United Kingdom", capital:"London"},
	            {nation:"United States", capital:"Washington D.C."},
	            {nation:"Uruguay", capital:"Montevideo"},
	            {nation:"Uzbekistan", capital:"Tashkent"},
	            {nation:"Vanuatu", capital:"Port-Vila"},
	            {nation:"Vatican City", capital:"Vatican City"},
	            {nation:"Venezuela", capital:"Caracas"},
	            {nation:"Vietnam", capital:"Hanoi"},
	            {nation:"Yemen", capital:"Sanaa"},
	            {nation:"Zambia", capital:"Lusaka"},
	            {nation:"Zimbabwe", capital:"Harare"}];

// //fisher-yates shuffle applied to questions array.
// function shuffle(array) {
//   var m = array.length, t, i;
//   while (m) {
//     i = Math.floor(Math.random() * m--);
//     t = array[m];
//     array[m] = array[i];
//     array[i] = t;
//   }
//   return array;
// };

//used to shuffle array of 4 answers; 1 correct, 3 incorrect.
function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

//Declare variables out of function local scope
var possibleAnswers = [];
var correct = 0;
var nationName = 0;
var correctAnswers = 0;

function findQuestion() {
	$('#b1').css('color','black');
	$('#b2').css('color','black');
	$('#b3').css('color','black');
	$('#b4').css('color','black');
	$('#correct').css('visibility','hidden');
	$('#next').css('visibility','hidden');
	$('#mapbutton').css('visibility','hidden');
	$('#map').css('visibility','hidden');
	  //assigns an integer between 1 and 193 to each of the four randomInt variables
	  var randomIntForQuestion = Math.floor(Math.random() * 193);
	  var randomInt1 = Math.floor(Math.random() * 193);
	  var randomInt2 = Math.floor(Math.random() * 193);
	  var randomInt3 = Math.floor(Math.random() * 193);
	  
	  correct = questions[randomIntForQuestion].capital
	  var incorrect1 = questions[randomInt1].capital
	  var incorrect2 = questions[randomInt2].capital
	  var incorrect3 = questions[randomInt3].capital
	  possibleAnswers = shuffle([incorrect1,incorrect2,incorrect3,correct]);
	  
	  nationName = questions[randomIntForQuestion].nation;
	  document.getElementById("nation").innerHTML = "What is the capital of " + nationName + "?"
	  document.getElementById("b1").innerHTML = possibleAnswers[0];
	  document.getElementById("b2").innerHTML = possibleAnswers[1];
	  document.getElementById("b3").innerHTML = possibleAnswers[2];
	  document.getElementById("b4").innerHTML = possibleAnswers[3];
	  document.getElementById("score").innerHTML = "Consecutive Correct Answers: " + correctAnswers;
	  }

$(document).ready(function() {
	$('#b1').click(function() {
		if (possibleAnswers[0] == correct)
			{
			correctAnswers += 1;
			$('#correct').css('visibility','visible');
			$('#b1').css('color','green');
			$('#next').css('visibility','visible');
			$('#mapbutton').css('visibility','visible');
			$('#mapbutton').click(function() {
				$('#map').css('visibility','visible');
				initializeMap();
			})
			$('#next').click(function() {
				findQuestion();
			})
			} else {
				$('#b1').css('color','red');
				correctAnswers = 0;
			}
   	 })
	$('#b2').click(function() {
		if (possibleAnswers[1] == correct)
			{
			correctAnswers += 1;
			$('#correct').css('visibility','visible');
			$('#b2').css('color','green');
			$('#next').css('visibility','visible');
			$('#mapbutton').css('visibility','visible');
			$('#mapbutton').click(function() {
				$('#map').css('visibility','visible');
				initializeMap();
			})
			$('#next').click(function() {
				findQuestion();
			})
			} else {
				$('#b2').css('color','red');
				correctAnswers = 0;
			}
   	 })
	$('#b3').click(function() {
		if (possibleAnswers[2] == correct)
			{
			correctAnswers += 1;
			$('#correct').css('visibility','visible');
			$('#b3').css('color','green');
			$('#next').css('visibility','visible');
			$('#mapbutton').css('visibility','visible');
			$('#mapbutton').click(function() {
				$('#map').css('visibility','visible');
				initializeMap();
			})
			$('#next').click(function() {
				findQuestion();
			})
			} else {
				$('#b3').css('color','red');
				correctAnswers = 0;
			}
   	 })
	$('#b4').click(function() {
		if (possibleAnswers[3] == correct) {
			correctAnswers += 1;
			$('#correct').css('visibility','visible');
			$('#b4').css('color','green');
			$('#next').css('visibility','visible');
			$('#mapbutton').css('visibility','visible');
			$('#mapbutton').click(function() {
				$('#map').css('visibility','visible');
				initializeMap();
			})
			$('#next').click(function() {
				findQuestion();
			})
			} else {
				$('#b4').css('color','red');
				correctAnswers = 0;
			}
   	 })
})

findQuestion();

var latitude, longitude;

function initializeMap() {
	var geocoder = new google.maps.Geocoder();
	var address = correct + ", " + nationName;
	console.log(address);

	geocoder.geocode({'address': address}, function(results, status) {

	  if (status == google.maps.GeocoderStatus.OK) {
	    latitude = results[0].geometry.location.lat();
	    longitude = results[0].geometry.location.lng();
	  } 
	}); 
	    var mapCanvas = document.getElementById('map');
	    var mapOptions = {
	        center: new google.maps.LatLng(latitude, longitude),
	        zoom: 8,
	        mapTypeId: google.maps.MapTypeId.ROADMAP
	    }
	    var map = new google.maps.Map(mapCanvas, mapOptions)
	}
	google.maps.event.addDomListener(window, 'load', initializeMap);
