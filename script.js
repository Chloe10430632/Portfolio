// 點擊手機板菜單後自動收起+顯示三條線
$("#sm-nav").click(
  function(){
    $(this).css("display","none")
    $("#sm-nav-outer").html("★")
  }
);
// 手機板導覽列的菜單開合按鈕
const menuButton = document.getElementById('sm-nav-outer');
const navMenu = document.getElementById('sm-nav');
menuButton.addEventListener('click', () => {
    if (navMenu.style.display === 'none') {
        navMenu.style.display = 'block';
        menuButton.innerHTML = 'X'; // X 圖標 &times;
    } else {
        navMenu.style.display = 'none';
        menuButton.innerHTML = '★'; // 菜單圖標 &#9776;
    }
});



// 點案pic顯示pop-up視窗
$(".pic1").click(
  function(){
    $(".greyscreen").css("display","block")
    $(".pt1").css("display","block")
  }
);

$(".pic2").click(
  function(){
    $(".greyscreen").css("display","block")
    $(".pt2").css("display","block")
  }
);

$(".pic3").click(
  function(){
    $(".greyscreen").css("display","block")
    $(".pt3").css("display","block")
  }
);

$(".pic4").click(
  function(){
    $(".greyscreen").css("display","block")
    $(".pt4").css("display","block")
  }
);

// 點案X關閉pop-up視窗
$(".close").click(
  function(){
    $(".greyscreen").css("display","none")
    $(".pt1").css("display","none")
    $(".pt2").css("display","none")
    $(".pt3").css("display","none")
    $(".pt4").css("display","none")
  }
);

// 點按灰色背景關閉pop-up視窗
$(".greyscreen").click(
  function(){
    $(this).css("display","none")
    $(".pt1").css("display","none")
    $(".pt2").css("display","none")
    $(".pt3").css("display","none")
    $(".pt4").css("display","none")
  }
);

$(".X").click(
  function(){
    $(".sm-nav").css("display","none")
  }
);



// 選擇所有的Nav按鈕
const navButtons = document.querySelectorAll('.nav-link');
// 為每個按鈕添加點擊事件監聽器
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 移除所有按鈕的 active 類
        navButtons.forEach(btn => btn.classList.remove('active'));
        
        // 為當前點擊的按鈕添加 active 類
        button.classList.add('active');
    });
});




$(".send-ms").click(
  function(){
    $(this).text("Sent！")
    $("input").val("")
  }
);