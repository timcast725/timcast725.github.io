var openDialog = ""; // the #id of the currently open dialog

$(function () {
	$('.jdialog').dialog({ // .jdialog applies to all dialogs
		autoOpen: false,
		resizable: false,
		width: 1000,
		height: 600,
		open: function(e, ui) {switchDialog(e);},
		close: function(e, ui) { // clear inputs, errors, directories on close
			$(openDialog + " .directory").html('<span>Loading...</span>');
			$(openDialog + " .error").text('');
			$(openDialog + " input").val('');
			openDialog = ""; }
	});
	$('#AboutDialog').dialog({ title: "About" });
	$('#SpectrumDialog').dialog({ title: "Spectrum Analyzer" });
});

/**
 * Whenever a new dialog opens, close the old one and update the openDialog string 
 */
function switchDialog(e) {
	closeDialog();
	openDialog = "#" + e.target.id;
	$(openDialog + " input").focus();
}

/**
 * Close whichever dialog is currently open
 */
function closeDialog() { 
	$(openDialog).dialog('close');
}
