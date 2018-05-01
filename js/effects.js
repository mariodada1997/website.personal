$(document).ready(function() {
      $("#languages").hide();

      $("#project1").click(function(){
          $("#languages").show();
          $("#short-movies").hide();
          $("#robotics").hide();
          $("#marios-tasters").hide();
          $("#taekwondo").hide();
          $("#green-club").hide();
      });

      $("#close1").click(function(){
          $("#languages").hide();
      });

      $("#robotics").hide();

      $("#project2").click(function(){
          $("#robotics").show();
          $("#short-movies").hide();
          $("#languages").hide();
          $("#marios-tasters").hide();
          $("#taekwondo").hide();
          $("#green-club").hide();
      });

      $("#close2").click(function(){
          $("#robotics").hide();
      });

      $("#short-movies").hide();

      $("#project3").click(function(){
          $("#short-movies").show();
          $("#robotics").hide();
          $("#languages").hide();
          $("#marios-tasters").hide();
          $("#taekwondo").hide();
          $("#green-club").hide();
      });

      $("#close3").click(function(){
          $("#short-movies").hide();
      });

      $("#marios-tasters").hide();
      
      $("#project4").click(function(){
          $("#marios-tasters").show();
          $("#robotics").hide();
          $("#short-movies").hide();
          $("#languages").hide();
          $("#taekwondo").hide();
          $("#green-club").hide();
      });

      $("#close4").click(function(){
          $("#marios-tasters").hide();
      });

      $("#taekwondo").hide();

      $("#project5").click(function(){
          $("#taekwondo").show();
          $("#robotics").hide();
          $("#short-movies").hide();
          $("#languages").hide();
          $("#marios-tasters").hide();
          $("#green-club").hide();
      });

      $("#close5").click(function(){
          $("#taekwondo").hide();
      });

      $("#green-club").hide();

      $("#project6").click(function(){
          $("#green-club").show();
          $("#robotics").hide();
          $("#short-movies").hide();
          $("#languages").hide();
          $("#marios-tasters").hide();
          $("#taekwondo").hide();
      });

      $("#close6").click(function(){
          $("#green-club").hide();
      });
      
      $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
      });

      $('#hide-div').css('display', 'none');
      $('#hide-div').delay(500).fadeIn(1000);


      $('.menu-item').click(function(event) {
          event.preventDefault();
          newLocation = this.href;
          $('#hide-div').fadeOut(1000, newpage);
      });
    

      function newpage() {
          window.location = newLocation;
      }
      $('#hide-div2').css('display', 'none');
      $('#hide-div2').delay(1000).fadeIn(1500);

      $('.menu-item').click(function(event) {
          event.preventDefault();
          newLocation = this.href;
          $('#hide-div2').fadeOut(1500, newpage);
      });

      function newpage() {
          window.location = newLocation;
      }
      $('#hide-div3').css('display', 'none');
      $('#hide-div3').delay(1500).fadeIn(2000);

      $('.menu-item').click(function(event) {
          event.preventDefault();
          newLocation = this.href;
          $('#hide-div3').fadeOut(2000, newpage);
      });

      function newpage() {
          window.location = newLocation;
      }
      $('#hide-div4').css('display', 'none');
      $('#hide-div4').delay(2000).fadeIn(2500);

      $('.menu-item').click(function(event) {
          event.preventDefault();
          newLocation = this.href;
          $('#hide-div4').fadeOut(2500, newpage);
      });

      function newpage() {
          window.location = newLocation;
      }
      $('#hide-div5').css('display', 'none');
      $('#hide-div5').delay(2500).fadeIn(3000);

      $('.menu-item').click(function(event) {
          event.preventDefault();
          newLocation = this.href;
          $('#hide-div5').fadeOut(3000, newpage);
      });

      function newpage() {
          window.location = newLocation;
      }
      $('#hide-div6').css('display', 'none');
      $('#hide-div6').delay(3000).fadeIn(3500);

      $('.menu-item').click(function(event) {
          event.preventDefault();
          newLocation = this.href;
          $('#hide-div6').fadeOut(3500, newpage);
      });

      function newpage() {
          window.location = newLocation;
      }
      $('#hide-div7').css('display', 'none');
      $('#hide-div7').delay(500).fadeIn(1000);

      $('.menu-item').click(function(event) {
          event.preventDefault();
          newLocation = this.href;
          $('#hide-div7').fadeOut(1000, newpage);
      });

      function newpage() {
          window.location = newLocation;
      }

  });