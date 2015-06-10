$(document).ready(function(){
  Stripe.setPublishableKey($('meta[name="stripe-key"]').attr('content'));
  //Watch for a form submission:
  $("#form-submit-btn").click(function(event){
    event.preventDefault();
    $('input[type=submit]').prop('disabled', true);
    var error = false;
    var ccNum = $('#card_number').vall(),
        cvcNum =$('#card_code').vall(),
        expMonth = $('#card_month').vall(),
        expYear =$('#card_year').vall();
    
    if (!error){
      //Get the stripe token:
       Stripe.createToken({
         number: ccNum,
         cvc: cvcNum,
         exp_month: expMonth,
         exp_year: expYear
       },striperesponseHandler);
    }
    return false;
  }); // form submission
  
  function stripeResponseHandler(status, response){
    // Get reference to the form 
    var f = $("#new user");
    
    // Get the token from the response:
    var token = response.id;
    
    //Add the token to the form:
    f.append('<input type="hidden" name= "user[stripe_card_token]" value" ' + token + '"/>');
    
    // Submit the form 
    f.get(0).submit();
  }
});