const deleteBtns = document.querySelectorAll('[data-delete-btn]');

deleteBtns.forEach(button => {
    button.addEventListener('click', async (event) => {
        const postID = event.target.getAttribute('data-post-id');
        const request = new Request(`/delete-post/${postID}`, {
            method: 'delete',
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
})