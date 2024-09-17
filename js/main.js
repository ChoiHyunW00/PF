$(function(){
    $('#hw').fullpage({
        sectionsColor: ['#151226', '#151226', '#151226', '#151226', '#151226', '#151226'],
        navigation : false, 
        navigationPosition : 'left',
        navigationTooltips : ['메뉴1','메뉴2','메뉴3','메뉴4','메뉴5','푸터'],
        keyboardScrolling : false,
        responsiveWidth: 1000,
        anchors: ['page1','page2','page3','page4','page5'],
        
    })

    var okay = 100; 
    
   // notice li 첫번째 클릭하면==>>> 포폴 사용!! 
   $('.video1').click(function(){
    // popupbox 까꿍
    $('.popupbox1').show()
})
// popup button 클릭하면
$('.popup button').click(function(){
    // popupbox 사라져
    $('.popupbox1').hide()
})


 // notice li 첫번째 클릭하면==>>> 포폴 사용!! 
 $('.video2').click(function(){
    // popupbox 까꿍
    $('.popupbox2').show()
})
// popup button 클릭하면
$('.popup button').click(function(){
    // popupbox 사라져
    $('.popupbox2').hide()
})


 // notice li 첫번째 클릭하면==>>> 포폴 사용!! 
 $('.video3').click(function(){
    // popupbox 까꿍
    $('.popupbox3').show()
})
// popup button 클릭하면
$('.popup button').click(function(){
    // popupbox 사라져
    $('.popupbox3').hide()
})

 // notice li 첫번째 클릭하면==>>> 포폴 사용!! 
 $('.video4').click(function(){
    // popupbox 까꿍
    $('.popupbox4').show()
})
// popup button 클릭하면
$('.popup button').click(function(){
    // popupbox 사라져
    $('.popupbox4').hide()
})



})