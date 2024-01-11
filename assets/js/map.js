document.addEventListener("DOMContentLoaded", (event) => {

    setTimeout(() => {
        document.querySelector("#load-iframe-map").innerHTML = `   <iframe class="contact__iframe"  frameborder="0" scrolling="no" marginheight="0" marginwidth="0"loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1506.199162851837!2d-1.6443103087853888!3d42.81706738184593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5092f93f14986b%3A0x6f8412d83ac30942!2sPlaza%20del%20Castillo%2C%20Pamplona%2C%20Navarra!5e0!3m2!1ses!2ses!4v1704913816006!5m2!1ses!2ses"></iframe>`;
    }, 600);
})

