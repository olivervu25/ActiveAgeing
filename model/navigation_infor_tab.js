console.log('navigation infor tab');
$('.prepare-retire').on('click',function (e) {
    e.preventDefault();
    view.setActiveScreen('prepareRetire');
    renderInformationData('prepare-retire');
})


$('.prosperous-retire').on('click',function (e) {
    e.preventDefault();
    view.setActiveScreen('prosperousRetire');
    renderInformationData('prosperous-retire');
})

$('.healthy-retire').on('click',function (e) {
    e.preventDefault();
    view.setActiveScreen('healthyRetire');
    renderInformationData('healthy-retire');
})
$('.happy-retire').on('click',function (e) {
    e.preventDefault();
    view.setActiveScreen('happyRetire');
    renderInformationData('happy-retire');
})
$('.news').on('click', function (e) {
    e.preventDefault();
    view.setActiveScreen('news');
    renderInformationData('news');
})