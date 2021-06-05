
export default function selectFilter(selectName, cards) {
    const filterSelect = document.getElementById(selectName);
    let cardName = document.querySelectorAll(cards);
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
