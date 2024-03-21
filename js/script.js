window.addEventListener('load', () => {
    const _ = (id) => document.getElementById(id);
    _("empForm").addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(`ID: ${_("id").value}`);
        console.log(`Name: ${_("name").value}`);
        console.log(`Extension: ${_("ext").value}`);
        console.log(`Email: ${_("email").value}`);
        console.log(`Department: ${_("department").value}`);
        _("empForm").reset();        
    })
});