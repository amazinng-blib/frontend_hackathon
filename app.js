const alert = document.querySelector('#alert');
const userDetails = document.querySelector('#user-details');
const userModal = document.querySelector('#user-details-modal');
const alertModal = document.querySelector('#alert-modal');
const closeUserDetailsModal = document.querySelector('.close-details-modal');
const closeNotificationodal = document.querySelector('.close-notification');
const userDetailsDropDownDivs = document.querySelectorAll('.sub-container');

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

const closeAlertModal = () => {
  alertModal.classList.toggle('show-notification-modal');
};

const openAlertModal = () => {
  userModal.classList.remove('show-info-modal');
  alertModal.classList.toggle('show-notification-modal');
};

const closeDetailsModal = () => {
  userModal.classList.remove('show-info-modal');
};

const openUserModal = () => {
  alertModal.classList.remove('show-notification-modal');
  userModal.classList.add('show-info-modal');
};

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

// colapse div text

LoaderAndTextContainer?.forEach((div, index) => {
  const defaultHeader = div.querySelector('.default');
  const headerAndText = div.querySelector('.display');
  const image = div.querySelector('.hide-img');
  const wrapperContainer = div.querySelector('.wrapper-container');

  if (index === 0) {
    defaultHeader.classList.add('hide');
    headerAndText.classList.add('show');
    image.classList.add('show');
    wrapperContainer.classList.add('add-bg');
  }

  defaultHeader.addEventListener('click', () => {
    defaultHeader.classList.add('hide');
    headerAndText.classList.add('show');
    image.classList.add('show');
    wrapperContainer.classList.add('add-bg');
  });
});

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
    // let nextPosition = (index + 1) % wrapperArray?.length;
    // if (index === wrapperArray?.length - 1) {
    //   nextPosition = (index - 1 + wrapperArray?.length) % wrapperArray?.length;

    //   // nextPosition = wrapperArray?.length;
    // }
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

    // let nextPosition = index + 1;

    // if (index === wrapperArray?.length) {
    //   return;
    // }

    loading.classList.toggle(`show_half_circle`);
    normal.classList.add(`hide-normal`);
    hover.classList.remove(`show_solid_circle`);
    // wrapperContainer.classList.add('add-bg');

    if (wrapperArray[nextPosition]) {
      // const nextElement = wrapperArray[nextPosition];
      // const nextWrapperContainer =
      //   nextElement.querySelector('.wrapper-container');
      // const nextDefaultHeader = nextElement.querySelector('.default');
      // const nextHeaderAndText = nextElement.querySelector('.display');
      // const nextImage = nextElement.querySelector('.hide-img');

      // if (!loading.classList.contains('show_half_circle')) {
      //   totalChecked--;
      //   nextDefaultHeader.classList.remove('hide');
      //   nextWrapperContainer.classList.remove('add-bg');
      //   nextHeaderAndText.classList.remove('show');
      //   nextImage.classList.remove('show');
      // } else {
      //   totalChecked++;
      //   nextDefaultHeader.classList.add('hide');
      //   nextWrapperContainer.classList.add('add-bg');
      //   nextHeaderAndText.classList.add('show');
      //   nextImage.classList.add('show');
      // }

      // Update progress bar value

      if (!loading.classList.contains('show_half_circle')) {
        totalChecked--;
      } else {
        totalChecked++;
      }

      progressBar.value = totalChecked;
      barValue.innerHTML = totalChecked;
    }

    if (!loading.classList.contains('show_half_circle')) {
      checked.classList.remove('show_checked');
      normal.style.display = 'block';
      normal.style.visibility = 'visible';
      wrapperContainer.classList.remove('add-bg');
      headerAndText.classList.remove('show');
      image.classList.remove('show');
      defaultHeader.classList.remove('hide');
    }

    loading.addEventListener('transitionend', () => {
      checked.classList.add('show_checked');

      if (index > 0 || index === wrapperArray?.length) {
        const prevElement = wrapperArray[index - 1];
        const prevWrapperContainer =
          prevElement.querySelector('.wrapper-container');
        const prevDefaultHeader = prevElement.querySelector('.default');
        const prevHeaderAndText = prevElement.querySelector('.display');
        const prevImage = prevElement.querySelector('.hide-img');
        prevWrapperContainer.classList.remove('add-bg');
        prevDefaultHeader.classList.toggle('hide');
        prevHeaderAndText.classList.toggle('show');
        prevImage.classList.toggle('show');
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
