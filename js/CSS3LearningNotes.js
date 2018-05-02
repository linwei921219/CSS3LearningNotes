// 思路：使用Class标记要操作的标签状态，判断当前状态从而进行两种样式的相互切换，之所以用Class而不是用其他属性是为了便于之后的CSS操作


// 原生方法
var button = document.querySelector("#clickChange")
button.addEventListener("click", function() {
	var tag = document.querySelector("span")
	// 确认当前状态
	var cl = tag.getAttribute("class")
	// console.log(cl);
	if (cl == null) {
		// 打开
		tag.setAttribute("class", "active")
	}
	else {
		// 关闭
		tag.removeAttribute("class")
	}
})


// // jQuery方法(需要引用jQuery库)
// $("#clickChange").click(function() {
// 	// 确认当前状态
// 	var index = $("span").hasClass("active")
// 	// console.log(index);
// 	if (index == true) {
// 		// 关闭
// 		$("span").removeClass("active")
// 	} else {
// 		// 打开
// 		$("span").addClass("active")
// 	}
// })
