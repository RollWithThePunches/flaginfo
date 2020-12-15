import 'what-input';
;(function() {
    function debounce(func, wait = 20, immediate = true) {
        var timeout;
        return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
        };
    };

    // Init var
    const nav = document.getElementById('nav');
    const link = document.querySelectorAll('a');
    const opener = document.getElementById('opener');
    const filter = document.getElementById('filter');
    const filterMob = document.getElementById('filter-mobile');
    let flagTag = document.getElementsByClassName('flags_cards');
    const searchMob = document.getElementById('search-mobile');
    const filterCont = document.getElementById('filter-container');
    const top = filterCont.getBoundingClientRect().top;
    const filterBttn = document.getElementById('filter-bttn');
    const searchBttn = document.getElementById('search-bttn');
    const closeBttn = document.getElementById('close-bttn');
    const filterGroup = document.getElementById('filter-group_mobile');
    const filterGroupDivMob = document.querySelectorAll('.filter-group_div-mobile');
    const filterSelect = document.getElementById('select-desktop')

    // a links target
    link.forEach(el => {
        el.setAttribute('target','_blank');
    });

    // Filter container sticky on desktop
    const stickyFilt = () => {
        if (window.scrollY + window.innerHeight > top) {
            filterCont.classList.add('sticky');
        }
    }

    window.addEventListener('scroll', debounce(stickyFilt));

    // Opener
    const openerHead = document.createElement('h1')
    opener.appendChild(openerHead);
    openerHead.textContent = 'Meanings of flags';

    const openerDek = document.createElement('h3');
    opener.appendChild(openerDek);
    openerDek.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.';


    // Select filter event listener
    filterSelect.addEventListener('change', () => {
        const selectValue = filterSelect.value;

        filterSelect.querySelectorAll('option').forEach((optval) => {
            if (!optval.value == '') {
                optval.removeAttribute('disabled', 'disabled');
            }
        });

        for (let i = 0; i < flagTag.length; i++) {
            if (selectValue.selectedIndex === selectValue.selectedIndex) {
                filterSelect.querySelector('option[value=' + selectValue + ']')
                .setAttribute('disabled', 'disabled');
            }

            if (!flagTag[i].classList.contains(selectValue)) {
                flagTag[i].classList.add('inactive');
            } else if (flagTag[i].classList.contains(selectValue)) {
                flagTag[i].classList.remove('inactive');
            }
        }
    });

    // Search bar
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

    // Filter buttons for mobile
    function showFilter(bttn, filt) {
        bttn.addEventListener('click', () => {

            filterGroupDivMob.forEach(el => {
                if (el.classList.contains('active')) {
                    el.classList.remove('active');
                }
            })

            if (!filterGroup.classList.contains('filter-group_slide')) {
                filterGroup.classList.add('filter-group_slide');
            }

            filt.classList.add('active');
            closeBttn.classList.add('active');
        });
    }

    showFilter(filterBttn, filterMob);
    showFilter(searchBttn, searchMob);

    closeBttn.addEventListener('click', () => {
        filterGroupDivMob.forEach(el => {
            el.classList.remove('active');
        });

        filterGroup.classList.remove('filter-group_slide');
        closeBttn.classList.remove('active');
    });
})()