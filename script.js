function scrollToInfo() {
  const infoSection = document.getElementById('info');
  if (infoSection) {
    infoSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
}

function toggleShipFormat() {
  const content = document.getElementById('shipFormatContent');
  const header = document.querySelector('.dropdown-header span');
  
  if (content.classList.contains('show')) {
    content.classList.remove('show');
    header.textContent = '▼ Ship Message Format';
  } else {
    content.classList.add('show');
    header.textContent = '▲ Ship Message Format';
  }
}
