// 연도 표시
document.getElementById('year').textContent = new Date().getFullYear();

// 테마 스위치
const select = document.getElementById('themeSelect');
select.addEventListener('change', () => {
  document.body.classList.remove('theme-corporate','theme-emotional','theme-promo');
  document.body.classList.add(select.value);
  localStorage.setItem('coreatour_theme', select.value);
});
const saved = localStorage.getItem('coreatour_theme');
if (saved) {
  document.body.classList.remove('theme-corporate','theme-emotional','theme-promo');
  document.body.classList.add(saved);
  select.value = saved;
}

// 폼 제출(데모)
function submitLead(e){
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  alert(`접수 완료!\n\n이름: ${data.name}\n연락처: ${data.phone}\n구분: ${data.type}\n요청: ${data.memo || '-'}`);
  e.target.reset();
  return false;
}
