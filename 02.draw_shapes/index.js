const loadCanvas = () => {
  const canvas = document.getElementById('canvas')
  let ctx

  if (canvas.getContext) {
    ctx = canvas.getContext('2d')
  } else {
    return alert('캔버스가 존재하지 않습니다')
  }

  // 사각형
  // ctx.fillRect(25, 25, 100, 100);
  // ctx.clearRect(45, 45, 60, 60);
  // ctx.strokeRect(50, 50, 50, 50);

  // // 삼각형
  // ctx.beginPath();
  // ctx.moveTo(50, 50);
  // ctx.lineTo(50, 100);
  // ctx.lineTo(100, 100);
  // ctx.fill();

  // 스마일
  ctx.beginPath();
  ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
  ctx.moveTo(110, 75);
  ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
  ctx.moveTo(65, 65);
  ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
  ctx.moveTo(95, 65);
  ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
  ctx.stroke();
}

window.addEventListener('load', () => {
  loadCanvas()
})