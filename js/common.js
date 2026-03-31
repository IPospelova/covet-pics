$(function () {
  const shopify = {
    shop: "annabelle-demo3.myshopify.com",
    locale: "en",
    currency: {
      active: "GBP",
      rate: "1.0",
    },
    country: "GB",
    theme: {
      name: "Horizon",
      id: 135123730519,
      schema_name: "Horizon",
      schema_version: "2.1.2",
      theme_store_id: 2481,
      role: "main",
      handle: "null",
      style: {
        id: null,
        handle: null,
      },
    },
    cdnHost: "annabelle-demo3.myshopify.com/cdn",
    routes: {
      root: "/",
    },
    shopJsCdnBaseUrl: "https://cdn.shopify.com/shopifycloud/shop-js",
    featureAssets: {
      "shop-js": {
        "init-windoid": ["modules/v2/loader.init-windoid.en.esm.js"],
        "shop-toast-manager": [
          "modules/v2/loader.shop-toast-manager.en.esm.js",
        ],
        "shop-cash-offers": ["modules/v2/loader.shop-cash-offers.en.esm.js"],
        "init-fed-cm": ["modules/v2/loader.init-fed-cm.en.esm.js"],
        "shop-button": ["modules/v2/loader.shop-button.en.esm.js"],
        "init-shop-cart-sync": [
          "modules/v2/loader.init-shop-cart-sync.en.esm.js",
        ],
        "init-shop-email-lookup-coordinator": [
          "modules/v2/loader.init-shop-email-lookup-coordinator.en.esm.js",
        ],
        avatar: ["modules/v2/loader.avatar.en.esm.js"],
        "init-customer-accounts-sign-up": [
          "modules/v2/loader.init-customer-accounts-sign-up.en.esm.js",
        ],
        "shop-cart-sync": ["modules/v2/loader.shop-cart-sync.en.esm.js"],
        "checkout-modal": ["modules/v2/loader.checkout-modal.en.esm.js"],
        "init-shop-for-new-customer-accounts": [
          "modules/v2/loader.init-shop-for-new-customer-accounts.en.esm.js",
        ],
        "shop-login-button": ["modules/v2/loader.shop-login-button.en.esm.js"],
        "init-customer-accounts": [
          "modules/v2/loader.init-customer-accounts.en.esm.js",
        ],
        "pay-button": ["modules/v2/loader.pay-button.en.esm.js"],
        "shop-follow-button": [
          "modules/v2/loader.shop-follow-button.en.esm.js",
        ],
        "shop-login": ["modules/v2/loader.shop-login.en.esm.js"],
        "lead-capture": ["modules/v2/loader.lead-capture.en.esm.js"],
        "payment-terms": ["modules/v2/loader.payment-terms.en.esm.js"],
      },
    },
    ce_forms: {
      q: [],
    },
    captcha: {},
    PaymentButton: {
      isStorefrontPortableWallets: true,
    },
    SignInWithShop: {},
    analytics: {
      replayQueue: [],
      initialized: true,
    },
    modules: true,
  };

	window.Shopify = shopify;
  console.log("app + test window shopify object running !!!!!!!!!!!!!!!!!");

  // const galleryThumbs = new Swiper('.gallery-thumbs', {
  // 	spaceBetween: 10,
  // 	slidesPerView: 4,
  // 	freeMode: true,
  // 	watchSlidesVisibility: true,
  // 	watchSlidesProgress: true,
  // })

  // const galleryTop = new Swiper('.gallery-top', {
  // 	spaceBetween: 10,
  // 	navigation: {
  // 		nextEl: '.swiper-button-next',
  // 		prevEl: '.swiper-button-prev',
  // 	},
  // 	thumbs: {
  // 		swiper: galleryThumbs
  // 	}
  // })
});
