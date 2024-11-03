const form = document.forms.edit_post;

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formdata = new FormData(form);
    const url = `/edit-post/${formdata.get('postID')}`;
    formdata.delete('postID')
    const request = new Request(url, {
        method: 'put',
        body: formdata
    })

    try {
        const response = await fetch(request);
        const postData = await response.json();

        if(postData.success) {
            window.location.replace(`${window.location.origin}/blog`);
        }
    } catch (error) {
        console.log(error.message);
    }
})