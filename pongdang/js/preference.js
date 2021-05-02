let $btn_sports = $(".btn_sports");
let cnt_sports = 0;
let $btn_fr = $(".btn_fr");
let cnt_fr = 0;
let $btn_goal = $(".btn_goal");
let cnt_goal = 0;
let $btn_way = $(".btn_way");
let cnt_way = 0;
let $btn_hashtag = $(".btn_hashtag");
let cnt_hashtag = 0;
let $take_ht = $(".take_ht");

$btn_sports.click(function (){
    if(cnt_sports < 5) {
        $(this).css('background-color', '#ff4781');
        $(this).css('color', 'white');
        $(this).css('border', '1px solid #ff4781');
        cnt_sports++;
    } else {
        alert('최대 5개까지 선택 가능합니다.');
    }

})

$btn_fr.click(function (){
    if(cnt_fr < 1){
        $(this).css('background-color', '#ff4781');
        $(this).css('color', 'white');
        $(this).css('border', '1px solid #ff4781');
        cnt_fr++;
    }
})

$btn_goal.click(function (){
    if(cnt_goal < 3){
        $(this).css('background-color', '#ff4781');
        $(this).css('color', 'white');
        $(this).css('border', '1px solid #ff4781');
        cnt_goal++;
    } else {
        alert('최대 3개까지 선택 가능합니다.');
    }
})

$btn_way.click(function (){
    if(cnt_way < 1){
        $(this).css('background-color', '#ff4781');
        $(this).css('color', 'white');
        $(this).css('border', '1px solid #ff4781');
        cnt_way++;
    }
})

$btn_hashtag.click(function (){
    if(cnt_hashtag < 5){
        $(this).select();
        document.execCommand("copy");
        $take_ht.append
        $(this).css('background-color', '#ff4781');
        $(this).css('color', 'white');
        $(this).css('border', '1px solid #ff4781');
        cnt_hashtag++;
    } else {
        alert('최대 5개까지 선택 가능합니다.');
    }
})