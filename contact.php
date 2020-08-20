<div id="contactme" class="contactme">
 	<div class="container">
    <div class="row">
    <div class="col-md-12 intro">
        <h2>Get in touch</h2>
        <p>I'd love to hear from you about your design project. Drop me a line using this form and I'll get back to you as soon as possible.</p>
    </div>

</div>
<form role="form" method="post" id="reused_form">
  <div class="row">


<div class="col-sm-6 form-group">

    <div class="form-group">
        <label for="name">
            Name:</label>
        <input type="text" class="form-control" id="name" name="name" required  maxlength="50">
    </div>
    <div class="form-group">
        <label for="company">
          Company/Organization:</label>
        <input type="text" class="form-control" id="company" name="company"  maxlength="50">
    </div>

    <div class="form-group">
        <label for="website">
          Website:</label>
        <input type="text" class="form-control" id="website" name="website"  maxlength="50">
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
                  <label for="message">
                      Message:</label>
                  <textarea class="form-control" id="message" name="message" placeholder="Briefly describe your project" maxlength="6000" rows="7"></textarea>
              </div>

                </div>
                  <div class="col-sm-6 form-group">

                  <div>
                    <h3>How would you best describe yourself:</h3>
                      <div class="switch-field">
                        <input type="radio" id="radio-three" name="customer" value="small business">
                        <label for="radio-three">A small business</label>
                        <input type="radio" id="radio-four" name="customer" value="individual">
                        <label for="radio-four">An individual</label>
                        <input type="radio" id="radio-five" name="customer" value="non-profit">
                        <label for="radio-five">A non-profit organization</label>
                      </div>
                  </div>


                  <div class="checkbox">
                      <h3>Click any service you are looking for:</h3>
                    <label>
                      <input type="checkbox" id="web-design" name="web-design" value="yes" class="toggle"><span>Website design</span>
                    </label>

                    <label>
                        <input type="checkbox" id="logo" name="logo" value="yes" class="toggle"><span>Logo design</span>
                    </label>

                    <label>
                        <input type="checkbox" id="email-marketing" name="email-marketing" value="yes" class="toggle"><span>Email Marketing</span>
                    </label>

                    <label>
                        <input type="checkbox" id="Wordpress-help" name="Wordpress-help" value="yes" class="toggle"><span>Help with a Wordpress site</span>
                    </label>

                    <label>
                        <input type="checkbox" id="Wix-help" name="Wix-help" value="yes" class="toggle"><span>Help with a Wix/Squarespace site</span>
                    </label>

                  </div>

                </div>

                <div class="col-sm-5  form-group">
                    <button type="submit" class="btn btn-lg btn-block" id="btnContactUs">Send</button>
                </div>

            </div>

        </form>

        <div id="success_message" style="width:100%; height:100%; display:none;">
            <h3>Thanks for getting in touch!</h3>
            <p>I'll be in touch via email, and can always be reached at <a href="mailto:contact@jryandoherty.com">contact@jryandoherty.com</a></p>
        </div>
        <div id="error_message" style="width:100%; height:100%; display:none;">
            <h3>Error</h3>
            Sorry there was an error sending your form.
        </div>
    </div> <!-- /.container -->
</div> <!-- end contact section -->
