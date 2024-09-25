menu = () => {
  document.getElementById('menu').classList.toggle('hidden')
  document.getElementById('menu').classList.add('opacity-0')
  setTimeout(() => {
    document.getElementById('menu').classList.remove('opacity-0')
  }, 10)
}