<template>
  <div class="external-product">
    <v-container>
      <v-row>
        <v-col cols="12" class="d-flex flex-wrap justify-center align-stretch">
          <v-card
            max-width="150"
            class="pa-2 ma-2"
            v-for="item in items"
            :key="item.code"
            :to="item.code"
          >
            <v-img
              class="img-catalog"
              :src="item.imgSrc"
              height="200"
              max-height="200"
              position=" top center"
              contain
            >
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      doors: [
        { name: "The Dubai Mall, Dubai, UAE", abbr: "TDM-FP", id: 1 },
        { name: "Mall of the Emirates, Dubai, UAE", abbr: "MOE-FP", id: 2 },
        { name: "Dubai Marina Mall, Dubai, UAE", abbr: "DMM-FP", id: 3 },
        { name: "Galleria Mall, Abu Dhabi, UAE", abbr: "GAL-FP", id: 4 },
        { name: "Yas Mall, Abu Dhabi, UAE", abbr: "YAS-FP", id: 5 }
      ],
      items: [
        {
          code: "M3600",
          art: "",
          color: "238",
          colorDesc: "black/white",
          category: "male polo fps",
          textBlurb:
            "The Twin Tipped Fred Perry shirt. Made from our classic cotton piqué, in a contemporary fit. The M3600 has slightly slimmer proportions than our original M12 tennis shirt, with neat cuffs and collar.  Cotton piqué.  Regular fit Slighter slimmer proportions than the original M12 Twin tipped collar and cuffs Two button placket.",
          imgSrc: require("@/assets/products/M3600.jpg")
        },
        {
          code: "M36001",
          art: "",
          color: "238",
          colorDesc: "black/white",
          category: "male polo fps",
          textBlurb:
            "The Twin Tipped Fred Perry shirt. Made from our classic cotton piqué, in a contemporary fit. The M3600 has slightly slimmer proportions than our original M12 tennis shirt, with neat cuffs and collar.  Cotton piqué.  Regular fit Slighter slimmer proportions than the original M12 Twin tipped collar and cuffs Two button placket.",
          imgSrc: require("@/assets/products/M3600.jpg")
        },
        {
          code: "M6000",
          art: "",
          color: "238",
          colorDesc: "black/white",
          category: "male polo fps",
          textBlurb:
            "The Twin Tipped Fred Perry shirt. Made from our classic cotton piqué, in a contemporary fit. The M3600 has slightly slimmer proportions than our original M12 tennis shirt, with neat cuffs and collar.  Cotton piqué.  Regular fit Slighter slimmer proportions than the original M12 Twin tipped collar and cuffs Two button placket.",
          imgSrc: require("@/assets/products/M3600.jpg")
        },
        {
          code: "M12",
          art: "",
          color: "238",
          colorDesc: "black/white",
          category: "male polo fps",
          textBlurb:
            "The Twin Tipped Fred Perry shirt. Made from our classic cotton piqué, in a contemporary fit. The M3600 has slightly slimmer proportions than our original M12 tennis shirt, with neat cuffs and collar.  Cotton piqué.  Regular fit Slighter slimmer proportions than the original M12 Twin tipped collar and cuffs Two button placket.",
          imgSrc: require("@/assets/products/M3600.jpg")
        }
      ],
      sizes: [
        {
          text: "XXS"
        },
        {
          text: "XS"
        },
        {
          text: "S"
        },
        {
          text: "M"
        },
        {
          text: "L"
        },
        {
          text: "XL"
        },
        {
          text: "XXL"
        },
        {
          text: "3XL"
        },
        {
          text: "4XL"
        }
      ],
      stock: "21 in stock",
      currencyHeaders: [
        {
          text: "AED",
          value: "aed"
        },
        { text: "SAR", value: "sar" },
        { text: "KWD", value: "kwd" },
        { text: "BHD", value: "bhd" },
        { text: "EGP", value: "egp" },
        { text: "QAR", value: "qar" }
      ],
      currencies: [
        {
          text: "325"
        },
        {
          text: "325"
        },
        {
          text: "15"
        },
        {
          text: "32.5"
        },
        {
          text: "3500"
        },
        {
          text: "325"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.prod-title {
  // justify-content: center;
  background-color: #ffd400;
}

.prod-subtitle {
  // text-align: center;
  background-color: #ffd400;
}

.prod-category {
  background-color: #ffd400;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 1;
  position: absolute;
  width: 100%;
}
</style>
