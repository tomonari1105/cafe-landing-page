// ドロワーメニュー
jQuery(".js-btn").on("click", function () {
  jQuery(".js-menu-drawer-list").slideToggle();
});

// Topへ戻るボタン
jQuery(".js-top-btn").on("click", function () {
  jQuery("html, body").animate({ scrollTop: 0 }, 500);
});

jQuery(window).on("scroll", function () {
  if (jQuery(window).scrollTop() > 80) {
    jQuery(".js-top-btn").fadeIn(300);
  } else {
    jQuery(".js-top-btn").fadeOut(300);
  }
});

// 画像をクリックすると拡大
jQuery(".js-img-click").on("click", function () {
  const src = jQuery(this).find("img").attr("src");
  jQuery(".modal-img").attr("src", src);
  jQuery(".modal").addClass("is-active");
});

jQuery(".modal").on("click", function () {
  jQuery(this).removeClass("is-active");
});

// スムーズスクロール
jQuery('a[href^="#"]').on("click", function (e) {
  const speed = 300;
  const id = jQuery(this).attr("href");
  const target = jQuery("#" == id ? "html" : id);
  const headerHeight = jQuery(".header").outerHeight();
  const position = jQuery(target).offset().top - headerHeight;
  jQuery("html,body").animate(
    {
      scrollTop: position,
    },
    speed,
    "swing",
  );
});

jQuery('#js-drawer-content a[href^="#"]').on("click", function (e) {
  jQuery("#js-drawer-button").removeClass("is-checked");
  jQuery("#js-drawer-content").removeClass("is-checked");
});
