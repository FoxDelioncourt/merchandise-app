<template>
  <div class="external-product">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" class="pb-0">
          <v-card>
            <v-img
              class="img-catalog"
              src="@/assets/products/M3600.jpg"
              height="500"
              max-height="500"
              position=" top center"
              contain
            ></v-img>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" class="pb-0">
          <v-row>
            <v-col class="pt-0 pl-0">
              <v-card height="360" max-height="360">
                <v-card-title class="prod-title">{{
                  items[0].code
                }}</v-card-title>
                <v-card-subtitle class="prod-subtitle pb-1 mt-0"
                  >{{ items[0].color }} .
                  {{ items[0].colorDesc }}</v-card-subtitle
                >
                <v-card-subtitle class="prod-category pt-1">{{
                  items[0].category.toUpperCase()
                }}</v-card-subtitle>
                <v-card-text class="pt-4">
                  {{ items[0].textBlurb }}
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12" class="pt-0 pl-0">
              <v-card>
                <v-slide-group v-model="model" center-active show-arrows>
                  <v-slide-item
                    v-for="n in 15"
                    :key="n"
                    v-slot:default="{ active, toggle }"
                  >
                    <v-card
                      :color="active ? 'primary' : 'grey lighten-1'"
                      class="ma-2"
                      height="110"
                      width="100"
                      @click="toggle"
                    >
                      <v-img
                        class="img-catalog"
                        src="@/assets/products/M3600.jpg"
                        height="110"
                        max-height="110"
                        position=" top center"
                      ></v-img>
                      <!-- <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                      > -->
                      <!-- <v-scale-transition>
                          <v-icon
                            v-if="active"
                            color="white"
                            size="48"
                            v-text="'mdi-close-circle-outline'"
                          ></v-icon>
                        </v-scale-transition> -->
                      <!-- </v-row> -->
                    </v-card>
                  </v-slide-item>
                </v-slide-group>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="pt-0">
          <v-card>
            <v-tabs
              v-model="tab"
              background-color="#ffd400"
              left
              class="size-tabs"
              show-arrows
            >
              <v-tab
                v-for="size in items[0].sizes"
                :key="size.text"
                :href="'#tab-' + size.text"
              >
                {{ size.text }}
              </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
              <v-tab-item
                v-for="size in items[0].sizes"
                :key="size.text"
                :value="'tab-' + size.text"
              >
                <v-card flat>
                  <v-card-title>
                    <v-autocomplete
                      :items="doors"
                      item-text="name"
                    ></v-autocomplete>
                  </v-card-title>
                  <v-card-text>{{ stock }}</v-card-text>
                  <v-card-text>
                    <v-simple-table
                      :dense="dense"
                      :fixed-header="fixedHeader"
                      :height="height"
                    >
                      <template v-slot:default>
                        <thead>
                          <tr>
                            <th
                              class="text-left"
                              v-for="header in currencyHeaders"
                              :key="header.text"
                            >
                              {{ header.text }}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td v-for="curr in currencies" :key="curr.text">
                              {{ curr.text }}
                            </td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
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
          color: "238",
          colorDesc: "black/white",
          category: "polo fps",
          textBlurb:
            "The Twin Tipped Fred Perry shirt. Made from our classic cotton piqué, in a contemporary fit. The M3600 has slightly slimmer proportions than our original M12 tennis shirt, with neat cuffs and collar.  Cotton piqué.  Regular fit Slighter slimmer proportions than the original M12 Twin tipped collar and cuffs Two button placket.",
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
          ]
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
</style>
