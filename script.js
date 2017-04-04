var geocoder, map, marker, options;

function codeAddress() {

  var address = document.getElementById("address").value;

  geocoder.geocode({
    'address': address
  }, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {

      map.setCenter(results[0].geometry.location);

      if (marker && marker.setMap) {
        marker.setMap(null);
      }

      marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location
      });

      if (results[0].geometry.viewport) {
        map.fitBounds(results[0].geometry.viewport);
      }

      checkZipcode();

    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}

function ShowHideDiv(chkResults) {
  var resultsCanvas = document.getElementById("result-canvas");
  resultsCanvas.style.display = chkResults.checked ? "block" : "none";
}

function checkZipcode(){
  var zipcode = document.getElementById("address").value;

  var participants, female, male, unknown; 
  var perFemale, perMale, perUnknown;

  var pIslander, hLatino, nAmerican, asian, white, black, oEthnicity, ethUnknown;
  var perPIslander, perHLatino, perNAmerican, perAsian, perWhite, perBlack, perEthnicity, perEthUnknown;

  var pResidentAlien, usCitizen, oCitizenStatus;
  var perResidentAlien, perCitizen, perCitizenStatus;

  var pubAssist, noPubAssist, pubAssistUnknown; 
  var perPubAssist, perNoPubAssist, perPubAssistUnknown;


  switch (zipcode) {

    case "10001":
      participants = 44;
      female = 22;
      male = 22;
      unknown = 0;

      perFemale = 50;
      perMale = 50; 
      perUnknown = 0;

      pIslander = 0; 
      hLatino = 16; 
      nAmerican = 0; 
      asian = 3;
      white = 1; 
      black = 21;
      oEthnicity = 3;
      ethUnknown = 0;

      perPIslander = 0; 
      perHLatino = 36;
      perNAmerican = 0;
      perAsian = 7;
      perWhite = 2;
      perBlack = 48; 
      perEthnicity = 7;
      perEthUnknown = 0;

      pResidentAlien = 2; 
      usCitizen = 42;
      oCitizenStatus = 0;

      perResidentAlien = 5; 
      perCitizen = 95;
      perCitizenStatus = 0;

      pubAssist = 20;
      noPubAssist = 24; 
      pubAssistUnknown = 0; 

      perPubAssist = 45;
      perNoPubAssist = 55; 
      perPubAssistUnknown = 0;
      break;

    case "10002":
      participants = 35;
      female = 19;
      male = 16;
      unknown = 0;

      perFemale = 54;
      perMale = 46; 
      perUnknown = 0;

      pIslander = 0; 
      hLatino = 1; 
      nAmerican = 0; 
      asian = 28;
      white = 6; 
      black = 0;
      oEthnicity = 0;
      ethUnknown = 0;

      perPIslander = 0; 
      perHLatino = 3;
      perNAmerican = 0;
      perAsian = 80;
      perWhite = 17;
      perBlack = 0; 
      perEthnicity = 0;
      perEthUnknown = 0;

      pResidentAlien = 2; 
      usCitizen = 33;
      oCitizenStatus = 0;

      perResidentAlien = 6; 
      perCitizen = 94;
      perCitizenStatus = 0;

      pubAssist = 2;
      noPubAssist = 33; 
      pubAssistUnknown = 0; 

      perPubAssist = 6;
      perNoPubAssist = 94; 
      perPubAssistUnknown = 0;
      break;

    case "10451":
      participants = 41;
      female = 21;
      male = 20;
      unknown = 0;

      perFemale = 51;
      perMale = 49; 
      perUnknown = 0;

      pIslander = 0; 
      hLatino = 22; 
      nAmerican = 0; 
      asian = 1;
      white = 0; 
      black = 15;
      oEthnicity = 2;
      ethUnknown = 1;

      perPIslander = 0; 
      perHLatino = 54;
      perNAmerican = 0;
      perAsian = 2;
      perWhite = 0;
      perBlack = 37; 
      perEthnicity = 5;
      perEthUnknown = 2;

      pResidentAlien = 3; 
      usCitizen = 38;
      oCitizenStatus = 0;

      perResidentAlien = 7; 
      perCitizen = 93;
      perCitizenStatus = 0;

      pubAssist = 12;
      noPubAssist = 29; 
      pubAssistUnknown = 0; 

      perPubAssist = 29;
      perNoPubAssist = 71; 
      perPubAssistUnknown = 0;
      break;

    case "10455":
      participants = 41;
      female = 17;
      male = 10;
      unknown = 0;

      perFemale = 63;
      perMale = 37; 
      perUnknown = 0;

      pIslander = 0; 
      hLatino = 5; 
      nAmerican = 0; 
      asian = 0;
      white = 0; 
      black = 20;
      oEthnicity = 2;
      ethUnknown = 0;

      perPIslander = 0; 
      perHLatino = 19;
      perNAmerican = 0;
      perAsian = 0;
      perWhite = 0;
      perBlack = 74; 
      perEthnicity = 7;
      perEthUnknown = 0;

      pResidentAlien = 1; 
      usCitizen = 25;
      oCitizenStatus = 1;

      perResidentAlien = 4; 
      perCitizen = 92;
      perCitizenStatus = 4;

      pubAssist = 7;
      noPubAssist = 20; 
      pubAssistUnknown = 0; 

      perPubAssist = 26;
      perNoPubAssist = 74; 
      perPubAssistUnknown = 0;
      break;

    case "10458":
      participants = 52;
      female = 25;
      male = 27;
      unknown = 0;

      perFemale = 48;
      perMale = 52; 
      perUnknown = 0;

      pIslander = 0; 
      hLatino = 24; 
      nAmerican = 0; 
      asian = 0;
      white = 1; 
      black = 23;
      oEthnicity = 3;
      ethUnknown = 1;

      perPIslander = 0; 
      perHLatino = 46;
      perNAmerican = 0;
      perAsian = 0;
      perWhite = 2;
      perBlack = 44; 
      perEthnicity = 6;
      perEthUnknown = 2;

      pResidentAlien = 3; 
      usCitizen = 48;
      oCitizenStatus = 1;

      perResidentAlien = 6; 
      perCitizen = 92;
      perCitizenStatus = 2;

      pubAssist = 19;
      noPubAssist = 33; 
      pubAssistUnknown = 0; 

      perPubAssist = 37;
      perNoPubAssist = 63; 
      perPubAssistUnknown = 0;
      break;

    case "10461":
      participants = 49;
      female = 26;
      male = 23;
      unknown = 0;

      perFemale = 53;
      perMale = 47; 
      perUnknown = 0;

      pIslander = 1; 
      hLatino = 21; 
      nAmerican = 1; 
      asian = 1;
      white = 1; 
      black = 18;
      oEthnicity = 5;
      ethUnknown = 1;

      perPIslander = 2; 
      perHLatino = 43;
      perNAmerican = 2;
      perAsian = 2;
      perWhite = 2;
      perBlack = 37; 
      perEthnicity = 10;
      perEthUnknown = 2;

      pResidentAlien = 1; 
      usCitizen = 48;
      oCitizenStatus = 0;

      perResidentAlien = 2; 
      perCitizen = 98;
      perCitizenStatus = 0;

      pubAssist = 21;
      noPubAssist = 28; 
      pubAssistUnknown = 0; 

      perPubAssist = 43;
      perNoPubAssist = 57; 
      perPubAssistUnknown = 0;
      break;

    case "10463":
      participants = 59;
      female = 33;
      male = 26;
      unknown = 0;

      perFemale = 56;
      perMale = 44; 
      perUnknown = 0;

      pIslander = 0; 
      hLatino = 36; 
      nAmerican = 0; 
      asian = 0;
      white = 1; 
      black = 18;
      oEthnicity = 3;
      ethUnknown = 0;

      perPIslander = 0; 
      perHLatino = 61;
      perNAmerican = 0;
      perAsian = 0;
      perWhite = 3;
      perBlack = 31; 
      perEthnicity = 5;
      perEthUnknown = 0;

      pResidentAlien = 3; 
      usCitizen = 54;
      oCitizenStatus = 2;

      perResidentAlien = 5; 
      perCitizen = 92;
      perCitizenStatus = 3;

      pubAssist = 20;
      noPubAssist = 39; 
      pubAssistUnknown = 0; 

      perPubAssist = 34;
      perNoPubAssist = 66; 
      perPubAssistUnknown = 0;
      break;

    case "10466":
      participants = 65;
      female = 39;
      male = 26;
      unknown = 0;

      perFemale = 60;
      perMale = 40; 
      perUnknown = 0;

      pIslander = 1; 
      hLatino = 14; 
      nAmerican = 0; 
      asian = 0;
      white = 0; 
      black = 50;
      oEthnicity = 0;
      ethUnknown = 0;

      perPIslander = 2; 
      perHLatino = 22;
      perNAmerican = 0;
      perAsian = 0;
      perWhite = 0;
      perBlack = 76; 
      perEthnicity = 0;
      perEthUnknown = 0;

      pResidentAlien = 3; 
      usCitizen = 62;
      oCitizenStatus = 0;

      perResidentAlien = 5; 
      perCitizen = 95;
      perCitizenStatus = 0;

      pubAssist = 17;
      noPubAssist = 48; 
      pubAssistUnknown = 0; 

      perPubAssist = 26;
      perNoPubAssist = 74; 
      perPubAssistUnknown = 0;
      break;

    case "10467":
      participants = 106;
      female = 65;
      male = 35;
      unknown = 0;

      perFemale = 61;
      perMale = 39; 
      perUnknown = 0;

      pIslander = 0; 
      hLatino = 51; 
      nAmerican = 1; 
      asian = 4;
      white = 1; 
      black = 47;
      oEthnicity = 2;
      ethUnknown = 0;

      perPIslander = 0; 
      perHLatino = 22;
      perNAmerican = 1;
      perAsian = 4;
      perWhite = 1;
      perBlack = 44; 
      perEthnicity = 2;
      perEthUnknown = 0;

      pResidentAlien = 10; 
      usCitizen = 94;
      oCitizenStatus = 2;

      perResidentAlien = 9; 
      perCitizen = 89;
      perCitizenStatus = 2;

      pubAssist = 33;
      noPubAssist = 73; 
      pubAssistUnknown = 0; 

      perPubAssist = 31;
      perNoPubAssist = 69; 
      perPubAssistUnknown = 0;
      break;

    case "10468":
      participants = 81;
      female = 46;
      male = 35;
      unknown = 0;

      perFemale = 57;
      perMale = 43; 
      perUnknown = 0;

      pIslander = 0; 
      hLatino = 35; 
      nAmerican = 0; 
      asian = 3;
      white = 0; 
      black = 36;
      oEthnicity = 7;
      ethUnknown = 0;

      perPIslander = 0; 
      perHLatino = 43;
      perNAmerican = 0;
      perAsian = 4;
      perWhite = 0;
      perBlack = 44; 
      perEthnicity = 9;
      perEthUnknown = 0;

      pResidentAlien = 2; 
      usCitizen = 79;
      oCitizenStatus = 0;

      perResidentAlien = 2; 
      perCitizen = 98;
      perCitizenStatus = 0;

      pubAssist = 23;
      noPubAssist = 58; 
      pubAssistUnknown = 0; 

      perPubAssist = 28;
      perNoPubAssist = 72; 
      perPubAssistUnknown = 0;
      break;

    case "10471":
      participants = 43;
      female = 24;
      male = 19;
      unknown = 0;

      perFemale = 56;
      perMale = 44; 
      perUnknown = 0;

      pIslander = 0; 
      hLatino = 27; 
      nAmerican = 0; 
      asian = 1;
      white = 2; 
      black = 12;
      oEthnicity = 1;
      ethUnknown = 0;

      perPIslander = 0; 
      perHLatino = 63;
      perNAmerican = 0;
      perAsian = 2;
      perWhite = 5;
      perBlack = 28; 
      perEthnicity = 2;
      perEthUnknown = 0;

      pResidentAlien = 2; 
      usCitizen = 41;
      oCitizenStatus = 0;

      perResidentAlien = 5; 
      perCitizen = 95;
      perCitizenStatus = 0;

      pubAssist = 17;
      noPubAssist = 26; 
      pubAssistUnknown = 0; 

      perPubAssist = 40;
      perNoPubAssist = 60; 
      perPubAssistUnknown = 0;
      break;

    case "11204":
      participants = 37;
      female = 17;
      male = 20;
      unknown = 0;

      perFemale = 46;
      perMale = 54; 
      perUnknown = 0;

      pIslander = 0; 
      hLatino = 0; 
      nAmerican = 0; 
      asian = 0;
      white = 36; 
      black = 0;
      oEthnicity = 1;
      ethUnknown = 0;

      perPIslander = 0; 
      perHLatino = 0;
      perNAmerican = 0;
      perAsian = 0;
      perWhite = 97;
      perBlack = 0; 
      perEthnicity = 3;
      perEthUnknown = 0;

      pResidentAlien = 1; 
      usCitizen = 36;
      oCitizenStatus = 0;

      perResidentAlien = 3; 
      perCitizen = 97;
      perCitizenStatus = 0;

      pubAssist = 19;
      noPubAssist = 18;
      pubAssistUnknown = 0; 

      perPubAssist = 51;
      perNoPubAssist = 49; 
      perPubAssistUnknown = 0;
      break;

    case "11210":
      participants = 36;
      female = 12;
      male = 24;
      unknown = 0;

      perFemale = 33;
      perMale = 67; 
      perUnknown = 0;

      pIslander = 0; 
      hLatino = 0; 
      nAmerican = 0; 
      asian = 0;
      white = 33; 
      black = 1;
      oEthnicity = 2;
      ethUnknown = 0;

      perPIslander = 0; 
      perHLatino = 0;
      perNAmerican = 0;
      perAsian = 0;
      perWhite = 92;
      perBlack = 3; 
      perEthnicity = 6;
      perEthUnknown = 0;

      pResidentAlien = 0; 
      usCitizen = 36;
      oCitizenStatus = 0;

      perResidentAlien = 0; 
      perCitizen = 100;
      perCitizenStatus = 0;

      pubAssist = 11;
      noPubAssist = 25; 
      pubAssistUnknown = 0; 

      perPubAssist = 31;
      perNoPubAssist = 69; 
      perPubAssistUnknown = 0;
      break;

    case "11211":
      participants = 34;
      female = 31;
      male = 3;
      unknown = 0;

      perFemale = 91;
      perMale = 9; 
      perUnknown = 0;

      pIslander = 0; 
      hLatino = 2; 
      nAmerican = 0; 
      asian = 1;
      white = 28; 
      black = 33;
      oEthnicity = 0;
      ethUnknown = 3;

      perPIslander = 0; 
      perHLatino = 6;
      perNAmerican = 0;
      perAsian = 3;
      perWhite = 0;
      perBlack = 82; 
      perEthnicity = 0;
      perEthUnknown = 8;

      pResidentAlien = 0; 
      usCitizen = 34;
      oCitizenStatus = 0;

      perResidentAlien = 0; 
      perCitizen = 100;
      perCitizenStatus = 0;

      pubAssist = 22;
      noPubAssist = 12; 
      pubAssistUnknown = 0; 

      perPubAssist = 65;
      perNoPubAssist = 35; 
      perPubAssistUnknown = 0;
      break;

    case "11213":
      participants = 38;
      female = 17;
      male = 21;
      unknown = 0;

      perFemale = 45;
      perMale = 55; 
      perUnknown = 0;

      pIslander = 0; 
      hLatino = 0; 
      nAmerican = 0; 
      asian = 0;
      white = 32; 
      black = 0;
      oEthnicity = 6;
      ethUnknown = 0;

      perPIslander = 0; 
      perHLatino = 0;
      perNAmerican = 0;
      perAsian = 0;
      perWhite = 84;
      perBlack = 0; 
      perEthnicity = 16;
      perEthUnknown = 0;

      pResidentAlien = 1; 
      usCitizen = 37;
      oCitizenStatus = 0;

      perResidentAlien = 3; 
      perCitizen = 97;
      perCitizenStatus = 0;

      pubAssist = 10;
      noPubAssist = 28;
      pubAssistUnknown = 0; 

      perPubAssist = 26;
      perNoPubAssist = 74; 
      perPubAssistUnknown = 0;
      break;

    case "11218":
      participants = 111;
      female = 97;
      male = 14;
      unknown = 0;

      perFemale = 87;
      perMale = 13; 
      perUnknown = 0;

      pIslander = 0; 
      hLatino = 1; 
      nAmerican = 0; 
      asian = 3;
      white = 95; 
      black = 6;
      oEthnicity = 6;
      ethUnknown = 0;

      perPIslander = 0; 
      perHLatino = 1;
      perNAmerican = 0;
      perAsian = 3;
      perWhite = 86;
      perBlack = 5; 
      perEthnicity = 5;
      perEthUnknown = 0;

      pResidentAlien = 8; 
      usCitizen = 102;
      oCitizenStatus = 1;

      perResidentAlien = 7; 
      perCitizen = 92;
      perCitizenStatus = 1;

      pubAssist = 51;
      noPubAssist = 60; 
      pubAssistUnknown = 0; 

      perPubAssist = 46;
      perNoPubAssist = 54; 
      perPubAssistUnknown = 0;
      break;

    case "11219":
      participants = 214;
      female = 182;
      male = 32;
      unknown = 0;

      perFemale = 85;
      perMale = 15; 
      perUnknown = 0;

      pIslander = 0; 
      hLatino = 1; 
      nAmerican = 0; 
      asian = 1;
      white = 205; 
      black = 0;
      oEthnicity = 6;
      ethUnknown = 1;

      perPIslander = 0; 
      perHLatino = 0;
      perNAmerican = 0;
      perAsian = 0;
      perWhite = 96;
      perBlack = 0; 
      perEthnicity = 3;
      perEthUnknown = 0;

      pResidentAlien = 2; 
      usCitizen = 212;
      oCitizenStatus = 0;

      perResidentAlien = 1; 
      perCitizen = 99;
      perCitizenStatus = 0;

      pubAssist = 112;
      noPubAssist = 102; 
      pubAssistUnknown = 0; 

      perPubAssist = 52;
      perNoPubAssist = 48; 
      perPubAssistUnknown = 0;
      break;

    case "11223":
      participants = 109;
      female = 53;
      male = 56;
      unknown = 0;

      perFemale = 49;
      perMale = 51; 
      perUnknown = 0;

      pIslander = 0; 
      hLatino = 1; 
      nAmerican = 0; 
      asian = 7;
      white = 95; 
      black = 1;
      oEthnicity = 5;
      ethUnknown = 0;

      perPIslander = 0; 
      perHLatino = 1;
      perNAmerican = 0;
      perAsian = 6;
      perWhite = 87;
      perBlack = 5; 
      perEthnicity = 5;
      perEthUnknown = 0;

      pResidentAlien = 6; 
      usCitizen = 102;
      oCitizenStatus = 1;

      perResidentAlien = 6; 
      perCitizen = 93;
      perCitizenStatus = 1;

      pubAssist = 20;
      noPubAssist = 89; 
      pubAssistUnknown = 0; 

      perPubAssist = 18;
      perNoPubAssist = 82; 
      perPubAssistUnknown = 0;
      break;

    case "11224":
      participants = 93;
      female = 53;
      male = 40;
      unknown = 0;

      perFemale = 57;
      perMale = 43; 
      perUnknown = 0;

      pIslander = 0; 
      hLatino = 14; 
      nAmerican = 0; 
      asian = 7;
      white = 4; 
      black = 60;
      oEthnicity = 8;
      ethUnknown = 0;

      perPIslander = 0; 
      perHLatino = 15;
      perNAmerican = 0;
      perAsian = 8;
      perWhite = 4;
      perBlack = 65; 
      perEthnicity = 9;
      perEthUnknown = 0;

      pResidentAlien = 6; 
      usCitizen = 86;
      oCitizenStatus = 1;

      perResidentAlien = 7; 
      perCitizen = 92;
      perCitizenStatus = 1;

      pubAssist = 28;
      noPubAssist = 65; 
      pubAssistUnknown = 0; 

      perPubAssist = 30;
      perNoPubAssist = 70; 
      perPubAssistUnknown = 0;
      break;

    case "11225":
      participants = 52;
      female = 52;
      male = 0;
      unknown = 0;

      perFemale = 100;
      perMale = 0; 
      perUnknown = 0;

      pIslander = 0; 
      hLatino = 0; 
      nAmerican = 0; 
      asian = 0;
      white = 52; 
      black = 0;
      oEthnicity = 0;
      ethUnknown = 0;

      perPIslander = 0; 
      perHLatino = 0;
      perNAmerican = 0;
      perAsian = 0;
      perWhite = 100;
      perBlack = 0; 
      perEthnicity = 0;
      perEthUnknown = 0;

      pResidentAlien = 0; 
      usCitizen = 52;
      oCitizenStatus = 0;

      perResidentAlien = 0; 
      perCitizen = 100;
      perCitizenStatus = 0;

      pubAssist = 22;
      noPubAssist = 30; 
      pubAssistUnknown = 0; 

      perPubAssist = 42;
      perNoPubAssist = 58; 
      perPubAssistUnknown = 0;
      break;
  
    case "11229":
      participants = 52;
      female = 32;
      male = 22;
      unknown = 0;

      perFemale = 62;
      perMale = 38; 
      perUnknown = 0;

      pIslander = 0; 
      hLatino = 2; 
      nAmerican = 0; 
      asian = 5;
      white = 39; 
      black = 2;
      oEthnicity = 3;
      ethUnknown = 1;

      perPIslander = 0; 
      perHLatino = 4;
      perNAmerican = 0;
      perAsian = 10;
      perWhite = 75;
      perBlack = 4; 
      perEthnicity = 6;
      perEthUnknown = 2;

      pResidentAlien = 3; 
      usCitizen = 49;
      oCitizenStatus = 0;

      perResidentAlien = 6; 
      perCitizen = 94;
      perCitizenStatus = 0;

      pubAssist = 5;
      noPubAssist = 47; 
      pubAssistUnknown = 0; 

      perPubAssist = 10;
      perNoPubAssist = 90; 
      perPubAssistUnknown = 0;
      break;

    case "11230":
      participants = 248;
      female = 194;
      male = 54;
      unknown = 0;

      perFemale = 78;
      perMale = 22; 
      perUnknown = 0;

      pIslander = 0; 
      hLatino = 1; 
      nAmerican = 0; 
      asian = 7;
      white = 216; 
      black = 2;
      oEthnicity = 17;
      ethUnknown = 5;

      perPIslander = 0; 
      perHLatino = 0;
      perNAmerican = 0;
      perAsian = 3;
      perWhite = 87;
      perBlack = 1; 
      perEthnicity = 7;
      perEthUnknown = 2;

      pResidentAlien = 3; 
      usCitizen = 245;
      oCitizenStatus = 0;

      perResidentAlien = 1; 
      perCitizen = 99;
      perCitizenStatus = 0;

      pubAssist = 42;
      noPubAssist = 206; 
      pubAssistUnknown = 0; 

      perPubAssist = 17;
      perNoPubAssist = 83; 
      perPubAssistUnknown = 0;
      break;

    case "11234":
      participants = 59;
      female = 29;
      male = 30;
      unknown = 0;

      perFemale = 49;
      perMale = 51; 
      perUnknown = 0;

      pIslander = 0; 
      hLatino = 8; 
      nAmerican = 0; 
      asian = 0;
      white = 37; 
      black = 10;
      oEthnicity = 4;
      ethUnknown = 0;

      perPIslander = 0; 
      perHLatino = 14;
      perNAmerican = 0;
      perAsian = 0;
      perWhite = 63;
      perBlack = 17; 
      perEthnicity = 6;
      perEthUnknown = 0;

      pResidentAlien = 1; 
      usCitizen = 58;
      oCitizenStatus = 0;

      perResidentAlien = 2; 
      perCitizen = 98;
      perCitizenStatus = 0;

      pubAssist = 2;
      noPubAssist = 57; 
      pubAssistUnknown = 0; 

      perPubAssist = 3;
      perNoPubAssist = 97; 
      perPubAssistUnknown = 0;
      break;

    case "11235":
      participants = 50;
      female = 17;
      male = 33;
      unknown = 0;

      perFemale = 34;
      perMale = 66; 
      perUnknown = 0;

      pIslander = 0; 
      hLatino = 7; 
      nAmerican = 0; 
      asian = 4;
      white = 36; 
      black = 2;
      oEthnicity = 1;
      ethUnknown = 0;

      perPIslander = 0; 
      perHLatino = 14;
      perNAmerican = 0;
      perAsian = 8;
      perWhite = 72;
      perBlack = 4; 
      perEthnicity = 2;
      perEthUnknown = 0;

      pResidentAlien = 1; 
      usCitizen = 48;
      oCitizenStatus = 1;

      perResidentAlien = 2; 
      perCitizen = 96;
      perCitizenStatus = 2;

      pubAssist = 4;
      noPubAssist = 46; 
      pubAssistUnknown = 0; 

      perPubAssist = 8;
      perNoPubAssist = 92; 
      perPubAssistUnknown = 0;
      break;

    case "11691":
      participants = 37;
      female = 12;
      male = 25;
      unknown = 0;

      perFemale = 32;
      perMale = 68; 
      perUnknown = 0;

      pIslander = 0; 
      hLatino = 0; 
      nAmerican = 0; 
      asian = 0;
      white = 37; 
      black = 0;
      oEthnicity = 0;
      ethUnknown = 0;

      perPIslander = 0; 
      perHLatino = 0;
      perNAmerican = 0;
      perAsian = 0;
      perWhite = 100;
      perBlack = 0; 
      perEthnicity = 0;
      perEthUnknown = 0;

      pResidentAlien = 0; 
      usCitizen = 37;
      oCitizenStatus = 0;

      perResidentAlien = 0; 
      perCitizen = 100;
      perCitizenStatus = 0;

      pubAssist = 3;
      noPubAssist = 34; 
      pubAssistUnknown = 0; 

      perPubAssist = 8;
      perNoPubAssist = 92; 
      perPubAssistUnknown = 0;
      break;

    case "11428":
      participants = 124;
      female = 74;
      male = 50;
      unknown = 0;

      perFemale = 60;
      perMale = 40; 
      perUnknown = 0;

      pIslander = 2; 
      hLatino = 1; 
      nAmerican = 0; 
      asian = 0;
      white = 117; 
      black = 0;
      oEthnicity = 4;
      ethUnknown = 0;

      perPIslander = 2; 
      perHLatino = 1;
      perNAmerican = 0;
      perAsian = 0;
      perWhite = 94;
      perBlack = 0; 
      perEthnicity = 3;
      perEthUnknown = 0;

      pResidentAlien = 0; 
      usCitizen = 124;
      oCitizenStatus = 0;

      perResidentAlien = 0; 
      perCitizen = 100;
      perCitizenStatus = 0;

      pubAssist = 71;
      noPubAssist = 54; 
      pubAssistUnknown = 0; 

      perPubAssist = 57;
      perNoPubAssist = 43; 
      perPubAssistUnknown = 0;
      break;

    case "11435":
      participants = 55;
      female = 5;
      male = 50;
      unknown = 0;

      perFemale = 9;
      perMale = 91; 
      perUnknown = 0;

      pIslander = 0; 
      hLatino = 0; 
      nAmerican = 0; 
      asian = 0;
      white = 50; 
      black = 0;
      oEthnicity = 5;
      ethUnknown = 0;

      perPIslander = 0; 
      perHLatino = 0;
      perNAmerican = 0;
      perAsian = 0;
      perWhite = 91;
      perBlack = 0; 
      perEthnicity = 9;
      perEthUnknown = 0;

      pResidentAlien = 0; 
      usCitizen = 55;
      oCitizenStatus = 0;

      perResidentAlien = 0; 
      perCitizen = 100;
      perCitizenStatus = 0;

      pubAssist = 19;
      noPubAssist = 36; 
      pubAssistUnknown = 0; 

      perPubAssist = 35;
      perNoPubAssist = 65; 
      perPubAssistUnknown = 0;
      break;

    case "11466":
      participants = 44;
      female = 44;
      male = 0;
      unknown = 0;

      perFemale = 100;
      perMale = 0; 
      perUnknown = 0;

      pIslander = 0; 
      hLatino = 0; 
      nAmerican = 0; 
      asian = 0;
      white = 44; 
      black = 0;
      oEthnicity = 0;
      ethUnknown = 0;

      perPIslander = 0; 
      perHLatino = 0;
      perNAmerican = 0;
      perAsian = 0;
      perWhite = 100;
      perBlack = 0; 
      perEthnicity = 0;
      perEthUnknown = 0;

      pResidentAlien = 0; 
      usCitizen = 44;
      oCitizenStatus = 0;

      perResidentAlien = 0; 
      perCitizen = 100;
      perCitizenStatus = 0;

      pubAssist = 35;
      noPubAssist = 9; 
      pubAssistUnknown = 0; 

      perPubAssist = 80;
      perNoPubAssist = 20; 
      perPubAssistUnknown = 0;
      break;

    case "11528":
      participants = 52;
      female = 2;
      male = 50;
      unknown = 0;

      perFemale = 4;
      perMale = 96; 
      perUnknown = 0;

      pIslander = 0; 
      hLatino = 0; 
      nAmerican = 0; 
      asian = 0;
      white = 46; 
      black = 0;
      oEthnicity = 6;
      ethUnknown = 0;

      perPIslander = 0; 
      perHLatino = 0;
      perNAmerican = 0;
      perAsian = 0;
      perWhite = 88;
      perBlack = 0; 
      perEthnicity = 12;
      perEthUnknown = 0;

      pResidentAlien = 1; 
      usCitizen = 51;
      oCitizenStatus = 0;

      perResidentAlien = 2; 
      perCitizen = 98;
      perCitizenStatus = 0;

      pubAssist = 21;
      noPubAssist = 31; 
      pubAssistUnknown = 0; 

      perPubAssist = 40;
      perNoPubAssist = 60; 
      perPubAssistUnknown = 0;
      break;

    case "12701":
      participants = 87;
      female = 49;
      male = 38;
      unknown = 0;

      perFemale = 56;
      perMale = 44; 
      perUnknown = 0;

      pIslander = 0; 
      hLatino = 0; 
      nAmerican = 0; 
      asian = 0;
      white = 83; 
      black = 0;
      oEthnicity = 2;
      ethUnknown = 2;

      perPIslander = 0; 
      perHLatino = 0;
      perNAmerican = 0;
      perAsian = 0;
      perWhite = 95;
      perBlack = 0; 
      perEthnicity = 2;
      perEthUnknown = 2;

      pResidentAlien = 0; 
      usCitizen = 87;
      oCitizenStatus = 0;

      perResidentAlien = 0; 
      perCitizen = 100;
      perCitizenStatus = 0;

      pubAssist = 18;
      noPubAssist = 69; 
      pubAssistUnknown = 0; 

      perPubAssist = 21;
      perNoPubAssist = 79; 
      perPubAssistUnknown = 0;
      break;

    case "12734":
      participants = 252;
      female = 170;
      male = 82;
      unknown = 0;

      perFemale = 67;
      perMale = 33; 
      perUnknown = 0;

      pIslander = 0; 
      hLatino = 0; 
      nAmerican = 0; 
      asian = 0;
      white = 243; 
      black = 0;
      oEthnicity = 4;
      ethUnknown = 5;

      perPIslander = 0; 
      perHLatino = 0;
      perNAmerican = 0;
      perAsian = 0;
      perWhite = 96;
      perBlack = 0; 
      perEthnicity = 2;
      perEthUnknown = 2;

      pResidentAlien = 0; 
      usCitizen = 252;
      oCitizenStatus = 0;

      perResidentAlien = 0; 
      perCitizen = 100;
      perCitizenStatus = 0;

      pubAssist = 61;
      noPubAssist = 191; 
      pubAssistUnknown = 0; 

      perPubAssist = 24;
      perNoPubAssist = 76; 
      perPubAssistUnknown = 0;
      break;

    case "12737":
      participants = 35;
      female = 34;
      male = 1;
      unknown = 0;

      perFemale = 97;
      perMale = 3; 
      perUnknown = 0;

      pIslander = 0; 
      hLatino = 0; 
      nAmerican = 0; 
      asian = 0;
      white = 35; 
      black = 0;
      oEthnicity = 0;
      ethUnknown = 0;

      perPIslander = 0; 
      perHLatino = 0;
      perNAmerican = 0;
      perAsian = 0;
      perWhite = 100;
      perBlack = 0; 
      perEthnicity = 0;
      perEthUnknown = 0;

      pResidentAlien = 2; 
      usCitizen = 33;
      oCitizenStatus = 0;

      perResidentAlien = 6; 
      perCitizen = 100;
      perCitizenStatus = 94;

      pubAssist = 20;
      noPubAssist = 15; 
      pubAssistUnknown = 0; 

      perPubAssist = 57;
      perNoPubAssist = 43; 
      perPubAssistUnknown = 0;
      break;

    case "12750":
      participants = 37;
      female = 36;
      male = 1;
      unknown = 0;

      perFemale = 97;
      perMale = 3; 
      perUnknown = 0;

      pIslander = 0; 
      hLatino = 0; 
      nAmerican = 0; 
      asian = 0;
      white = 37; 
      black = 0;
      oEthnicity = 0;
      ethUnknown = 0;

      perPIslander = 0; 
      perHLatino = 0;
      perNAmerican = 0;
      perAsian = 0;
      perWhite = 100;
      perBlack = 0; 
      perEthnicity = 0;
      perEthUnknown = 0;

      pResidentAlien = 0; 
      usCitizen = 37;
      oCitizenStatus = 0;

      perResidentAlien = 0; 
      perCitizen = 100;
      perCitizenStatus = 0;

      pubAssist = 21;
      noPubAssist = 16; 
      pubAssistUnknown = 0; 

      perPubAssist = 57;
      perNoPubAssist = 43; 
      perPubAssistUnknown = 0;
      break;

    case "12754":
      participants = 134;
      female = 64;
      male = 70;
      unknown = 0;

      perFemale = 48;
      perMale = 52; 
      perUnknown = 0;

      pIslander = 2; 
      hLatino = 0; 
      nAmerican = 0; 
      asian = 0;
      white = 127; 
      black = 0;
      oEthnicity = 4;
      ethUnknown = 1;

      perPIslander = 1; 
      perHLatino = 0;
      perNAmerican = 0;
      perAsian = 0;
      perWhite = 95;
      perBlack = 0; 
      perEthnicity = 3;
      perEthUnknown = 1;

      pResidentAlien = 1; 
      usCitizen = 133;
      oCitizenStatus = 0;

      perResidentAlien = 1; 
      perCitizen = 99;
      perCitizenStatus = 0;

      pubAssist = 27;
      noPubAssist = 107; 
      pubAssistUnknown = 0; 

      perPubAssist = 20;
      perNoPubAssist = 80; 
      perPubAssistUnknown = 0;
      break;

    case "12758":
      participants = 82;
      female = 50;
      male = 32;
      unknown = 0;

      perFemale = 61;
      perMale = 39; 
      perUnknown = 0;

      pIslander = 0; 
      hLatino = 0; 
      nAmerican = 0; 
      asian = 0;
      white = 76; 
      black = 0;
      oEthnicity = 6;
      ethUnknown = 0;

      perPIslander = 0; 
      perHLatino = 0;
      perNAmerican = 0;
      perAsian = 0;
      perWhite = 93;
      perBlack = 0; 
      perEthnicity = 7;
      perEthUnknown = 0;

      pResidentAlien = 0; 
      usCitizen = 82;
      oCitizenStatus = 0;

      perResidentAlien = 0; 
      perCitizen = 100;
      perCitizenStatus = 0;

      pubAssist = 24;
      noPubAssist = 58; 
      pubAssistUnknown = 0; 

      perPubAssist = 29;
      perNoPubAssist = 71; 
      perPubAssistUnknown = 0;
      break;

    case "12764":
      participants = 64;
      female = 61;
      male = 3;
      unknown = 0;

      perFemale = 95;
      perMale = 5; 
      perUnknown = 0;

      pIslander = 0; 
      hLatino = 0; 
      nAmerican = 0; 
      asian = 0;
      white = 62; 
      black = 0;
      oEthnicity = 2;
      ethUnknown = 0;

      perPIslander = 0; 
      perHLatino = 0;
      perNAmerican = 0;
      perAsian = 0;
      perWhite = 97;
      perBlack = 0; 
      perEthnicity = 3;
      perEthUnknown = 0;

      pResidentAlien = 0; 
      usCitizen = 64;
      oCitizenStatus = 0;

      perResidentAlien = 0; 
      perCitizen = 100;
      perCitizenStatus = 0;

      pubAssist = 5;
      noPubAssist = 59; 
      pubAssistUnknown = 0; 

      perPubAssist = 8;
      perNoPubAssist = 92; 
      perPubAssistUnknown = 0;
      break;

    case "12768":
      participants = 63;
      female = 1;
      male = 62;
      unknown = 0;

      perFemale = 2;
      perMale = 98; 
      perUnknown = 0;

      pIslander = 0; 
      hLatino = 0; 
      nAmerican = 0; 
      asian = 0;
      white = 61; 
      black = 0;
      oEthnicity = 1;
      ethUnknown = 1;

      perPIslander = 0; 
      perHLatino = 0;
      perNAmerican = 0;
      perAsian = 0;
      perWhite = 96;
      perBlack = 0; 
      perEthnicity = 2;
      perEthUnknown = 2;

      pResidentAlien = 0; 
      usCitizen = 63;
      oCitizenStatus = 0;

      perResidentAlien = 0; 
      perCitizen = 100;
      perCitizenStatus = 0;

      pubAssist = 23;
      noPubAssist = 40; 
      pubAssistUnknown = 0; 

      perPubAssist = 37;
      perNoPubAssist = 63; 
      perPubAssistUnknown = 0;
      break;

    case "12779":
      participants = 242;
      female = 183;
      male = 59;
      unknown = 0;

      perFemale = 76;
      perMale = 24; 
      perUnknown = 0;

      pIslander = 0; 
      hLatino = 0; 
      nAmerican = 0; 
      asian = 0;
      white = 239; 
      black = 0;
      oEthnicity = 3;
      ethUnknown = 0;

      perPIslander = 0; 
      perHLatino = 0;
      perNAmerican = 0;
      perAsian = 0;
      perWhite = 99;
      perBlack = 0; 
      perEthnicity = 1;
      perEthUnknown = 0;

      pResidentAlien = 1; 
      usCitizen = 241;
      oCitizenStatus = 0;

      perResidentAlien = 0; 
      perCitizen = 100;
      perCitizenStatus = 0;

      pubAssist = 155;
      noPubAssist = 87; 
      pubAssistUnknown = 0; 

      perPubAssist = 64;
      perNoPubAssist = 36; 
      perPubAssistUnknown = 0;
      break;

    case "12783":
      participants = 201;
      female = 66;
      male = 135;
      unknown = 0;

      perFemale = 33;
      perMale = 67; 
      perUnknown = 0;

      pIslander = 0; 
      hLatino = 0; 
      nAmerican = 2; 
      asian = 0;
      white = 195; 
      black = 0;
      oEthnicity = 3;
      ethUnknown = 1;

      perPIslander = 0; 
      perHLatino = 0;
      perNAmerican = 1;
      perAsian = 0;
      perWhite = 97;
      perBlack = 0; 
      perEthnicity = 1;
      perEthUnknown = 0;

      pResidentAlien = 4; 
      usCitizen = 197;
      oCitizenStatus = 0;

      perResidentAlien = 2; 
      perCitizen = 98;
      perCitizenStatus = 0;

      pubAssist = 77;
      noPubAssist = 124; 
      pubAssistUnknown = 0; 

      perPubAssist = 38;
      perNoPubAssist = 62; 
      perPubAssistUnknown = 0;
      break;

    case "12788":
      participants = 83;
      female = 39;
      male = 44;
      unknown = 0;

      perFemale = 47;
      perMale = 53; 
      perUnknown = 0;

      pIslander = 0; 
      hLatino = 0; 
      nAmerican = 0; 
      asian = 0;
      white = 81; 
      black = 0;
      oEthnicity = 2;
      ethUnknown = 0;

      perPIslander = 0; 
      perHLatino = 0;
      perNAmerican = 0;
      perAsian = 0;
      perWhite = 98;
      perBlack = 0; 
      perEthnicity = 0;
      perEthUnknown = 2;

      pResidentAlien = 0; 
      usCitizen = 83;
      oCitizenStatus = 0;

      perResidentAlien = 0; 
      perCitizen = 100;
      perCitizenStatus = 0;

      pubAssist = 35;
      noPubAssist = 48; 
      pubAssistUnknown = 0; 

      perPubAssist = 42;
      perNoPubAssist = 58; 
      perPubAssistUnknown = 0;
      break;

    case "12789":
      participants = 272;
      female = 115;
      male = 157;
      unknown = 0;

      perFemale = 42;
      perMale = 58; 
      perUnknown = 0;

      pIslander = 0; 
      hLatino = 0; 
      nAmerican = 0; 
      asian = 0;
      white = 262; 
      black = 0;
      oEthnicity = 6;
      ethUnknown = 4;

      perPIslander = 0; 
      perHLatino = 0;
      perNAmerican = 0;
      perAsian = 0;
      perWhite = 96;
      perBlack = 0; 
      perEthnicity = 2;
      perEthUnknown = 1;

      pResidentAlien = 1; 
      usCitizen = 271;
      oCitizenStatus = 0;

      perResidentAlien = 0; 
      perCitizen = 100;
      perCitizenStatus = 0;

      pubAssist = 70;
      noPubAssist = 202; 
      pubAssistUnknown = 0; 

      perPubAssist = 26;
      perNoPubAssist = 74; 
      perPubAssistUnknown = 0;
      break;
  }

  if (zipcode == "New York City, New York") {

  } else {
    document.getElementById("result-content").innerHTML = "<h3>Result:</h3>" + 
      "ZipCode: " + zipcode +
      "<br/>Participants: " + participants + 
      "<br/>Female: " + female + " (" + perFemale + "%)" + 
      "<br/>Male: " + male + " (" + perMale + "%)" + 
      "<br/>Gender Unknown: " + unknown + " (" + perUnknown + "%)" + 
      "<br/>Pacific Islander: " + pIslander + " (" + perPIslander + "%)" + 
      "<br/>Hispanic Latino: " + hLatino + " (" + perHLatino + "%)" + 
      "<br/>Native American: " + nAmerican + " (" + perNAmerican + "%)" + 
      "<br/>Asian: " + asian + " (" + perAsian + "%)" + 
      "<br/>Caucasian: " + white + " (" + perWhite + "%)" + 
      "<br/>African: " + black + " (" + perBlack + "%)" + 
      "<br/>Other Ethnicity: " + oEthnicity + " (" + perEthnicity + "%)" + 
      "<br/>Ethnicity Unknown: " + ethUnknown + " (" + perEthUnknown + "%)" + 
      "<br/>Permanent Resident Alien: " + pResidentAlien + " (" + perResidentAlien + "%)" + 
      "<br/>US Citizen: " + usCitizen + " (" + perCitizen + "%)" + 
      "<br/>Other Citizen Status: " + oCitizenStatus + " (" + perCitizenStatus + "%)" + 
      "<br/>Receives Public Assistance: " + pubAssist + " (" + perPubAssist + "%)" + 
      "<br/>No Public Assistance: " + noPubAssist + " (" + perNoPubAssist + "%)";
  }
}

function importData() {
      d3.json("nyc_zipcode.json", function(data) {
            console.log(data);
      })
}

function initialize() {
  geocoder = new google.maps.Geocoder();
  map = new google.maps.Map(
    document.getElementById("map-canvas"), {
      scrollwheel: false,
      disableDoubleClickZoom: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    google.maps.event.addDomListener(document.getElementById('btn'), 'click', codeAddress);
  codeAddress();

}
google.maps.event.addDomListener(window, "load", initialize);