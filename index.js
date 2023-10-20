$('.character').hover(
    function() {
      // Mauszeiger schwebt über dem Element
      $(this).hide(); // Verbergen Sie das aktuelle Element
    },
    function() {
      // Mauszeiger verlässt das Element
      $(this).show(); // Zeigen Sie das aktuelle Element erneut
    }
  );