var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];


$(document).ready(function(){

  var active = $("#activeChannels");
  var inactive = $("#inactiveChannels");

  channels.map(function (channel){

    $.getJSON('https://wind-bow.glitch.me/twitch-api/streams/'+channel+'?callback=?', function(data) {
    if (data.stream && data.stream !== "null" && data.stream !== "undefined"){
      var ac = $("<div></div>").attr("id", "channels");
      $.getJSON('https://wind-bow.glitch.me/twitch-api/channels/'+channel+'?callback=?', function(chdata) {

        var p = $("<p></p>").attr("id", "link");
        var logo = $('<img>').attr("src",chdata.logo).addClass("logo");
        var head = $('<h3></h3>').text(chdata.display_name).addClass("rem head");
        var li = $("<a></a>").attr("href",chdata.url).text("@"+chdata.name).addClass("rem link");
        p.append(li);
        ac.append(head);
        ac.append(logo);
        ac.append(p);
        active.append(ac);
      });

   }else{
     var ac = $("<div></div>").attr("id", "channels");
     $.getJSON('https://wind-bow.glitch.me/twitch-api/channels/'+channel+'?callback=?', function(chdata) {

       var logo = $('<img>').attr("src",chdata.logo).addClass("logo");
       var head = $('<h3></h3>').text(chdata.display_name).addClass("rem head");
       var p = $("<p></p>").attr("id", "link");
       var li = $("<a></a>").attr("href",chdata.url).text("@"+chdata.name).addClass("rem link");
       p.append(li);
       ac.append(head);
       ac.append(logo);
       ac.append(p);
       inactive.append(ac);
     });
    }
   });
  });

  $("#online").click(function(){
    $("#activeChannels").children().css("display", "flex");
    $("#inactiveChannels").children().css("display", "none");
    $("[id=channels]").css("backgroundColor","lightgreen");
  });

  $("#offline").click(function(){
    $("#inactiveChannels").children().css("display", "flex");
    $("#activeChannels").children().css("display", "none");
    $("[id=channels]").css("backgroundColor","#ff8080");
  });

  $("#all").click(function(){
    $("#inactiveChannels").children().css("display", "flex");
    $("#activeChannels").children().css("display", "flex");
    $("[id=channels]").css("backgroundColor","lightblue");
  });
});