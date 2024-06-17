// Wait for document for fully load before beginning all JS Code
// Matthew Burke 06/2024
$(document).ready(function() {

//Function to pull in repeating HTML components with dynamic relative pathing
// Navbar
    function loadNavbar() {
      // Determine the current file path
      var path = window.location.pathname;
      var directoryLevel = (path.match(/\//g) || []).length - 1; // Adjust for leading slash

      // Adjust the relative path to the navbar.html
      var relativePath = '';
      for (var i = 1; i < directoryLevel; i++) {
        relativePath += '../';
      }
      relativePath += 'navbar.html';
      //Check it is working
      console.log("Loading navbar from: ", relativePath);

      // Load the navbar using the determined path
      $("#navbar-placeholder").load(relativePath, function(response, status, xhr) {
        if (status == "error") {
          var msg = "Sorry but there was an error: ";
          $("#navbar-placeholder").html(msg + xhr.status + " " + xhr.statusText);
        } else {
            
            //Build adjustable relative pathing for any static relative HTML links / image links
              // Adjust image paths after loading the navbar
              $("#navbar-placeholder img[data-src]").each(function() {
                var img = $(this);
                var src = img.data('src');

                // Build correct path to the image
                var adjustedSrc = '';
                  for (var i = 1; i < directoryLevel; i++) {
                    adjustedSrc += '../';
                  }
                  adjustedSrc += src;
                // console.log to check working
              // console.log("Original src: ", src);
              // console.log("Adjusted src: ", adjustedSrc);

                img.attr('src', adjustedSrc);
              });
              //Adjust links based on relative path after loading navbar
              $("#navbar-placeholder a[data-href]").each(function() {
                var link = $(this);
                var href = link.data('href');

                var adjustedHref = '';
                for (var i = 1; i < directoryLevel; i++) {
                  adjustedHref += '../';
                }
                adjustedHref += href;
                // console.log to check working
              // console.log("Original href: ", href);
              // console.log("Adjusted href: ", adjustedHref);

                link.attr('href', adjustedHref);
              });
            }
          });
          //Confirm NavBar has loaded successfully
          console.log("Navbar loaded successfully.");
      }

      // Load the navbar and run the logic after it is loaded
  loadNavbar();
    
    //Repeat for Footer
    function loadFooter() {
        // Determine the current file path
        var path = window.location.pathname;
        var directoryLevel = (path.match(/\//g) || []).length - 1; // Adjust for leading slash

        // Adjust the relative path to the footer.html
        var relativePath = '';
        for (var i = 1; i < directoryLevel; i++) {
          relativePath += '../';
        }
        relativePath += 'footer.html';

        console.log("Loading footer from: ", relativePath);

        // Load the footer using the determined path
        $("#footer-placeholder").load(relativePath, function(response, status, xhr) {
          if (status == "error") {
            var msg = "Sorry but there was an error: ";
            $("#footer-placeholder").html(msg + xhr.status + " " + xhr.statusText);
          } else {
            console.log("Footer loaded successfully.");

            // Adjust image paths after loading the footer
            $("#footer-placeholder img[data-src]").each(function() {
              var img = $(this);
              var src = img.data('src');

              // Build the correct path to the image
              var adjustedSrc = '';
              for (var i = 1; i < directoryLevel; i++) {
                adjustedSrc += '../';
              }
              adjustedSrc += src;
              // console.log to check working
              //console.log("Original src: ", src);
              //console.log("Adjusted src: ", adjustedSrc);

              img.attr('src', adjustedSrc);
            });
            //Adjust links based on relative path after loading footer
            $("#footer-placeholder a[data-href]").each(function() {
                var link = $(this);
                var href = link.data('href');
  
                var adjustedHref = '';
                for (var i = 1; i < directoryLevel; i++) {
                  adjustedHref += '../';
                }
                adjustedHref += href;
                // console.log to check working
                //console.log("Original href: ", href);
                //console.log("Adjusted href: ", adjustedHref);
  
                link.attr('href', adjustedHref);
              });
          }
        });
      }

      loadFooter();





 







});
