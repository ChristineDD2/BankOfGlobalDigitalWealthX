{document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.getElementById('dropdown');
    dropdown.addEventListener('change', function() {
        if (this.value) {
            window.location.href = this.value;
        }
    });
});}
