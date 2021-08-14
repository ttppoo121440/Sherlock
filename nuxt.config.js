const webpack = require("webpack");
module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  router: {
    base: "/Sherlock"
  },
  head: {
    title: "Sherlock網頁設計工作室",
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        name: "description",
        content:
          "Sherlock 是一個成立於2019年9月25號的工作室，致力於給顧客最好的軟體服務， 服務的層面有桌面應用程式、手機APP以及網頁應用程式！"
      },
      {
        name: "keywords",
        content:
          "Sherlock工作室,RWD,HTML,JavaScript,C#,MySql,JQuery,SEO,,SPA,Responsive,響應式網頁設計,自適應網頁設計,框架,網站系統,客製化,設計能力,系統需求,辨公自動化系統,資料庫管理系統,流程協作系統,電子商務網站,大型入口網站,企業形象網站,網站建置,提案設計"
      },
      {
        itemprop: "name",
        content: "Sherlock 網頁工作室"
      },
      {
        itemprop: "description",
        content:
          "Sherlock工作室,RWD,HTML,JavaScript,C#,MySql,JQuery,SEO,,SPA,Responsive,響應式網頁設計,自適應網頁設計,框架,網站系統,客製化,設計能力,系統需求,辨公自動化系統,資料庫管理系統,流程協作系統,電子商務網站,大型入口網站,企業形象網站,網站建置,提案設計"
      },
      {
        property: "og:title",
        content: "Sherlock 網頁工作室"
      },
      {
        property: "og:description",
        content:
          "Sherlock工作室,RWD,HTML,JavaScript,C#,MySql,JQuery,SEO,,SPA,Responsive,響應式網頁設計,自適應網頁設計,框架,網站系統,客製化,設計能力,系統需求,辨公自動化系統,資料庫管理系統,流程協作系統,電子商務網站,大型入口網站,企業形象網站,網站建置,提案設計"
      },
      {
        property: "og:image",
        content: "https://cdn.stocksnap.io/img-thumbs/960w/W5DFF3SSA6.jpg"
      },
      {
        property: "og:url",
        content: "http://tech-sherlock.com/"
      },
      {
        property: "og:type",
        content: "website"
      },
      {
        property: "og:site_name",
        content: "Sherlock 網頁工作室"
      }
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Satisfy&display=swap"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Noto+Sans+HK:900&display=swap"
      },
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/pipe.ico"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#fff"
  },
  /*
   ** Global CSS
   */
  css: ["./assets/scss/style.scss", "aos/dist/aos.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: "@/plugins/aos",
      ssr: false
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/tailwindcss"],

  devModules: ["@nuxtjs/tailwindcss"],

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css"
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-148478567-2"
      }
    ],
    "nuxt-purgecss"
  ],
  purgeCSS: {
    whitelist: [
      "aos-init",
      "aos-animate",
      "data-aos-delay",
      "data-aos-duration",
      "fade-up",
      "fade-left",
      "fade-right",
      "fade-down",
      "flip-left",
      "flip-right",
      "zoom-in",
      "zoom-in-up",
    ],
    extractors: () => [
      {
        extractor: class {
          static extract(content) {
            return content.match(/[A-z0-9-:\\/]+/g);
          }
        },
        extensions: ["html", "vue", "js"]
      },
      {
        extractor: class {
          static extract(content) {
            return content.match(/[A-z0-9-\\/]+/g);
          }
        },
        extensions: ["vue", "js"] // This will not work, because the above extractor is applied to 'vue' already.
      }
    ]
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, isClient, isServer }) {
      if (isDev && isClient) {
        // expose jquery to global
        config.module.rules.push({
          test: require.resolve("jquery"),
          use: [
            {
              loader: "expose-loader",
              options: "$"
            }
          ]
        });
      } else {
        config.output.publicPath = "./_nuxt/";
      }
      return config;
    },
    vendor: ["jquery", "aos"],
    plugins: [
      // set shortcuts as global for bootstrap
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      })
    ]
  }
};
