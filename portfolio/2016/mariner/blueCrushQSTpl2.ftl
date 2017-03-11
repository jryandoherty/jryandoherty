<script id="tpl-page" type="text/x-handlebars-template">
	{{#each this}} 
	<fieldset class="page page-{{math @index "+" 1}} qid-{{xmlId}} qs qs-container{{#if hasIcons}} horizontalPage{{/if}}">
		<!-- question -->
		<legend class="question{{#if required}} required{{/if}}">
			<!-- question text -->
			{{questionText}}

			<!-- question number -->
			<span class="hidden">{{math @index "+" 1}}</span>

			{{#if helpText}}
				<!-- question help link -->
				<a href="#dialog{{math @index "+" 1}}" class="q-help-link help" tabindex="-1">?</a>
			{{/if}}

			{{#ifEqual type "email"}}
				<!-- email hint link -->
				<a href="#whyWeNeedYourInfo" class="q-help-link help" tabindex="-1">?</a>
			{{/ifEqual}}

			<!-- required / optional status -->
			{{#if required}}
			<span class="required">*</span>
			{{else}}
			<span class="optional"> (optional)</span>
			{{/if}}
		</legend>

		{{#if helpText}}
			<!-- question help popup -->
			<div id="dialog{{math @index "+" 1}}" title="{{helpTitle}}" class="diag q-help help-popup psize hidden">
				{{{helpText}}}
			</div>
		{{/if}}

		{{#ifEqual type "zipcodeQuestion"}}
			<p class="q-note note">(Your zip ensures quotes are as accurate as possible for your area. We only serve U.S. businesses at this time) </p>
		{{/ifEqual}}

		{{#ifEqual type "email"}}
			<!-- email hint popup -->
			<div id="whyWeNeedYourInfo" class="diag q-help help-popup psize hidden" title="Why We Need Your Email Address">
				We require an email address so our suppliers can send you your price quotes quickly and easily. For more information, please consult our <a href="[@generateExternalUrl '/about-us/privacy/'/]" title="Privacy Policy" class="openCustomWindow">Privacy Policy</a>.
			</div>
			<p class="q-note note">(This will only be used to provide you your price quotes.)</p>
		{{/ifEqual}}

		{{#if note}}
			<p class="q-note note">{{{note}}}</p>
		{{/if}}

		{{#ifEqual type "checkbox"}}
			<p class="q-note note">(please check all that apply)</p>
		{{/ifEqual}}
		<!-- // question -->

		{{#ifEqual type "select"}}
			<select name="{{../xmlId}}" id="bz_{{../xmlId}}" class="{{#if ../required}}required{{/if}} dropdown autoSlide"{{#if ../required}} required="required"{{/if}}>
				<option id="bz_{{../xmlId}}_default" value="">Please Select</option>
				{{#each selectList}}
				<option value="{{xmlId}}" id="bz_{{xmlId}}" {{#if selected}} selected="selected"{{/if}} [#-- generateChoiceEventHandlersForOption --] class="autoSlide">{{label}}</option>
				{{/each}}
			</select>
		{{/ifEqual}}

		{{#if hasIcons}}
			<div class="horizontalControls choose{{answerCount}}">
		{{/if}}

		{{#each answerList}}
			{{#ifEqual ../type "zipcodeQuestion"}}
	        	<input type="text" id="zipcodeQuestion" name="zipcodeQuestion" class="postalcode_input required zipUS" title="Enter a valid postal code" value="{{value}}" />
			{{/ifEqual}}

			{{#ifEqual ../type "email"}}
				<input type="text" id="email" name="email" class="required email" value="{{value}}" />
			{{/ifEqual}}

			{{#ifEqual ../type "additionalRequirements"}}
			<textarea id="additionalRequirements" name="additionalRequirements" class="{{#if ../../required}}required{{/if}}">{{value}}</textarea>
			{{/ifEqual}}

			{{#ifEqual ../type "checkbox"}}
				{{#if hoverImage}}{{rfqHoverImage}}	{{/if}}

				<div class="checkbox">
					{{#if ../../hasIcons}}
					<div class="qiconWrapper" style="{{#if iconUrl}}background-image:url('{{iconUrl}}?width={{../../../../iconWidth}}');{{else}}cursor:default;{{/if}}"></div>
					{{/if}}
					<input type="checkbox" id="bz_{{xmlId}}" name="{{../../xmlId}}" value="{{xmlId}}" class="{{#if redirect}}redirect{{/if}}{{#if ../../required}} required{{/if}} checkbox"{{#if selected}} checked="checked"{{/if}}{{#if redirect}}{{redirect redirect.url}}{{/if}} />

					{{#if isOther}}
					<div class="multipleAnsOther">
						<label for="bz_{{xmlId}}">{{{label}}}
							{{#if hoverImage}}
								<a href="#dialog_img{{math @index "+" 1}}" tabindex="-1" class="hover-img" title="{{label}}">[?]</a>
							{{/if}}
						</label>

						<input type="text" id="bz_{{../../../xmlId}}_other_text" name="{{../../../xmlId}}_other_text" value="{{value}}" title="Please specify" class="other-input other-input-radio text maxlength" />
					</div>
					<div class="multipleAnsOtherClear"></div>
					{{else}}
					<label for="bz_{{xmlId}}">{{{label}}}
						{{#if hoverImage}}
							<a href="#dialog_img{{math @index "+" 1}}" tabindex="-1" class="hover-img" title="{{label}}">[?]</a>
						{{/if}}
					</label>
					{{/if}}
				</div>
			{{/ifEqual}}

			{{#ifEqual ../type "radio"}}
				{{#if hoverImage}}{{rfqHoverImage}}{{/if}}

				<div class="radio">
					
<input type="radio" id="bz_{{xmlId}}" name="{{../../xmlId}}" value="{{xmlId}}" class="{{#if redirect}}redirect{{/if}}{{#if ../../required}} required{{/if}} autoSlide radio"{{#if selected}} checked="checked"{{/if}}{{#if redirect}}{{redirect redirect.url}}{{/if}} />


					{{#if ../../hasIcons}}
					
					
					<div class="qiconWrapper" style="{{#if iconUrl}}background-image:url('{{iconUrl}}?width={{../../../../iconWidth}}');{{else}}cursor:default;{{/if}}">
					<label for="bz_{{xmlId}}">{{{label}}}
							{{#if hoverImage}}
								<a href="#dialog_img{{math @index "+" 1}}" tabindex="-1" class="hover-img" title="{{label}}">[?]</a>
							{{/if}}
						</label>
					
					{{#if isOther}}
					<div class="multipleAnsOther">
						

						<input type="text" id="bz_{{../../../xmlId}}_other_text" name="{{../../../xmlId}}_other_text" value="{{value}}" title="Please specify" class="other-input other-input-radio text maxlength" />
					</div>
					<div class="multipleAnsOtherClear"></div>
					{{else}}
					
					{{/if}}
					
					</div>
					{{/if}}

					
				</div>
			{{/ifEqual}}

			{{#ifEqual ../type "textsingle"}}
				<input type="text" id="bz_{{xmlId}}" name="{{xmlId}}" class="{{#if ../../required}}required{{/if}} text maxlength {{size}} {{validation}}" value="{{value}}" />
			{{/ifEqual}}

			{{#ifEqual ../type "textmultiple"}}
			<div class="text textmultiple">
				<label for="bz_{{xmlId}}">{{{label}}}</label>
				<input type="text" id="bz_{{xmlId}}" name="{{xmlId}}" class="{{#if ../../required}}required{{/if}} text textmultiple maxlength {{size}} {{validation}}" value="{{value}}" />
			</div>
			{{/ifEqual}}

			{{#ifEqual ../type "textparagraph"}}
				<textarea id="bz_{{xmlId}}" name="{{xmlId}}" class="{{#if ../../required}}required{{/if}} textarea maxlength {{size}}">{{value}}</textarea>
			{{/ifEqual}}

		{{/each}}

		{{#if hasIcons}}
			</div>
		{{/if}}

		{{#if additionalNotes}}
		<!-- note text for additional notes question -->
		<p class="note">{{{additionalNotes}}}</p>
		{{/if}}
		
		{{#if exampleAnswers}}
		<!-- example answers -->
		<div class="note exampleAnswers">
			<p class="addReqs">(<a href="#addReqsExample" class="help" tabindex="-1">example answers</a>)</p>
			<div id="addReqsExample" class="diag q-help help-popup psize hidden" title="Example Answers">
				{{{exampleAnswers}}}
			</div>
		</div>
		{{/if}}

		{{#if warning}}
		<div class="warning warning-after">
			<p>{{{warning}}}</p>
		</div>
		{{/if}}

	</fieldset>
	{{/each}}

	<input type="hidden" name="questionSetVersionId" value="{{x 'BZ.questionSetVersionId' }}" />
</script>
