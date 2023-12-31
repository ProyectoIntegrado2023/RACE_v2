window.addEventListener('DOMContentLoaded', () => {
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    
    sidebarToggle.addEventListener('click', event => {
        event.preventDefault();
        document.body.classList.toggle('sb-sidenav-toggled');
        localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
    });
})