//on click link, check if class active is on then do nothing else remove class active where it is
// and add it to the clicked link
//Check div with id same as link href attribute and add active to it by removing it from the previous holder

const tabs = document.querySelectorAll('.tabs a');

tabs.forEach((tab) => {
    tab.addEventListener('click', function (e) {
        const li = this.parentNode;
        const div = li.parentNode.parentNode;

        if (!li.classList.contains('active')) {
            div.querySelector('.tabs .active').classList.remove('active');
            li.classList.add('active');

            div.querySelector('.tab-content.active').classList.remove('active');
            document
                .querySelector(this.getAttribute('href'))
                .classList.add('active');
        }
    });
});
