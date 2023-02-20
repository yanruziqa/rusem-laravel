import $ from 'jquery';

export const navbarClick = (e) => {
    e.preventDefault();
    var target = $(e.target).next('.nav-sidebar');
    $(target).slideToggle();
};

export const subMenu = (e) => {
    e.preventDefault();

    var target = $(e.target).next('.nav-sub');
    $(target).slideToggle();
};