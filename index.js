function showPage(pageId) {
  // 모든 페이지 숨기기
  document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
  
  // 선택한 페이지 보이기
  document.getElementById(pageId).style.display = 'grid';
    // 모든 메뉴 밑줄 제거
  document.querySelectorAll('nav>ul>li').forEach(li => li.classList.remove('active'));
  
  // 클릭한 메뉴에 밑줄 추가
  const activeMenu = document.querySelector(`nav>ul>li[data-page="${pageId}"]`);
  if (activeMenu) {
    activeMenu.classList.add('active');
  }
}
