
export default {
    namespaced: true,
    state: {
        featuredItems: [
            {
              src: require("@/assets/logo.svg"),
              alt: "savLogo"
            },
            {
              src: require("@/assets/logo.svg"),
              alt: "savLogo"
            },
            {
              src: require("@/assets/logo.svg"),
              alt: "savLogo"
            },
          ],
          landingCollections: [
            {
              name: "Tops & Shirts",
              img: require("@/assets/logo.svg"),
              alt: "savLogo",
              caption: "Find the latest of drops of the hottest tops here!"
            },
            {
              name: "Pants & Jeans",
              img: require("@/assets/logo.svg"),
              alt: "savLogo",
              caption: "Find the latest of drops of the hottest bottoms here!"
            }
          ]
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }
  }
  