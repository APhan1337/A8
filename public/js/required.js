'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
    initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    $('.comment-btn').each(function() {
        this.addEventListener('click', configModal);
    })

    $('#add-comment-form').submit(function (e) {
        e.preventDefault();

        if (!this.checkValidity()) {
            e.stopPropagation();
            this.classList.add('was-validated');

            return;
        }

        $.get('/add-comment', {
            type: this.getAttribute('data-course-type'),
            id: this.getAttribute('data-course-id'),
            comment: $('#comment').val(),
        }, function (result) {
            let listHtml = "";

            result.evals.forEach(comment => {
                listHtml += `<li>${comment}</li>`;
            })

            $(`#comments-${result.id}`).html(listHtml);
        })

        $('#comment-modal .btn-close').click();
    })
}

function configModal(e) {
    const courseId = this.getAttribute('data-course-id');
    const courseType = this.getAttribute('data-course-type');
    const form = $('#add-comment-form');

    form.attr('data-course-id', courseId);
    form.attr('data-course-type', courseType);
}