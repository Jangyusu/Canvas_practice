const loadCanvas = () => {
  const canvas = document.getElementById('canvas')
  let ctx

  if (canvas.getContext) {
    ctx = canvas.getContext('2d')
  } else {
    return alert('캔버스가 존재하지 않습니다')
  }

  ctx.fillStyle = 'rgb(200, 0, 0)'
  ctx.fillRect(10, 10, 50, 50)

  ctx.fillStyle = 'rgba(0, 0, 200, 0.5)'
  ctx.fillRect(30, 30, 50, 50)
}

window.addEventListener('load', () => {
  loadCanvas()
})