/**
* Custom creates a validation interface for validation engine.
* @name Custom
* @class Custom
* @augments ch.Controls
* @augments ch.Validation
* @memberOf ch
* @param {Object} [conf] Object with configuration properties.
* @param {String} [conf.message] Validation message.
* @param {String} [conf.points] Sets the points where validation-bubble will be positioned.
* @param {String} [conf.offset] Sets the offset in pixels that validation-bubble will be displaced from original position determined by points. It's specified by configuration or zero by default: "0 0".
* @param {String} [conf.context] It's a reference to position the validation-bubble
* @param {Function} [conf.fn] Custom function to evaluete a value.
* @returns itself
* @factorized
* @see ch.Validation
* @see ch.Required
* @see ch.Number
* @see ch.String
* @see ch.Validator
* @see ch.Condition
* @exampleDescription Validate a even number
* @example
* var widget = $("input").custom(function (value) {
* 	return (value%2==0) ? true : false;
* }, "Enter a even number");
*/
(function (window, $, ch) {
	'use strict';

	if (window.ch === undefined) {
		throw new window.Error('Expected ch namespace defined.');
	}

	function Custom($el, conf) {

		var conf = conf || {};

		if (!conf.fn) {
			alert("Custom Validation fatal error: Need a function to evaluate, try $().custom(function(){},\"Message\");");
		}

		// Define the conditions of this interface
		conf.condition = {
			// I don't have pre-conditions, comes within conf.fn argument
			name: "custom",
			func: conf.fn,
			message: conf.content || "Error"
		};

		return new ch.Validation($el, conf);
	}

	Custom.prototype.name = 'custom';
	Custom.prototype.constructor = Custom;

	ch.factory(Custom);

}(this, this.jQuery, this.ch));