function openModal(){
    const modal = document.querySelector(".modal")
    modal.style.display = "flex"
}

function closeModal(){
    const modal = document.querySelector(".modal")
    modal.style.display = "none"
}

function addTicker(event){
   event.preventDefault()

    const ticker = event.target.ticker.value
    const bolsa = event.target.bolsa.value
    const valor = event.target.valor.value
    const ativos = event.target.ativos.value

    const total = valor * ativos

    const card = `
        <div class="card-stock">
            <header>
                <h2>${ticker}</h2>
                <h3>${bolsa}</h3>
            </header>
            <main>
                <span>▲ US$ ${valor}</span>
            </main>
            <footer>
                <span>Ativos: <span>${ativos}</span></span>
                <span>US$ ${total}</span>
            </footer>
        </div>
    `
    const cards = document.querySelector("#cards")
    cards.innerHTML += card
    closeModal()
}