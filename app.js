const items = document.getElementById('items')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})

const fetchData = async() => {
    try{
        const res =await fetch('api.json')
        const data = await res.json()
       // console.log(data)
    } catch (error){
        console.log(error)
    }
}

const pintarCards = data => {
    data.forEach(producto => {
         templateCard.queryselector('img').setAttribute("src", producto.thumbnailUrl)
         templateCard.queryselector('h5').textContent = producto.nombre
         templateCard.queryselector('p').textContent = producto.precio

         const clone =templateCard.cloneNode(true)
         fragment.appendChild(clone)
    })
    items.appendChild(fragment)
}