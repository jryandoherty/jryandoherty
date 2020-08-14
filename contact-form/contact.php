<div id="contactme" class="contactme">
 	<div class="container">
    <div class="row">
    <div class="col-md-12 intro">
        <h2>Get in touch</h2>
        <p>Send us your message and we will get back to you as soon as possible</p>
    </div>

</div>
<form role="form" method="post" id="reused_form">
            <div class="row">


<div class="col-sm-6 form-group">

                <div class="form-group">
                    <label for="name">
                        Name:</label>
                    <input type="text" class="form-control" id="firstname" name="firstname" required  maxlength="50">
                </div>
                <div class="form-group">
                    <label for="name">
                      Company/Organization:</label>
                    <input type="text" class="form-control" id="lastname" name="lastname"  maxlength="50">
                </div>

                <div class="form-group">
                    <label for="name">
                      Website:</label>
                    <input type="text" class="form-control" id="lastname" name="lastname"  maxlength="50">
                </div>

                <div class="form-group">
                    <label for="email">
                        Email:</label>
                    <input type="text" class="form-control" id="email" name="email" required maxlength="50">
                </div>
                <div class="form-group">
                    <label for="email">
                        Phone:</label>
                    <input type="tel" class="form-control" id="phone" name="phone" maxlength="50">
                </div>


                      <div class="form-group">
                              <label for="name">
                                  Message:</label>
                              <textarea class="form-control" type="textarea" id="message" name="message" placeholder="Briefly describe your project" maxlength="6000" rows="7"></textarea>
                          </div>

                            </div>
                              <div class="col-sm-6 form-group">

                              <div>
                                <h3>How would you best describe yourself:.</h3>
                                  <div class="switch-field">
                                    <input type="radio" id="radio-three" name="switch-two" value="yes" autocomplete="off">
                                    <label for="radio-three">A small business</label>
                                    <input type="radio" id="radio-four" name="switch-two" value="maybe" autocomplete="off">
                                    <label for="radio-four">An individual</label>
                                    <input type="radio" id="radio-five" name="switch-two" value="no" autocomplete="off">
                                    <label for="radio-five">A non-profit organization</label>
                                  </div>
                              </div>



                              <p>Click any service you are looking for:</p>
                              <div class="checkbox">
                                <label>
                                  <input type="checkbox" value="website design" class="toggle"><span>Website design</span>
                                </label>

                                <label>
                                  <input type="checkbox" value="logo design" class="toggle"><span>Logo design</span>
                                </label>

                                <label>
                                  <input type="checkbox" value="email marketing" class="toggle"><span>Email Marketing</span>
                                </label>

                                <label>
                                  <input type="checkbox" value="wordpress" class="toggle"><span>Help with a Wordpress site</span>
                                </label>

                                <label>
                                  <input type="checkbox" value="wix" class="toggle"><span>Help with a Wix/Squarespace site</span>
                                </label>

                              </div>


                            </div>

                            <div class="col-sm-6  form-group">
                                <button type="submit" class="btn btn-lg btn-block" id="btnContactUs">Send</button>
                            </div>



            </div>



        </form>

        <form role="form" method="post" id="reused_form">
            <div class="row">
                <div class="col-sm-6 form-group">
                    <label for="name"> First Name:</label>
                    <input type="text" class="form-control" id="firstname" name="firstname" maxlength="50">
                </div>
                <div class="col-sm-6 form-group">
                    <label for="name"> Last Name:</label>
                    <input type="text" class="form-control" id="lastname" name="lastname" maxlength="50">
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 form-group">
                    <label for="email"> Email:</label>
                    <input type="text" class="form-control" id="email" name="email" maxlength="50">
                </div>
                <div class="col-sm-6 form-group">
                    <label for="email"> Phone:</label>
                    <input type="tel" class="form-control" id="phone" name="phone" required maxlength="50">
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 form-group">
                    <label for="name"> Message:</label>
                    <textarea class="form-control" type="textarea" id="message" name="message" placeholder="Your Message Here" maxlength="6000" rows="7"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 form-group">
                    <button type="submit" class="btn btn-lg btn-success btn-block" id="btnContactUs">Post It! </button>
                </div>
            </div>
        </form>

        <div id="success_message" style="width:100%; height:100%; display:none; ">
            <h3>Sent your message successfully!</h3>
        </div>
        <div id="error_message"
                style="width:100%; height:100%; display:none; ">
                    <h3>Error</h3>
                    Sorry there was an error sending your form.

        </div>
    </div>
</div>



    </div><!-- /.container -->
</div><!-- end lowerpage containter -->
