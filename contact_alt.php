<div id="contactme" class="contactme">
 	<div class="container">
    <div class="row">
      <div class="col-md-12">
          <h2>Get in touch</h2>
      </div>
    </div>
<form method="post" id="reused_form">
<div class="row">

<div class="col-md-5 col-offset-2 form-group">

  <div class="form-group">
      <label for="message">
          Message:</label>
      <textarea class="form-control" id="message" name="message" placeholder="" maxlength="6000" rows="7"></textarea>
  </div>
</div>
<div class="col-md-5 col-md-offset-1 form-group">
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

    <div class="form-group">
        <button type="submit" class="btn btn-lg btn-block" id="btnContactUs">Send</button>
    </div>

  </div><!-- end from group -->

</div><!-- end row -->

</form>

<div id="success_message" style="width:100%; height:100%; display:none;">
    <h3>Thanks for your message!</h3>
    <p>I'll get back to you as soon as possible.</p>
</div>
<div id="error_message" style="width:100%; height:100%; display:none;">
    <h3>Error</h3>
    Sorry there was an error sending your form.
</div>
    </div> <!-- /.container -->
</div> <!-- end contact section -->
