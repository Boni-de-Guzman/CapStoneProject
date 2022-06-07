$(document).ready(function() {
    $('#search-bar').keyup(function(event) {
       $('#result').html('');
        var searchField = $('#search-bar').val();
        var expression = new RegExp(searchField, "i");
        $.getJSON('db.json',function(data) {
            $.each(data, function(key, value) {
                if(searchField==""){
               $('#update').html("");  
                  return;               
                         }
                if (value.name.search(expression) != -1)
                {
                 $('#result').append('<div class ="result-page"><img src="'+value.image+'" height="250" width="150" class="img-thumbnail" /><br>'+value.name+'<br>'+value.price+'<br><button class="btn btn--primary ADD_TO_CART">Add to Cart</button></div>');
                }
        });
    });
});
});
