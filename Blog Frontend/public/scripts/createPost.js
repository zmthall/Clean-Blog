const form = document.forms.create_post;

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formdata = new FormData(form);
    const request = new Request('/create-post', {
        method: 'POST',
        body: formdata
    })
    try {
        const response = await fetch(request);
        const postData = await response.json();

        if(postData.success) {
            window.location.replace(`${window.location.origin}/blog`);
        }
    } catch (error) {
        console.log(error)
    }
})