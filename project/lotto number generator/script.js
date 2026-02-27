// 1. 'Draw Numbers' 버튼을 누르면 입력창을 보여주는 함수
function showInput() {
    document.getElementById('start-btn').style.display = 'none';
    document.getElementById('input-section').style.display = 'block';
}

// 2. 입력한 숫자만큼 번호를 생성하는 함수
function drawLines() {
    const board = document.getElementById('board');
    const lineInput = document.getElementById('line-count');
    let count = parseInt(lineInput.value);

    // 입력값 검증 (1 미만이거나 20 초과일 경우 영문 경고)
    if (isNaN(count) || count < 1 || count > 20) {
        alert('Please enter a number between 1 and 20 (NZ Lotto limit)!');
        lineInput.value = 5; // 입력값을 다시 5로 되돌림
        return;
    }

    board.innerHTML = ''; // 화면에 남아있는 기존 결과 지우기

    // 사용자가 입력한 개수(count)만큼 반복
    for(let i = 0; i < count; i++) {
        let lotto = [];
        
        // 중복 없는 1~40 로또 번호 6개 추출
        while(lotto.length < 6) {
            let num = Math.floor(Math.random() * 40) + 1;
            if(!lotto.includes(num)) lotto.push(num);
        }
        lotto.sort((a, b) => a - b);
        
        // 파워볼 번호 1~10 1개 추출
        let powerball = Math.floor(Math.random() * 10) + 1;

        // 화면에 HTML 그리기 (순차적으로 나타나도록 애니메이션 딜레이 적용)
        let rowHtml = `<div class="row" style="animation-delay: ${i * 0.1}s;">`;
        
        lotto.forEach(v => {
            rowHtml += `<div class="ball lotto-ball">${v}</div>`;
        });
        
        rowHtml += `<div class="ball power-ball">${powerball}</div>`;
        rowHtml += `</div>`;
        
        board.innerHTML += rowHtml; 
    }
}