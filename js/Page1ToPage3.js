function first() {
    window.location.reload();
}
function move(Page) {
    Page[0].style.marginLeft = '0px';
    Page[0].style.transition = 'all 1s';
    Page[1].style.transition = 'all 1s';
    Page[1].style.marginLeft = '0px';
    Page[2].style.marginTop = '0px';
    Page[2].style.transition = 'all 1s'
}
function out(Page) {
    Page[0].style.marginLeft = '-150px';
    Page[0].style.transition = 'all 1s';
    Page[1].style.transition = 'all 1s';
    Page[1].style.marginLeft = '500px';
    Page[2].style.marginTop = '160px';
    Page[2].style.transition = 'all 1s'
}
function out_page1(Page) {
    Page[0].style.marginLeft = '-150px';
    Page[0].style.transition = 'all 1s';
    Page[1].style.transition = 'all 1s';
    Page[1].style.marginLeft = '500px';
    Page[2].style.marginTop = '100px';
    Page[2].style.transition = 'all 1s'
}
function Boxmove(Page, Page2) {
    Page[0].style.transform = 'translate(0px)';
    Page[0].style.transition = 'all 1s'
    Page[1].style.transform = 'translate(0px)';
    Page[1].style.transition = 'all 1s'
    Page[2].style.transform = 'translate(0px)';
    Page[2].style.transition = 'all 1.5s'
    Page[3].style.transform = 'translate(0px)';
    Page[3].style.transition = 'all 1.5s'
    // transform: translateY(60px)
    Page2[0].style.transform = 'translateY(0px)';
    Page2[0].style.transition = 'all 1s'
}
function Boxout(Page, Page2) {
    Page[0].style.transform = 'translate(-482px)';
    Page[0].style.transition = 'all 1s'
    Page[1].style.transform = 'translate(482px)';
    Page[1].style.transition = 'all 1s'
    Page[2].style.transform = 'translate(-482px)';
    Page[2].style.transition = 'all 1.5s'
    Page[3].style.transform = 'translate(482px)';
    Page[3].style.transition = 'all 1.5s'
    // transform: translateY(60px)
    Page2[0].style.transform = 'translateY(60px)';
    Page2[0].style.transition = 'all 1s'
}
