import stickyFilt from './helper/helper';
import selectFilter from "./helper/selectFilter";

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

    // Global variables
    const filter = document.getElementById('filter');
    const filterMob = document.getElementById('filter-mobile');
    const searchMob = document.getElementById('search-mobile');
    const filterBttn = document.getElementById('filter-bttn');
    const searchBttn = document.getElementById('search-bttn');
    const closeBttn = document.getElementById('close-bttn');
    const filterGroup = document.getElementById('filter-group_mobile');
    const filterGroupDivMob = document.querySelectorAll('.filter-group_div-mobile');

    // Select filter event listener
    selectFilter('select-desktop', '.flags_cards');
    // Sticky filter
    stickyFilt('.filter-container');
    

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