$(function(){
	
	$("fieldset.form label").each(function(){
		$("input[type='checkbox']:checked", this)
			.parent().children("span").addClass("aktif");
	});
	$("fieldset.form label input[type='checkbox']").click(function(){
		$(this)
			.parent().children("span").toggleClass("aktif");
	});

});