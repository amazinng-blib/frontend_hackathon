const alert = document.querySelector('#alert');
const userDetails = document.querySelector('#user-details');

const alertContainer = document.querySelector('.notification-container');
const usrDetailsDropDownContainer = document.querySelector(
  '.notification-username'
);

const userModal = document.querySelector('#user-details-modal');
const alertModal = document.querySelector('#alert-modal');
const closeUserDetailsModal = document.querySelector('.close-details-modal');
const closeNotificationodal = document.querySelector('.close-notification');
const userDetailsDropDownDivs = document.querySelectorAll('.sub-container');

const allDropDownMenuItems = document.querySelectorAll('.sub-container');
const menuArrays = [...allDropDownMenuItems];

// const firstElement = document.querySelector('.all-stores');

const LoaderAndTextContainer = document.querySelectorAll('.div-container');
const wrapper = document.querySelectorAll('.wrapper-div');
const wrapperArray = [...LoaderAndTextContainer];
const circles = document.querySelectorAll('#img_div');

// get the caret icons that colapses the plan container
const closeCaret = document.querySelector('#close');
const openCaret = document.querySelector('#open');

const planListContainer = document.querySelector('#list-container');
const imageContainer = document.querySelectorAll('.img-container');
const progressBar = document.querySelector('.progress');
const barValue = document.querySelector('.value');
const totalItem = document.querySelector('.total-item');

const deleteIconsm = document.querySelector('.delete-sm');
const deleteIconlg = document.querySelector('.delete-lg');
const selectPlan = document.querySelector('.select-plan');

let totalChecked = 0;
progressBar.max = wrapperArray?.length;
totalItem.innerHTML = wrapperArray?.length;
let isFocused = false;

// open alertmodal function

const openAlertModal = () => {
  userModal.classList.remove('show-info-modal');
  alertModal.classList.toggle('show-notification-modal');
  alertContainer.classList.toggle('alert-border');
  usrDetailsDropDownContainer.style.border = 'none';
};

// close alertModal function

const closeAlertModal = () => {
  alertModal.classList.toggle('show-notification-modal');
  alertContainer.classList.toggle('alert-border');
};

// open user details modal function

const openUserModal = (e) => {
  e.stopPropagation();
  alertModal.classList.remove('show-notification-modal');
  userModal.classList.add('show-info-modal');
  usrDetailsDropDownContainer.style.border = '2px solid #005bd3';
  alertContainer.classList.remove('alert-border');

  const firstElement = document.querySelector('.all-stores');

  // firstElement.focus();
};

// close user detailsmodal function
// This function is called on good icon to close the modal

const closeDetailsModal = () => {
  userModal.classList.remove('show-info-modal');
  usrDetailsDropDownContainer.style.border = 'none';
};

const handleArrowFunctionKeyPressed = (event, index) => {
  // if the user press the arrowRight or arrow down
  // focus on the next element

  const isLastMenuItem = index === allDropDownMenuItems?.length - 1;
  const isFirstMenuItem = index === 0;
  const nextMenuItem = allDropDownMenuItems.item(index + 1);
  const prevMenuItem = allDropDownMenuItems.item(index - 1);

  if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
    if (isLastMenuItem) {
      allDropDownMenuItems.item(0).focus();
      return;
    }

    nextMenuItem.focus();
  }

  // if user press arrowLeft or arrowDown
  // focus on the prev element

  if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
    if (isFirstMenuItem) {
      allDropDownMenuItems.item(allDropDownMenuItems?.length - 1).focus();
      return;
    }
    prevMenuItem.focus();
  }
};

allDropDownMenuItems.forEach((menu, index) => {
  menu.addEventListener('keyup', (event) => {
    handleArrowFunctionKeyPressed(event, index);
  });
});

// function that opens the card
// if it's colapse

const handleCaretOpenClick = () => {
  openCaret.classList.remove('show-icon');
  openCaret.classList.add('hide-icon');
  closeCaret.classList.remove('hide-icon');
  closeCaret.classList.add('show-icon');
  planListContainer.classList.remove('close-container');

  LoaderAndTextContainer.forEach((el, index) => {
    const wrapperContainer = el.querySelector('.wrapper-container');
    wrapperContainer.classList.remove('hide');
  });
  circles?.forEach((div) => {
    const d = div.querySelector('.img-container');
    d.classList.remove('img-container-hide');
  });
};

// This function closes the card body
// if it's open

const handleCaretCloseClick = () => {
  closeCaret.classList.remove('show-icon');
  closeCaret.classList.add('hide-icon');
  openCaret.classList.remove('hide-icon');
  openCaret.classList.add('show-icon');
  planListContainer.classList.add('close-container');
  LoaderAndTextContainer.forEach((el, index) => {
    const wrapperContainer = el.querySelector('.wrapper-container');
    wrapperContainer.classList.add('hide');
  });
  circles?.forEach((div) => {
    const d = div.querySelector('.img-container');
    d.classList.add('img-container-hide');
  });
};

// Below handles div opening and closing
// it also checks whether prev or after div is open
// if it does, current div closes it
// when header Text is clicked

LoaderAndTextContainer?.forEach((div, index) => {
  const defaultHeader = div.querySelector('.default');
  const headerAndText = div.querySelector('.display');
  const image = div.querySelector('.hide-img');
  const wrapperContainer = div.querySelector('.wrapper-container');

  let nextPosition = (index + 1) % wrapperArray?.length;

  if (index === wrapperArray?.length - 1) {
    nextPosition = (index - 1 + wrapperArray?.length) % wrapperArray?.length;
  }

  if (nextPosition >= wrapperArray?.length) {
    nextPosition = 0;
  }

  if (index === 0) {
    defaultHeader.classList.add('hide');
    headerAndText.classList.add('show');
    image.classList.add('show');
    wrapperContainer.classList.add('add-bg');
    if (wrapperArray[wrapperArray?.length - 1]) {
      const lastIndexElement = wrapperArray[wrapperArray?.length - 1];
      const lastIndexWrapperContainer =
        lastIndexElement.querySelector('.wrapper-container');
      const lastIndexDefaultHeader = lastIndexElement.querySelector('.default');
      const lastIndexHeaderAndText = lastIndexElement.querySelector('.display');
      const lastIndexImage = lastIndexElement.querySelector('.hide-img');

      if (lastIndexHeaderAndText.classList.contains('show')) {
        lastIndexDefaultHeader.classList.remove('hide');
        lastIndexWrapperContainer.classList.remove('add-bg');
        lastIndexHeaderAndText.classList.remove('show');
        lastIndexImage.classList.remove('show');
      }
    }
  }

  defaultHeader.addEventListener('click', () => {
    defaultHeader.classList.add('hide');
    headerAndText.classList.add('show');
    image.classList.add('show');
    wrapperContainer.classList.add('add-bg');

    if (index > 0) {
      if (wrapperArray[index - 1]) {
        const firstElement = wrapperArray[index - 1];
        const firstWrapperContainer =
          firstElement.querySelector('.wrapper-container');
        const firstDefaultHeader = firstElement.querySelector('.default');
        const firstHeaderAndText = firstElement.querySelector('.display');
        const firstImage = firstElement.querySelector('.hide-img');

        if (firstHeaderAndText.classList.contains('show')) {
          firstDefaultHeader.classList.remove('hide');
          firstWrapperContainer.classList.remove('add-bg');
          firstHeaderAndText.classList.remove('show');
          firstImage.classList.remove('show');
        }
      }
    }

    if (wrapperArray[nextPosition]) {
      const nextElement = wrapperArray[nextPosition];
      const nextWrapperContainer =
        nextElement.querySelector('.wrapper-container');
      const nextDefaultHeader = nextElement.querySelector('.default');
      const nextHeaderAndText = nextElement.querySelector('.display');
      const nextImage = nextElement.querySelector('.hide-img');
      if (nextHeaderAndText.classList.contains('show')) {
        nextDefaultHeader.classList.remove('hide');
        nextWrapperContainer.classList.remove('add-bg');
        nextHeaderAndText.classList.remove('show');
        nextImage.classList.remove('show');
      }
    }

    if (index === wrapperArray?.length - 1) {
      const lastIndexElement = wrapperArray[wrapperArray?.length - 1];
      const lastIndexHeaderAndText = lastIndexElement.querySelector('.display');

      if (lastIndexHeaderAndText.classList.contains('show')) {
        const firstIndexElement = wrapperArray[0];
        const firstIndexWrapperContainer =
          firstIndexElement.querySelector('.wrapper-container');
        const firstIndexDefaultHeader =
          firstIndexElement.querySelector('.default');
        const firstIndexHeaderAndText =
          firstIndexElement.querySelector('.display');
        const firstIndexImage = firstIndexElement.querySelector('.hide-img');

        if (firstIndexHeaderAndText.classList.contains('show')) {
          firstIndexDefaultHeader.classList.remove('hide');
          firstIndexWrapperContainer.classList.remove('add-bg');
          firstIndexHeaderAndText.classList.remove('show');
          firstIndexImage.classList.remove('show');
        }
      }
    }

    if (index === 0) {
      const firstIndexElement = wrapperArray[wrapperArray?.length - 1];
      const firstIndexHeaderAndText =
        firstIndexElement.querySelector('.display');

      if (firstIndexHeaderAndText.classList.contains('show')) {
        const lastIndexElement = wrapperArray[wrapperArray?.length - 1];
        const lastIndexWrapperContainer =
          lastIndexElement.querySelector('.wrapper-container');
        const lastIndexDefaultHeader =
          lastIndexElement.querySelector('.default');
        const lastIndexHeaderAndText =
          lastIndexElement.querySelector('.display');
        const lastIndexImage = lastIndexElement.querySelector('.hide-img');

        if (lastIndexHeaderAndText.classList.contains('show')) {
          lastIndexDefaultHeader.classList.remove('hide');
          lastIndexWrapperContainer.classList.remove('add-bg');
          lastIndexHeaderAndText.classList.remove('show');
          lastIndexImage.classList.remove('show');
        }
      }
    }
  });
});

// Below handles the circular button click
// it closes the prev checked, when the next btn is checked

LoaderAndTextContainer?.forEach((ele, index) => {
  const wrapperContainer = ele.querySelector('.wrapper-container');
  const d = ele.querySelector('.img-container');
  const normal = ele.querySelector('#normal');
  const hover = ele.querySelector('#hover');
  const loading = ele.querySelector('#loading');
  const checked = ele.querySelector('#checked');
  const defaultHeader = ele.querySelector('.default');
  const headerAndText = ele.querySelector('.display');
  const image = ele.querySelector('.hide-img');

  d.addEventListener('mouseover', () => {
    normal.classList.add(`hide-normal`);
    hover.classList.add(`show_solid_circle`);
  });

  d.addEventListener('mouseout', () => {
    normal.classList.remove(`hide-normal`);
    hover.classList.remove(`show_solid_circle`);
  });

  d.addEventListener('click', () => {
    defaultHeader.classList.add('hide');
    headerAndText.classList.add('show');
    image.classList.add('show');
    wrapperContainer.classList.add('add-bg');

    let nextPosition = (index + 1) % wrapperArray?.length;

    if (index === wrapperArray?.length - 1) {
      nextPosition = (index - 1 + wrapperArray?.length) % wrapperArray?.length;
    }

    if (nextPosition >= wrapperArray?.length) {
      nextPosition = 0;
    }

    loading.classList.toggle(`show_half_circle`);
    normal.classList.add(`hide-normal`);
    hover.classList.remove(`show_solid_circle`);

    if (wrapperArray[nextPosition]) {
      if (!loading.classList.contains('show_half_circle')) {
        totalChecked--;
      } else {
        totalChecked++;
      }

      progressBar.value = totalChecked;
      barValue.innerHTML = totalChecked;
    }

    if (!loading.classList.contains('show_half_circle')) {
      if (index === wrapperArray?.length - 1) {
        checked.classList.remove('show_checked');
        normal.style.display = 'block';
        normal.style.visibility = 'visible';
        wrapperContainer.classList.add('add-bg');
        headerAndText.classList.add('show');
        image.classList.add('show');
        defaultHeader.classList.add('hide');
      } else {
        checked.classList.remove('show_checked');
        normal.style.display = 'block';
        normal.style.visibility = 'visible';
        wrapperContainer.classList.remove('add-bg');
        headerAndText.classList.remove('show');
        image.classList.remove('show');
        defaultHeader.classList.remove('hide');
      }
    }

    loading.addEventListener('transitionend', () => {
      checked.classList.add('show_checked');

      // check if prev element is open, close it

      if (index > 0) {
        const prevElement = wrapperArray[index - 1];
        const prevWrapperContainer =
          prevElement.querySelector('.wrapper-container');
        const prevDefaultHeader = prevElement.querySelector('.default');
        const prevHeaderAndText = prevElement.querySelector('.display');
        const prevImage = prevElement.querySelector('.hide-img');
        prevWrapperContainer.classList.remove('add-bg');
        prevDefaultHeader.classList.remove('hide');
        prevHeaderAndText.classList.remove('show');
        prevImage.classList.remove('show');
      }

      // check if next element is open, close it

      if (wrapperArray[nextPosition]) {
        const nextElement = wrapperArray[nextPosition];
        const nextWrapperContainer =
          nextElement.querySelector('.wrapper-container');
        const nextDefaultHeader = nextElement.querySelector('.default');
        const nextHeaderAndText = nextElement.querySelector('.display');
        const nextImage = nextElement.querySelector('.hide-img');
        if (nextHeaderAndText.classList.contains('show')) {
          nextDefaultHeader.classList.remove('hide');
          nextWrapperContainer.classList.remove('add-bg');
          nextHeaderAndText.classList.remove('show');
          nextImage.classList.remove('show');
        }
      }

      // Below closes the first index if it's checked and it's open
      // when last index is checked

      if (index === wrapperArray?.length - 1) {
        const lastIndexElement = wrapperArray[wrapperArray?.length - 1];
        const lastIndexHeaderAndText =
          lastIndexElement.querySelector('.display');

        if (lastIndexHeaderAndText.classList.contains('show')) {
          const firstIndexElement = wrapperArray[0];
          const firstIndexWrapperContainer =
            firstIndexElement.querySelector('.wrapper-container');
          const firstIndexDefaultHeader =
            firstIndexElement.querySelector('.default');
          const firstIndexHeaderAndText =
            firstIndexElement.querySelector('.display');
          const firstIndexImage = firstIndexElement.querySelector('.hide-img');

          if (firstIndexHeaderAndText.classList.contains('show')) {
            firstIndexDefaultHeader.classList.remove('hide');
            firstIndexWrapperContainer.classList.remove('add-bg');
            firstIndexHeaderAndText.classList.remove('show');
            firstIndexImage.classList.remove('show');
          }
        }
      }

      if (index === 0) {
        const firstIndexElement = wrapperArray[0];
        const firstIndexHeaderAndText =
          firstIndexElement.querySelector('.display');

        if (firstIndexHeaderAndText.classList.contains('show')) {
          const lastIndexElement = wrapperArray[wrapperArray?.length - 1];
          const lastIndexWrapperContainer =
            lastIndexElement.querySelector('.wrapper-container');
          const lastIndexDefaultHeader =
            lastIndexElement.querySelector('.default');
          const lastIndexHeaderAndText =
            lastIndexElement.querySelector('.display');
          const lastIndexImage = lastIndexElement.querySelector('.hide-img');

          if (lastIndexHeaderAndText.classList.contains('show')) {
            lastIndexDefaultHeader.classList.remove('hide');
            lastIndexWrapperContainer.classList.remove('add-bg');
            lastIndexHeaderAndText.classList.remove('show');
            lastIndexImage.classList.remove('show');
          }
        }
      }
    });
  });
});

// EVENT LISTENERS

closeNotificationodal.addEventListener('click', (e) => {
  e.stopPropagation();
  closeAlertModal();
});

alert.addEventListener('click', openAlertModal);

userDetails.addEventListener('click', openUserModal);
closeUserDetailsModal.addEventListener('click', (e) => {
  e.stopPropagation();
  closeDetailsModal();
});

closeCaret.addEventListener('click', handleCaretCloseClick);
openCaret.addEventListener('click', handleCaretOpenClick);

deleteIconsm.addEventListener('click', () => {
  selectPlan.style.display = 'none';
  selectPlan.style.visibility = 'hidden';
});
deleteIconlg.addEventListener('click', () => {
  selectPlan.style.display = 'none';
  selectPlan.style.visibility = 'hidden';
});

// alertContainer.addEventListener('click', () => {
//   alertContainer.style.border = '2px solid blue';
// });
