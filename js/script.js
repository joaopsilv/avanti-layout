/* Variáveis para alternar os elementos de header e footer */
let originalHeaderContent = null
let originalFooterContent = null

/* Elemento alternativo para o header mobile */
function adaptHeaderForSmallViews() {
	const headerMain = document.querySelector(".header__main")
	if (window.innerWidth <= 1024) {
		!originalHeaderContent
			? (originalHeaderContent = headerMain.innerHTML)
			: null
		headerMain.innerHTML = `
        		<div class="header__main-content flex">
					<img src="assets/svg/hamburguer-big.svg" alt="Ícone de menu hambúrguer" />
					<img src="assets/svg/logo-avanti.svg" alt="Logo da Avanti" />
					<div class="header__cart flex center">
						<div class="flex center">
							<img
								src="assets/svg/minicart.svg"
								alt="Ícone de carrinho de compras"
							/>
							<span class="flex center">2</span>
						</div>
					</div>
				</div>
				<div class="header__search-bar flex center">
                    <input
                        placeholder="Digite aqui o que você procura"
                        id="search-input"
                        autocomplete="off"
                    />
					<button onclick="searchButtonEvent()">
						<img src="assets/svg/search.svg" alt="Ícone de lupa" />
					</button>
				</div>
        `
	} else {
		originalHeaderContent
			? (headerMain.innerHTML = originalHeaderContent)
			: null
		setupHeaderDropdowns()
	}
}

/* Adicionar os dropdowns no header */
function setupHeaderDropdowns() {
	const firstMenuItem = document.querySelector(
		".header__options ul li:first-child"
	)

	const menuItems = document.querySelectorAll(
		".header__options ul li:not(:first-child)"
	)

	firstMenuItem.addEventListener("mouseenter", function () {
		removeAllDropdowns()
		createAllCategoriesDropdown(firstMenuItem)
	})

	menuItems.forEach((item) => {
		item.addEventListener("mouseenter", function () {
			removeAllDropdowns()
			createDropdown(item)
		})
	})

	document
		.querySelector(".header__options-wrapper")
		.addEventListener("mouseleave", function () {
			removeAllDropdowns()
		})
}

function createAllCategoriesDropdown(menuItem) {
	const dropdown = document.createElement("div")
	dropdown.className = "header__dropdown"

	const menuItemRect = menuItem.getBoundingClientRect()

	const headerOptions = document.querySelector(".header__options-wrapper")
	const headerOptionsRect = headerOptions.getBoundingClientRect()

	dropdown.innerHTML = `
    	<div class="dropdown__wrapper-alt flex font-nu-sans" style="top: ${
				menuItemRect.bottom + 16
			}px; max-width: ${headerOptionsRect.width}px">
			<div class="dropdown__content-alt flex">
				<div class="dropdown__departments-menu">
					<ul class="flex-column">
						<li class="li-base dropdown__department-item flex center">
							<span>Departamento</span>
							<img src="assets/svg/arrow.svg" alt="Ícone de seta para direita" />
						</li>
						<li class="li-base dropdown__department-item flex center">
							<span>Departamento</span>
							<img src="assets/svg/arrow.svg" alt="Ícone de seta para direita" />
						</li>
						<li class="li-base dropdown__department-item flex center">
							<span>Departamento</span>
							<img src="assets/svg/arrow.svg" alt="Ícone de seta para direita" />
						</li>
						<li class="li-base dropdown__department-item flex center">
							<span>Departamento</span>
							<img src="assets/svg/arrow.svg" alt="Ícone de seta para direita" />
						</li>
						<li class="li-base dropdown__department-item flex center">
							<span>Departamento</span>
							<img src="assets/svg/arrow.svg" alt="Ícone de seta para direita" />
						</li>
						<li class="li-base dropdown__department-item flex center">
							<span>Departamento</span>
							<img src="assets/svg/arrow.svg" alt="Ícone de seta para direita" />
						</li>
						<li class="li-base dropdown__department-item flex center">
							<span>Departamento</span>
							<img src="assets/svg/arrow.svg" alt="Ícone de seta para direita" />
						</li>
						<li class="li-base dropdown__department-item flex center">
							<span>Departamento</span>
							<img src="assets/svg/arrow.svg" alt="Ícone de seta para direita" />
						</li>
					</ul>
				</div>
				<div class="dropdown__categories-container-alt flex">
					<div class="dropdown__categories flex">
						<ul class="flex-column">
							<li class="li-base">Categoria</li>
							<li class="li-base">Categoria</li>
							<li class="li-base">Categoria</li>
							<li class="li-base">Categoria</li>
							<li class="li-base">Categoria</li>
							<li class="li-base">Categoria</li>
							<li class="li-base">Categoria</li>
							<li class="li-base">Categoria</li>
						</ul>
						<ul class="flex-column">
							<li class="li-base">Categoria</li>
							<li class="li-base">Categoria</li>
							<li class="li-base">Categoria</li>
							<li class="li-base">Categoria</li>
							<li class="li-base">Categoria</li>
							<li class="li-base">Categoria</li>
							<li class="li-base">Categoria</li>
							<li class="li-base">Categoria</li>
						</ul>
						<ul class="flex-column">
							<li class="li-base">Categoria</li>
							<li class="li-base">Categoria</li>
							<li class="li-base">Categoria</li>
							<li class="li-base">Categoria</li>
							<li class="li-base">Categoria</li>
							<li class="li-base">Categoria</li>
							<li class="li-base">Categoria</li>
							<li class="li-base">Categoria</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="dropdown__banner-alt">
				<img
					src="assets/img/mug-ver3.png"
					alt="Imagem de uma caneca preta com a logo da Avanti anunciando novos produtos"
				/>
			</div>
		</div>
  	`
	headerOptions.appendChild(dropdown)
}

function createDropdown(menuItem) {
	const dropdown = document.createElement("div")
	dropdown.className = "header__dropdown"

	const menuItemRect = menuItem.getBoundingClientRect()

	const headerOptions = document.querySelector(".header__options-wrapper")
	const headerOptionsRect = headerOptions.getBoundingClientRect()

	dropdown.innerHTML = `
		<div class="dropdown__wrapper font-nu-sans" style="top: ${
			menuItemRect.bottom + 16
		}px; max-width: ${headerOptionsRect.width}px">
			<div class="dropdown__content flex">
				<div>
					<div class="dropdown__department flex-column">
						<h3>Departamento</h3>
						<div class="dropdown__categories flex">
							<ul class="flex-column">
								<li class="li-base">Categoria</li>
								<li class="li-base">Categoria</li>
								<li class="li-base">Categoria</li>
								<li class="li-base">Categoria</li>
								<li class="li-base">Categoria</li>
								<li class="li-base">Categoria</li>
								<li class="li-base">Categoria</li>
								<li class="li-base">Categoria</li>
							</ul>
							<ul class="flex-column">
								<li class="li-base">Categoria</li>
								<li class="li-base">Categoria</li>
								<li class="li-base">Categoria</li>
								<li class="li-base">Categoria</li>
								<li class="li-base">Categoria</li>
								<li class="li-base">Categoria</li>
								<li class="li-base">Categoria</li>
								<li class="li-base">Categoria</li>
							</ul>
							<ul class="flex-column">
								<li class="li-base">Categoria</li>
								<li class="li-base">Categoria</li>
								<li class="li-base">Categoria</li>
								<li class="li-base">Categoria</li>
								<li class="li-base">Categoria</li>
								<li class="li-base">Categoria</li>
								<li class="li-base">Categoria</li>
								<li class="li-base">Categoria</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="dropdown__banner">
					<img src="assets/img/mug-ver3.png" alt="Imagem de uma caneca preta com a logo da Avanti anunciando novos produtos" />
				</div>
			</div>
		</div>
	`
	headerOptions.appendChild(dropdown)
}

function removeAllDropdowns() {
	const dropdowns = document.querySelectorAll(".header__dropdown")
	dropdowns.forEach((dropdown) => dropdown.remove())
}

/* Troca entre imagens para os banners */
function adaptBanners() {
	const bannerImages = document.querySelectorAll(".banner img")

	if (bannerImages.length > 0) {
		if (bannerImages[0]) {
			window.innerWidth <= 768
				? (bannerImages[0].src = "assets/img/sale-banner-mini.png")
				: (bannerImages[0].src = "assets/img/sale-banner-big.png")
		}

		if (bannerImages[1]) {
			window.innerWidth <= 768
				? (bannerImages[1].src = "assets/img/contact-banner-mini.png")
				: (bannerImages[1].src = "assets/img/contact-banner-big.png")
		}
	}
}

/* Funcionalidade de busca para a barra de pesquisa */
function searchButtonEvent() {
	const searchInput = document.getElementById("search-input")
	const searchText = searchInput.value.trim()
	removeSearchMessage()
	if (searchText) {
		showSearchMessage(searchText)
		searchInput.value = ""
	}
}

function showSearchMessage(searchText) {
	const searchMessageDiv = document.createElement("div")
	searchMessageDiv.className = "header__search-message flex center"
	searchMessageDiv.innerHTML = `
        <p>Você buscou por: '${searchText}'</p>
        <button class="flex center" onclick="removeSearchMessage()">
        	<img src="assets/svg/close.svg" alt="Ícone de fechar" />
        </button>
    `
	const searchBar = document.querySelector(".header__search-bar")
	searchBar ? searchBar.appendChild(searchMessageDiv) : null
}

function removeSearchMessage() {
	const existingMessage = document.querySelector(".header__search-message")
	existingMessage ? existingMessage.remove() : null
}

/* Carrosséis de produtos */
function initializeSwipers() {
	document.querySelectorAll(".releases").forEach((section) => {
		var swiper = new Swiper(section.querySelector(".swiper"), {
			grabCursor: true,
			loop: true,
			pagination: {
				el: section.querySelector(".swiper-pagination"),
			},
			navigation: {
				nextEl: section.querySelector(".custom-next-button"),
				prevEl: section.querySelector(".custom-prev-button"),
			},
			breakpoints: {
				1024: {
					slidesPerView: 5,
					spaceBetween: 17,
				},
				768: {
					slidesPerView: 3,
				},
				425: {
					slidesPerView: 2,
				},
				320: {
					spaceBetween: 10,
				},
			},
		})
	})
}

/* Elemento alternativo para o footer mobile */
function adaptFooterForSmallViews() {
	const footerMainContent = document.querySelector(".footer__main-content")
	if (window.innerWidth <= 1024) {
		!originalFooterContent
			? (originalFooterContent = footerMainContent.innerHTML)
			: null
		footerMainContent.innerHTML = `
            <div class="footer__contacts flex-column center">
                <div>
                    <img src="assets/svg/logo-avanti.svg" alt="Logo da Avanti" />
                </div>
                <div class="flex">
                    <img src="assets/svg/logo-instagram.svg" alt="Logo do Instagram" />
                    <img src="assets/svg/logo-facebook.svg" alt="Logo do Facebook" />
                    <img src="assets/svg/logo-youtube.svg" alt="Logo do Youtube" />
                    <img src="assets/svg/logo-tiktok.svg" alt="Logo do Tiktok" />
                </div>
            </div>
            <div class="footer__topics">
                <div class="footer__topic">
                    <div class="footer__topic-header flex center">
                        <h4>Institucional</h4>
                        <img src="assets/svg/dropdown-arrow.svg" alt="Ícone de dropdown" />
                    </div>
                    <div class="footer__topic-content">
                        <h5>Sobre Nós</h5>
                        <h5>Nossas Lojas</h5>
                        <h5>Privacidade e Segurança</h5>
                        <h5>Termos e Condições</h5>
                    </div>
                </div>
                <div class="footer__topic">
                    <div class="footer__topic-header flex center">
                        <h4>Central de ajuda</h4>
                        <img src="assets/svg/dropdown-arrow.svg" alt="Ícone de dropdown" />
                    </div>
                    <div class="footer__topic-content">
                        <h5>Fale Conosco</h5>
                        <h5>Frete e Entrega</h5>
                        <h5>Trocas e Devoluções</h5>
                        <h5>Formas de Pagamento</h5>
                        <h5>FAQ</h5>
                    </div>
                </div>
                <div class="footer__topic">
                    <div class="footer__topic-header flex center">
                        <h4>Atendimento</h4>
                        <img src="assets/svg/dropdown-arrow.svg" alt="Ícone de dropdown" />
                    </div>
                    <div class="footer__topic-content">
                        <h5><span>Telefone:</span> (00) 1234-5678</h5>
                        <h5><span>E-mail:</span> exemplo@exemplo.com.br</h5>
                        <h5>
                            <span>Horário de atendimento:</span>
                            <p>Segunda a Sábado: 07h00 às 23h00</p>
                            <p>Domingo e Feriados: 07h00 às 21h00</p>
                        </h5>
                    </div>
                </div>
            </div>
            <div class="footer__payments flex center">
                <img src="assets/svg/logo-amex.svg" alt="Logo da AMEX" />
                <img src="assets/svg/logo-mastercard.svg" alt="Logo do Mastercard" />
                <img src="assets/svg/logo-visa.svg" alt="Logo da Visa" />
                <img src="assets/svg/logo-hipercard.svg" alt="Logo do Hipercard" />
                <img src="assets/svg/logo-elo.svg" alt="Logo da Elo" />
                <img src="assets/svg/logo-diners-club.svg" alt="Logo do Diners Club" />
                <img src="assets/svg/logo-paypal.svg" alt="Logo do Paypal" />
                <img src="assets/svg/logo-pix.svg" alt="Logo do PIX" />
                <img src="assets/svg/logo-boleto.svg" alt="Logo do Boleto Bancário" />
            </div>
        `
		dropdownEvent()
	} else {
		originalFooterContent
			? (footerMainContent.innerHTML = originalFooterContent)
			: null
	}
}

/* Dropdowns do footer */
function dropdownEvent() {
	const topicHeaders = document.querySelectorAll(".footer__topic-header")
	topicHeaders.forEach((header) => {
		header.addEventListener("click", function () {
			topicHeaders.forEach((otherHeader) => {
				if (otherHeader !== this && otherHeader.classList.contains("active")) {
					otherHeader.classList.remove("active")
					otherHeader.nextElementSibling.style.display = "none"
				}
			})
			this.classList.toggle("active")
			const content = this.nextElementSibling
			const isVisible = content.style.display === "block"
			isVisible
				? (content.style.display = "none")
				: (content.style.display = "block")
		})
	})
}

document.addEventListener("DOMContentLoaded", function () {
	adaptHeaderForSmallViews()
	setupHeaderDropdowns()
	adaptBanners()
	initializeSwipers()
	adaptFooterForSmallViews()
})
window.addEventListener("resize", function () {
	adaptHeaderForSmallViews()
	adaptBanners()
	adaptFooterForSmallViews()
})
