// Filter container sticky on desktop
function stickyFilt() {
    const stickyFilter = document.querySelector('#filter-container');
    const stickyFunction = (el) => {
        const top = el.getBoundingClientRect().top;
        if (window.scrollY + window.innerHeight > top) {
            el.classList.add('sticky');
        }
    }
    window.addEventListener('scroll', stickyFunction(stickyFilter));
}

// Filter select menu
function selectFilter() {
    const filterSelect = document.getElementById('select-desktop');
    let cardName = document.querySelectorAll('.flags_cards');
    // Select filter event listener
    filterSelect.addEventListener('change', () => {
        const selectValue = filterSelect.value;

        filterSelect.querySelectorAll('option').forEach((optval) => {
            if (!optval.value == '') {
                optval.removeAttribute('disabled', 'disabled');
            }
        });

        for (let i = 0; i < cardName.length; i++) {
            if (selectValue.selectedIndex === selectValue.selectedIndex) {
                filterSelect.querySelector('option[value=' + selectValue + ']')
                    .setAttribute('disabled', 'disabled');
            }

            if (!cardName[i].classList.contains(selectValue)) {
                cardName[i].classList.add('inactive');
            } else if (cardName[i].classList.contains(selectValue)) {
                cardName[i].classList.remove('inactive');
            }
        }
    });
}


// Search bar
function searchBar() {

    const formsSearchDesktop = document.forms['search-form-desktop'].querySelector('input');
    const formsSearchMobile = document.forms['search-form-mobile'].querySelector('input');

    // Search event listener
    [formsSearchDesktop, formsSearchMobile].forEach((el) => {

        el.addEventListener('keyup', elem => {
            let flagH2 = document.querySelectorAll('h2');
            const term = elem.target.value.toLowerCase();

            flagH2.forEach(h2 => {
                const h2Text = h2.textContent;

                if (h2Text.toLowerCase().indexOf(term) != -1) {
                    h2.closest('div').classList.remove('inactive');
                } else {
                    h2.closest('div').classList.add('inactive');
                }
            });
        });

    });

}


export { stickyFilt, selectFilter, searchBar }