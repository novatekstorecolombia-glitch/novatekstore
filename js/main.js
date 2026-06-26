/* ==========================================================================
   NOVATEKSTORE - Catálogo Oficial de Lanzamiento (Dropshipping + COD)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // --- ⚙️ CONFIGURACIÓN DE TU TIENDA ---
    // REEMPLAZA ESTE NÚMERO POR EL TUYO: Usa el código de país sin el "+" (Ej: 57 para Colombia)
    const NUMERO_WHATSAPP = "573023347776"; 

    const CATALOGO_PRODUCTOS = [
        { 
            id: 1, 
            sku_dropi: "2534524",
            nombre: "Ventilador Gamer Portátil para Celular", 
            precio: 49900, 
            tag: "PAGO CONTRA ENTREGA", 
            imagen: "assets/img/ventilador.png", 
            descripcion: "📱 ¡Cero lag, más tiempo para jugar! Olvídate del sobrecalentamiento en tus partidas más intensas. Este enfriador ultra compacto de acople rápido a presión (4 a 6.7 pulgadas) disipa el calor al instante mediante alimentación USB. Diseño ergonómico en ABS negro premium para mantener los FPS al máximo con total comodidad y el mejor estilo gamer."
        },
        { 
            id: 2, 
            sku_dropi: "7708148429082",
            nombre: "Escritorio Gamer RGB Pro - Estructura ZZ", 
            precio: 599900, 
            tag: "ENVÍO GRATIS", 
            imagen: "assets/img/escritorio_gamer.jpg", 
            descripcion: "🕹️ Lleva tu setup al siguiente nivel con el máximo confort. Superficie texturizada de fibra de carbono antirayones (120x60x73 cm) con imponente iluminación RGB dinámica para sumergirte en la partida. Cuenta con estructura metálica ZZ de estabilidad superior, portavasos, gancho para tus audífonos y pasacables para una organización rápida y limpia. ¡Estilo imbatible para jugar o trabajar!"
        },
        { 
            id: 3, 
            sku_dropi: "aswde",
            nombre: "Lampara de Meduza LED Parlante", 
            precio: 79900, 
            tag: "ENVÍO GRATIS", 
            imagen: "assets/img/lampara_meduza.png", 
            descripcion: "🕹️ lámpara con altavoz combina diseño decorativo y funcionalidad, presentando una iluminación LED en forma de medusa que cambia de color"
        },
         { 
            id: 4, 
            sku_dropi: "013",
            nombre: "Control Gamer Bluetooth", 
            precio: 54900, 
            tag: "ENVÍO GRATIS", 
            imagen: "assets/img/control_celular.jpg", 
            descripcion: "🎮 Control Gamer para Teléfono – Domina el Juego 🎮 ¡Transforma tu teléfono en una consola con este Control Gamer! Diseñado para mejorar la precisión y comodidad en tus partidas"
        },
        { 
            id: 5, 
            sku_dropi: "HB-60120",
            nombre: "Escritorio Gamer Pro Blanco", 
            precio: 219900, 
            tag: "ENVÍO GRATIS", 
            imagen: "assets/img/escritorio_blanco.png", 
            descripcion: "🕹️ Lleva tu espacio de juego, estudio o trabajo al siguiente nivel con este escritorio gamer de 120 x 60 x 75 cm, diseñado para ofrecer comodidad, estabilidad y un estilo moderno que se adapta a cualquier ambiente"
        },
        { 
            id: 6, 
            sku_dropi: "HB-60120",
            nombre: "Escritorio Gamer Pro Negro", 
            precio: 219900, 
            tag: "ENVÍO GRATIS", 
            imagen: "assets/img/escritorio_negro.png", 
            descripcion: "🕹️ Lleva tu espacio de juego, estudio o trabajo al siguiente nivel con este escritorio gamer de 120 x 60 x 75 cm, diseñado para ofrecer comodidad, estabilidad y un estilo moderno que se adapta a cualquier ambiente"
        },
         { 
            id: 7, 
            sku_dropi: "025",
            nombre: "Ventilador de Cuello", 
            precio: 44900, 
            tag: "ENVÍO GRATIS", 
            imagen: "assets/img/ventilador_cuello.png", 
            descripcion: "Fabricado en plástico. 2h de autonomia dimensiones 5cm de largo 22cm de alto y 18cm de ancho ideal para refrescarte en cualquier parte versatil liviano"
        }


    ];
    

    // Formateador de moneda para Colombia (COP)
    const formatter = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 });
    
    // Variables de control de la interfaz
    const productsGrid = document.querySelector('.products-grid');
    const orderModal = document.getElementById('order-modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const closeFormBtn = document.getElementById('close-form-btn');
    const quickForm = document.getElementById('quick-order-form');
    let productoActual = null;

    // --- 1. RENDERIZAR PRODUCTOS O ENLACE DIRECTO DE PUBLICIDAD ---
    function cargarProductos() {
        if (!productsGrid) return;
        
        // Detectar si el cliente viene de una campaña publicitaria (?producto=ID)
        const urlParams = new URLSearchParams(window.location.search);
        const productoAnuncioId = urlParams.get('producto');

        if (productoAnuncioId) {
            const productoEspecifico = CATALOGO_PRODUCTOS.find(p => p.id === parseInt(productoAnuncioId));
            
            if (productoEspecifico) {
                // Modificar el entorno visual para enfocar la conversión del anuncio
                const heroSection = document.querySelector('.hero-section');
                const categoriesSection = document.getElementById('categorias');
                const sectionTitle = document.querySelector('.section-title');
                
                if (heroSection) heroSection.style.display = 'none';
                if (categoriesSection) categoriesSection.style.display = 'none';
                if (sectionTitle) sectionTitle.innerHTML = `¡Tu Setup ideal a un solo clic! ⚡ <br><span class="highlight">Ordena rápido y vuelve al juego</span>`;

                productsGrid.innerHTML = `
                    <div class="product-card" style="max-width: 500px; margin: 0 auto;">
                        <div class="product-img"><img src="${productoEspecifico.imagen}" alt="${productoEspecifico.nombre}" loading="lazy"></div>
                        <div class="product-info">
                            <span class="product-tag">${productoEspecifico.tag}</span>
                            <h3>${productoEspecifico.nombre}</h3>
                            <p class="price">${formatter.format(productoEspecifico.precio)}</p>
                            
                            <p style="color: #b3b3b3; font-size: 0.9rem; line-height: 1.5; margin: 1rem 0; border-top: 1px solid #222; padding-top: 1rem;">
                                ${productoEspecifico.descripcion}
                            </p>
                            
                            <div class="action-buttons">
                                <button class="btn-order-now" data-id="${productoEspecifico.id}">Pedir Contra Entrega 📦</button>
                                <a href="https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent('¡Hola NOVATEKSTORE! Vi el anuncio y quiero más información de: ' + productoEspecifico.nombre)}" target="_blank" class="btn-wa-direct">
                                    <i class="fab fa-whatsapp"></i> Preguntar por WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>`;
                
                asignarEventosOrden();
                return; 
            }
        }

        // Mostrar el catálogo normal de la tienda
        productsGrid.innerHTML = '';
        CATALOGO_PRODUCTOS.forEach(prod => {
            const mensajeWa = encodeURIComponent(`¡Hola NOVATEKSTORE! 🚀 Quiero consultar por el producto: ${prod.nombre} (Ref: ${prod.sku_dropi}).`);
            const enlaceWhatsapp = `https://wa.me/${NUMERO_WHATSAPP}?text=${mensajeWa}`;

            productsGrid.innerHTML += `
                <div class="product-card">
                    <div class="product-img"><img src="${prod.imagen}" alt="${prod.nombre}" loading="lazy"></div>
                    <div class="product-info">
                        <span class="product-tag">${prod.tag}</span>
                        <h3>${prod.nombre}</h3>
                        <p class="price">${formatter.format(prod.precio)}</p>
                        <div class="action-buttons">
                            <button class="btn-order-now" data-id="${prod.id}">Pedir Contra Entrega 📦</button>
                            <a href="${enlaceWhatsapp}" target="_blank" class="btn-wa-direct">
                                <i class="fab fa-whatsapp"></i> Preguntar por WhatsApp
                            </a>
                        </div>
                    </div>
                </div>`;
        });

        asignarEventosOrden();
    }

    // --- 2. ASIGNAR CLIC A LOS BOTONES DE COMPRA ---
    function asignarEventosOrden() {
        document.querySelectorAll('.btn-order-now').forEach(button => {
            button.addEventListener('click', (e) => {
                const id = parseInt(e.target.dataset.id);
                const producto = CATALOGO_PRODUCTOS.find(p => p.id === id);
                if (producto) {
                    abrirFormularioPedido(producto);
                }
            });
        });
    }

    // --- 3. INYECTAR DATOS EN EL FORMULARIO EMERGENTE ---
    function abrirFormularioPedido(producto) {
        productoActual = producto;
        document.getElementById('modal-product-title').textContent = producto.nombre;
        document.getElementById('modal-product-price').textContent = formatter.format(producto.precio);
        document.getElementById('modal-product-description').textContent = producto.descripcion;
        
        orderModal.classList.add('open');
        modalOverlay.style.display = 'block';
    }

    // --- 4. CERRAR EL FORMULARIO ---
    function cerrarFormularioPedido() {
        orderModal.classList.remove('open');
        modalOverlay.style.display = 'none';
        if (quickForm) quickForm.reset();
    }

    if(closeFormBtn) closeFormBtn.addEventListener('click', cerrarFormularioPedido);
    if(modalOverlay) modalOverlay.addEventListener('click', cerrarFormularioPedido);

    // --- 5. ENVIAR DATOS RECOLECTADOS A WHATSAPP ---
    if(quickForm) {
        quickForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nombre = document.getElementById('form-nombre').value;
            const correo = document.getElementById('form-correo').value;
            const telefono = document.getElementById('form-telefono').value;
            const direccion = document.getElementById('form-direccion').value;
            const ciudad = document.getElementById('form-ciudad').value;

            const textoPedido = `🚨 *NUEVO PEDIDO - NOVATEKSTORE* 🚨\n\n` +
                                `📦 *Producto:* ${productoActual.nombre}\n` +
                                `🆔 *SKU Dropi:* ${productoActual.sku_dropi}\n` +
                                `💰 *Total a pagar:* ${formatter.format(productoActual.precio)}\n\n` +
                                `👤 *Cliente:* ${nombre}\n` +
                                `📧 *Correo:* ${correo}\n` +
                                `📞 *Teléfono:* ${telefono}\n` +
                                `📍 *Dirección:* ${direccion}\n` +
                                `🏙️ *Ciudad/Municipio:* ${ciudad}\n\n` +
                                `🚛 *Método de Pago:* Pago Contra Entrega (COD)`;

            const urlWa = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(textoPedido)}`;
            
            window.open(urlWa, '_blank');
            cerrarFormularioPedido();
        });
    }

    cargarProductos();
});