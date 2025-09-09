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
        <div class="card-stock" onmouseenter="showButtons(event)" onmouseleave="hideButtons(event)">
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
            <div class="buttons">
                <button type="button" onclick="">Editar</button>
                <button type="button" onclick="">Excluir</button>
            </div>
        </div>
    `
    const cards = document.querySelector("#cards")
    cards.innerHTML += card 
    closeModal()
}

function showButtons(event){
    const cardStock = event.target
    const buttons = cardStock.querySelector(".buttons")
    buttons.style.display = "flex"
}

function hideButtons(event){
    const cardStock = event.target
    const buttons = cardStock.querySelector(".buttons")
    buttons.style.display = "none"
}