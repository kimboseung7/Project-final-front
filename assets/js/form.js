var count = 0;
var isLiked = false;
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
//detail.html이면 아래코드 시행
function countPlus() {
    count = count + 1;
    if (window.location.pathname.includes('detail.html')) {
        document.querySelector(".like_count").innerText = count;
    } else {
        document.querySelector(".like_count").innerText = "좋아요 " + count;
    }
}

function countMinus() {
    count = count - 1;
    if (window.location.pathname.includes('detail.html')) {
        document.querySelector(".like_count").innerText = count;
    } else {
        document.querySelector(".like_count").innerText = "좋아요 " + count + "개";
    }
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


	var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
	var options = { //지도를 생성할 때 필요한 기본 옵션
		center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
		level: 3 //지도의 레벨(확대, 축소 정도)
	};

	var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
	


