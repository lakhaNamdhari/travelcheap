

/* ========================================================================
 * accordionForm.js
 * ======================================================================== */


+function ($) {
  'use strict';

  // ACCORDIONFORM CLASS DEFINITION
  // ======================

  var AccordionForm = function (element, options) {
    this.options        = options || {}
    this.$element       = $(element)
	this.activeEl       = null;
	
	// If form already submitted, call handler manually
	if ( this.options.event ){
		this.options.event.data = this;
		this.toggleDisplay( this.options.event );
	}
	this.bindEvents();
  };

  AccordionForm.VERSION  = '1.1.0'

  //AccordionForm.TRANSITION_DURATION = 300

  AccordionForm.DEFAULTS = {

  };

  AccordionForm.prototype.bindEvents = function () {
    this.$element.on("submit.accordionform", this, this.toggleDisplay);
    this.$element.on("click.accordionform","fieldset.wrap", this, this.hideControls);
  }
  
  AccordionForm.prototype.toggleDisplay = function ( e ) {
	var that = e.data;
	var form   = $( e.target );
    var formControls    = form.find("fieldset.wrap");
	
	// Form controls are hidden, lets show them
	if ( !formControls.hasClass("active") ){
		formControls.addClass("active");
		if ( that.activeEl ){
			that.activeEl.removeClass("active")
		}
		that.activeEl = formControls
		e.preventDefault()
	}
  }
  
  AccordionForm.prototype.hideControls = function ( e ) {
	var formControls = $( this ),
		that = e.data;
	
	formControls.removeClass("active")
	that.activeEl = null;
  }


  // ACCORDIONFORM PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('accordionform')
      var options = $.extend({}, AccordionForm.DEFAULTS, typeof option == 'object' && option)

      if (!data){
		$this.data('accordionform', (data = new AccordionForm(this, options)))
	  }
    })
  }

  var old = $.fn.accordionform

  $.fn.accordionform             = Plugin
  $.fn.accordionform.Constructor = AccordionForm


  // ACCORDIONFORM NO CONFLICT
  // =================

  $.fn.accordionform.noConflict = function () {
    $.fn.accordionform = old
    return this
  }


  // ACCORDIONFORM DATA-API
  // ==============

  $(document).on('submit.accordionform.data-api', '[data-toggle="accordionform"]', function (e) {
    var $this = $( this );
	
	if ( !$this.data('accordionform') ){
		Plugin.call( $this, { event: e } );
	}
  })

}(jQuery);
