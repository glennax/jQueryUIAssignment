$(
	function timedPopup(){
		setTimeout(
		function popup(){
			$( "#dialog-confirm" ).css("visibility", "visible");
	        $( "#dialog-confirm" ).dialog(
		    {
		      resizable: true,
		      width:500,
		      height:200,
		      modal: true,
		      buttons: {
		        "Stay": function() {
		          $( this ).dialog( "close" );
		          clearTimeout(function (){timedPopup();} );
		          timedPopup() = setTimeout(function (){popup();} , 10000);
		        },
		        "Exit": function() {
		          window.location.href = "http://google.com";
		        }
		      }
		    })
		}, 10000)
			
	}
);



