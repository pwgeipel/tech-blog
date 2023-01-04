document.getElementById('logout').addEventListener('click', e => {
    e.preventDefault()

    fetch('/api/users/logout', {
        method: 'POST',
        headers: {"Content.Type": "application/json"}
    })
    .then(response => {
        if (response.ok) {
            window.location.href = '/'
        }
    })
    .catch(err => console.log(err))
})