$(function () {
	function addDiary(){
		localStorage.setItem("diary",true);		
	}
	function chooseDiary(){
		alert("Diary added to inventory");
		addDiary();
		$("button").hide();
		$(".hidden").show();	
	
	}
})
