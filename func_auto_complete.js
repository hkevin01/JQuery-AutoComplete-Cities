//----------------------------------------------------------------
//----------------------------------------------------------------
/**
 * 
 */
function auto_complete(){
	  
  $("#start").autocomplete(
		  urlPath + "autocomplete.php",
		  {
				delay:10,
				zIndex: 9999,
				minChars:2,
				matchSubset:1,
				matchContains:1,
				maxItemsToShow: 8,
				cacheLength:10,
				autoFill:true
			}
		);
 
  $("#end").autocomplete(
		  urlPath + "autocomplete.php",
		  {
			    delay:10,
				zIndex: 9999,
				minChars:2,
				matchSubset:1,
				matchContains:1,
				maxItemsToShow: 8,
				cacheLength:10,
				autoFill:true
			}
		);
} // end autocomplete
//----------------------------------------------------------------
