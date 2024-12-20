import { mrSandwichFeatures } from "./mrSandwich";
import { LassiStoryFeatures } from "./mrSandwich";
import { RameshwaramCafeFeatures } from "./mrSandwich";
import { SSComboKitchenFeatures } from "./mrSandwich";
import {  UrbanDesiChatFeatures } from "./mrSandwich";
import {  NawabiKukkadFeatures } from "./mrSandwich";

// import { mcdonaldsFeatures } from "./mcdonalds";
// import { kfcFeatures } from "./kfc";

export const franchiseFeatures = {
  MrSandwich: mrSandwichFeatures,
  LassiStory: LassiStoryFeatures,
  RameshwaramCafe : RameshwaramCafeFeatures,
  SSComboKitchen : SSComboKitchenFeatures,
  UrbanDesiChat : UrbanDesiChatFeatures,
  NawabiKukkad : NawabiKukkadFeatures

};






export const pricingModels = {
  MrSandwich: {
    baseTitle: "Takeaway model",
    proTitle: "Standalone mode",
    enterpriseTitle: "Gold",
    baseFeatures: [
      { text: 'Area Required: 200 sq ft', included: true },
      { text: 'Total Investment: 7-8 Lakhs', included: true },
      { text: 'Total Sales: 2.4 lakh', hidden: false, included: true },
      { text: 'Employees: 10', hidden: false, included: true },
    ],
    proFeatures: [
      { text: 'Area Required: 600 sq ft', included: true },
      { text: 'Total Investment: 2-15 Lakh', included: true },
      { text: 'Total Sales: 3 lakh', hidden: false, included: true },
      { text: 'Employees: 20', hidden: false, included: true },
    ],
    // enterpriseFeatures: [
    //   { text: 'Area Required: 600 sq ft', included: true },
    //   { text: 'Total Investment: 12-15 Lakh', included: true },
    //   { text: 'Total Sales: 3 lakh', hidden: false, included: true },
    //   { text: 'Employees: 50', hidden: false, included: true },
    // ],
  },
  LassiStory: {
    baseTitle: "Takeaway model",
    proTitle: "Standalone mode",
    enterpriseTitle: "Gold",
    baseFeatures: [
      { text: 'Area Required: 200 sq ft', included: true },
      { text: 'Total Investment: 7-8 Lakhs', included: true },
      { text: 'Total Sales: 2.4 lakh', hidden: false, included: true },
      { text: 'Employees: 10', hidden: false, included: true },
    ],
    proFeatures: [
      { text: 'Area Required: 600 sq ft', included: true },
      { text: 'Total Investment: 2-15 Lakh', included: true },
      { text: 'Total Sales: 3 lakh', hidden: false, included: true },
      { text: 'Employees: 20', hidden: false, included: true },
    ],
    enterpriseFeatures: [
      { text: 'Area Required: 600 sq ft', included: true },
      { text: 'Total Investment: 12-15 Lakh', included: true },
      { text: 'Total Sales: 3 lakh', hidden: false, included: true },
      { text: 'Employees: 50', hidden: false, included: true },
    ],
  },
  RameshwaramCafe: {
    baseTitle: "FOFO",
    proTitle: "FOCO",
    enterpriseTitle: "Gold",
    baseFeatures: [
      { text: 'Area Required: 1000 sq ft', included: true },
      { text: 'Total Investment: 11.90 Lakhs', included: true },
      { text: 'Total Sales: 9 lakh', hidden: false, included: true },
      // { text: 'Employees: 10', hidden: false, included: true },
    ],
    proFeatures: [
      { text: 'Area Required: 1000 sq ft', included: true },
      { text: 'Total Investment: 22-23 Lakh', included: true },
      { text: 'Total Sales: 9 lakh', hidden: false, included: true },
      { text: 'Employees: 20', hidden: false, included: true },
    ],
    // enterpriseFeatures: [
    //   { text: 'Area Required: 600 sq ft', included: true },
    //   { text: 'Total Investment: 12-15 Lakh', included: true },
    //   { text: 'Total Sales: 3 lakh', hidden: false, included: true },
    //   { text: 'Employees: 50', hidden: false, included: true },
    // ],
  },
  SSComboKitchen: {
    baseTitle: "FOFO",
    proTitle: "FOCO",
    enterpriseTitle: "Gold",
    baseFeatures: [
      { text: 'Area Required: 300 sq ft', included: true },
      { text: 'Total Investment: 11.90 Lakhs', included: true },
      { text: 'Total Sales: 5 lakh', hidden: false, included: true },
      // { text: 'Employees: 10', hidden: false, included: true },
    ],
    proFeatures: [
      { text: 'Area Required: 800 sq ft', included: true },
      { text: 'Total Investment: 22-23 Lakh', included: true },
      { text: 'Total Sales: 5 lakh', hidden: false, included: true },
      // { text: 'Employees: 20', hidden: false, included: true },
    ],
    // enterpriseFeatures: [
    //   { text: 'Area Required: 600 sq ft', included: true },
    //   { text: 'Total Investment: 12-15 Lakh', included: true },
    //   { text: 'Total Sales: 3 lakh', hidden: false, included: true },
    //   { text: 'Employees: 50', hidden: false, included: true },
    // ],
  },
  UrbanDesiChat: {
    baseTitle: "FOFO",
    proTitle: "FOCO",
    enterpriseTitle: "Gold",
    baseFeatures: [
      { text: 'Area Required: 300 sq ft', included: true },
      { text: 'Total Investment: 11.90 Lakhs', included: true },
      { text: 'Total Sales: 5 lakh', hidden: false, included: true },
      // { text: 'Employees: 10', hidden: false, included: true },
    ],
    proFeatures: [
      { text: 'Area Required: 600 sq ft', included: true },
      { text: 'Total Investment: 22-23 Lakh', included: true },
      { text: 'Total Sales: 5 lakh', hidden: false, included: true },
      // { text: 'Employees: 20', hidden: false, included: true },
    ],
    // enterpriseFeatures: [
    //   { text: 'Area Required: 600 sq ft', included: true },
    //   { text: 'Total Investment: 12-15 Lakh', included: true },
    //   { text: 'Total Sales: 3 lakh', hidden: false, included: true },
    //   { text: 'Employees: 50', hidden: false, included: true },
    // ],
  },
  NawabiKukkad: {
    baseTitle: "FOFO",
    proTitle: "FOCO",
    enterpriseTitle: "Gold",
    baseFeatures: [
      { text: 'Area Required: 300 sq ft', included: true },
      { text: 'Total Investment: 11.90 Lakhs', included: true },
      { text: 'Total Sales: 10 lakh', hidden: false, included: true },
      // { text: 'Employees: 10', hidden: false, included: true },
    ],
    proFeatures: [
      { text: 'Area Required: 800 sq ft', included: true },
      { text: 'Total Investment: 22-23 Lakh', included: true },
      { text: 'Total Sales: 10 lakh', hidden: false, included: true },
      // { text: 'Employees: 20', hidden: false, included: true },
    ],
    // enterpriseFeatures: [
    //   { text: 'Area Required: 600 sq ft', included: true },
    //   { text: 'Total Investment: 12-15 Lakh', included: true },
    //   { text: 'Total Sales: 3 lakh', hidden: false, included: true },
    //   { text: 'Employees: 50', hidden: false, included: true },
    // ],
  },


};