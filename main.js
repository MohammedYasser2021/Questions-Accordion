let icon = document.querySelectorAll('.quesion-btn')
let question = document.querySelectorAll('.question')

// first way
// icon.forEach((item) => {
//   item.addEventListener('click', function () {
//     question.forEach((el) => {
//       if (el !== this.parentNode.parentNode) {
//         el.classList.remove('show-text')
//       }
//     })
//     this.parentNode.parentNode.classList.toggle('show-text')
//   })
// })

// second way

question.forEach((q) => {
  let btn = q.querySelector('.quesion-btn')
  btn.addEventListener('click', function () {
    question.forEach((el) => {
      if (el !== q) {
        el.classList.remove('show-text')
      }
    })
    q.classList.toggle('show-text')
  })
})
