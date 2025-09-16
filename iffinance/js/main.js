function openModal(modalId){
    const modal = document.querySelector(modalId)
    modal.style.display = "flex"
}

function closeModal(modalId){
    const modal = document.querySelector(modalId)
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
        <div class="card-stock" id="${ticker}" onmouseenter="showButtons(event)" onmouseleave="hideButtons(event)">
            <header>
                <h2>${ticker}</h2>
                <h3>${bolsa}</h3>
            </header>
            <main>
                <span>▲ US$ <span>${valor}</span></span>
            </main>
            <footer>
                <span>Ativos: <span>${ativos}</span></span>
                <span class="total">US$ <span>${total}</span></span>
            </footer>
            <div class="buttons">
                <button type="button" onclick="openEditCard(event)">Editar</button>
                <button type="button" onclick="deleteCard(event)">Excluir</button>
            </div>
        </div>
    `
    const cards = document.querySelector("#cards")
    cards.innerHTML += card
    
    event.target.reset()
    
    closeModal('#add')
}

function editTicker(event){
    event.preventDefault()

    const idcard = event.target.idcard.value
    const ticker = event.target.editticker.value
    const bolsa = event.target.editbolsa.value
    const valor = event.target.editvalor.value
    const ativos = event.target.editativos.value

    const total = valor * ativos

    const cardStockEdit = document.getElementById(idcard)

    const h2Ticker = cardStockEdit.querySelector('header h2')
    h2Ticker.innerText = ticker
 
    const h3Bolsa = cardStockEdit.querySelector('header h3')
    h3Bolsa.innerText = bolsa

    const spanValor = cardStockEdit.querySelector('main span span')
    spanValor.innerText = valor

    const spanAtivos = cardStockEdit.querySelector('footer span span')
    spanAtivos.innerText = ativos

    const spanTotal = cardStockEdit.querySelector('footer span.total span')
    spanTotal.innerText = total
    
    closeModal('#edit')
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

function deleteCard(event){
    const buttonDelete = event.target
    const cardStock = buttonDelete.closest(".card-stock")
    cardStock.remove()
}

function openEditCard(event){
    const buttonEdit = event.target
    const cardStock = buttonEdit.closest(".card-stock")

    const ticker = cardStock.querySelector('header h2').innerText
    const inputEditTicker = document.getElementById('editticker')
    inputEditTicker.value = ticker

    const idCard = cardStock.getAttribute('id')
    //cardStock.setAttribute("teste", "123") //Exemplo de setAttribute para adicionar um atributo em um elemento
    const inputIdCard = document.getElementById('idcard')
    inputIdCard.value = idCard

    const bolsa = cardStock.querySelector('header h3').innerText
    const selectEditBolsa = document.getElementById('editbolsa')
    selectEditBolsa.value = bolsa

    const valor = cardStock.querySelector('main span span').innerText
    const inputEditValor = document.getElementById('editvalor')
    inputEditValor.value = valor

    const ativos = cardStock.querySelector('footer span span').innerText
    const inputEditAtivos = document.getElementById('editativos')
    inputEditAtivos.value = ativos

    openModal('#edit')
}