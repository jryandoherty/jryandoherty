<div id="contactme" class="contactme">
 	<div class="container">
    <div class="row">
    <div class="col-md-6 intro">
        <h2>Get in touch</h2>

    </div>

</div>
<form role="form" method="post" id="reused_form">
  <div class="row">


<div class="col-md-5 col-md-offset-3  form-group">


  <div class="form-group">
      <label for="message">
          Message:</label>
      <textarea class="form-control" id="message" name="message" placeholder="" maxlength="6000" rows="7"></textarea>
  </div>

    <div class="form-group">
        <label for="name">
            Name:</label>
        <input type="text" class="form-control" id="name" name="name" required  maxlength="50">
    </div>
    <div class="form-group">
        <label for="company">
          Organization:</label>
        <input type="text" class="form-control" id="company" name="company"  maxlength="50">
    </div>

    <div class="form-group">
        <label for="email">
            Email:</label>
        <input type="text" class="form-control" id="email" name="email" required maxlength="50">
    </div>
    <div class="form-group">
        <label for="phone">
            Phone:</label>
        <input type="tel" class="form-control" id="phone" name="phone" maxlength="50">
    </div>

    <div class="col-sm-5  form-group">
        <button type="submit" class="btn btn-lg btn-block" id="btnContactUs">Send</button>
    </div>


                </div>




            </div>

        </form>

        <div id="success_message" style="width:100%; height:100%; display:none;">
            <h3>Thanks for your message!</h3>
            <p>I'll get back to you via email, and can always be reached at <a href="mailto:contact@jryandoherty.com">contact@jryandoherty.com</a></p>
        </div>
        <div id="error_message" style="width:100%; height:100%; display:none;">
            <h3>Error</h3>
            Sorry there was an error sending your form.
        </div>
    </div> <!-- /.container -->
</div> <!-- end contact section -->
