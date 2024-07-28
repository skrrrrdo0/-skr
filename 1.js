document.addEventListener("DOMContentLoaded", () => {
    const mazeContainer = document.getElementById('maze');
    const ball = document.getElementById('ball');
    let ballPosition = { x: 2.2, y: 2.1 };
  
    // 공을 초기 위치로 설정
    function setBallPosition(x, y) {
      ball.style.left = `${x * 8}px`;
      ball.style.top = `${y * 8}px`;
    }
  
    setBallPosition(ballPosition.x, ballPosition.y);
  
    // 키보드 이벤트로 공 움직이기
    document.addEventListener('keydown', (event) => {
      const key = event.key;
      let newX = ballPosition.x;
      let newY = ballPosition.y;
  
      if (key === 'ArrowUp' || key === 'w') {
        newY -= 1;
      } else if (key === 'ArrowDown' || key === 's') {
        newY += 1;
      } else if (key === 'ArrowLeft' || key === 'a') {
        newX -= 1;
      } else if (key === 'ArrowRight' || key === 'd') {
        newX += 1;
      }
  
      // 벽에 부딪히지 않는지 확인
      if (mazeArray[Math.floor(newY)] && mazeArray[Math.floor(newY)][Math.floor(newX)] === 0) {
        ballPosition.x = newX;
        ballPosition.y = newY;
        setBallPosition(newX, newY);
      }
  
      // trap에 대한 충돌 감지
      const currentCell = mazeArray[Math.floor(newY)][Math.floor(newX)];
      if (currentCell === 2) {
        showQuiz();
      }
  
      // bye에 대한 충돌 감지
      if (currentCell === 3) {
        alert('축하합니다! 미로를 탈출했습니다!');
      }
    });
  
    // 퀴즈를 보여주는 함수
    function showQuiz() {
      const quizContainer = document.getElementById('quiz-container');
      quizContainer.style.display = 'block';
    }
  
    // 퀴즈 버튼 이벤트 핸들러
    document.getElementById('yes-button').addEventListener('click', () => {
      alert('정답입니다! 다음 스테이지로 이동합니다.');
      // 다음 스테이지 로직 추가
      hideQuiz();
    });
  
    document.getElementById('no-button').addEventListener('click', () => {
      alert('틀렸습니다! 다시 시도하세요.');
      // 잘못된 답변 처리 로직 추가
      hideQuiz();
    });
  
    // 퀴즈를 숨기는 함수
    function hideQuiz() {
      const quizContainer = document.getElementById('quiz-container');
      quizContainer.style.display = 'none';
    }
  });
  