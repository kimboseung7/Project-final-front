var count = 0;
var isLiked = false;

function countPlus() {
    count = count + 1;
    document.querySelector(".like_count").innerText = "좋아요 " + count + "개";
}

function countMinus() {
    count = count - 1;
    document.querySelector(".like_count").innerText = "좋아요 " + count + "개";
}

function addLike() {
    const pushHeartBtn = document.querySelector(".heartBtn");
    if (!isLiked) {
        pushHeartBtn.innerHTML = '<i class="fa-solid fa-heart" style="color: #ff0000;"></i>';
        countPlus();
    } else {
        pushHeartBtn.innerHTML = '<i class="fa-regular fa-heart"></i>';
        countMinus();
    }
    isLiked = !isLiked;
}

document.querySelector(".heartBtn").addEventListener("click", addLike);

// notice-m-container를 클릭했을 때 이벤트 처리
document.querySelector('.notice-m-container').addEventListener('click', function() {
    window.location.href = 'https://www.youtube.com/'; // 이동할 링크를 원하는 주소로 변경하세요
});

// heart-info를 클릭했을 때 이벤트 처리
document.querySelector('.fa-regular.fa-heart').addEventListener('click', function(event) {
    event.stopPropagation(); // 상위 요소로 이벤트 전파를 막음
    // 하트 클릭 시 수행할 동작을 여기에 작성하세요
});