# service-scheme-builder

I want a web app that allows you to create pricing schemas for editing services based on set service rates multiplied by word counts for uploaded documents. Word counters should be able to work with multiple document types. The app should integrate popular payment gateways. It should be a shopify web app, and it should be easy to refactor it as a wordpress or wix web app if desired. The way it works is users navigating an ecommerce site that sells editing services should be able to upload document(s) they want reviewed, and be able to select the editing service(s) they want for each uploaded document or bundle of documents. Sellers should be able to easily create editing services and give them a $/word service rate, which will be multiplied against the uploaded document(s) word count. Sellers should be able to set a minimum and maximum word count for any unique checkout e.g., they should be able to set a minimum of 500 words and maximum of 500,000 words (or whatever maximum and minimum they desire). Any uploaded document final word counts below the minimum or above the maximum will result in an error at final payment checkout i.e., users will see an error when they try to pay that says they need to have at least [the minimum word count] or stay below [the maximum word count] to be approved to checkout. Sellers should be able to easily set bundled rates for when multiple services are selected; bundled rates should always trump individual rates in final calculations of price. Buyers should be able to do payment plans (payment gateways that offer payment plans should be easily integrated into the web app). In the checkout screen, prior to buying, sellers should be able to create a custom survey if they want asking buyers to provide more details about what they are looking for in their service request. The default survey should be one optional question with an open field text box that asks "Please provide any further details that would help us provide the best service possible." When buyers buy, sellers should be able to set a deposit rate, not the full price; the deposit should be determined by a percentage (set by the seller) of the final calculated price. Once the deposit or payment request goes through, the seller should have the uploaded document(s) and service requests sent to a dedicated inbox and they should receive a notification (they should be able to set notification settings) that they need to review the documents and the service request. The buyer should be charged the deposit at checkout if the seller set up a deposit policy. The buyer should have to provide email, phone, and message notification settings at checkout. The buyer should not yet be charged full price or the first payment (if the buyer set up a payment plan) until the seller approves the project in their inbox, after reviewing the documents. When the seller approves or rejects the project, the buyer should be notified based on their message notification settings. If the seller approves, the payment policy (whether full price or a payment plan) less any deposit should be implemented immediately. If the seller rejects the service request, they should be prompted to provide a message saying why they rejected it, which should be sent to the buyer based on their message notification settings along with a refund of their deposit (if applicable).

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/service-scheme-builder.git
cd service-scheme-builder
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
