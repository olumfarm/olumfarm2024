function start() {
  Swal.fire({
    html: `
    <h2>Invest Now?</h2>
    <p>olumfarm@gmail.com</p>
    <p><a href="mailto:olumfarm@gmail.com" class="btn-dark btn fw-normal" >Email us</a></p>
         
        `,
    showCloseButton: true,
    showCancelButton: false,
    showConfirmButton: false,
  });
}

function close() {
  Swal.close();
}

function contact() {
  window.location.href = "";
}
