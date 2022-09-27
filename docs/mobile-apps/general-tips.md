---
sidebar_position: 2
---

# General Tips

The list below is in not exhaustive but will set you somewhat on the right path:

1. Think of your website's mobile UX/UI as the interface of the app.

2. Design for native mobile apps but implement the components using properties HTML and CSS only. 

3. Use intrinsic scaling to scale content (text, images, etc.).

4. Use flexbox or grids for layouts. 

5. Enable strongly page-level caching using a serviceworker. Going PWA is a must!

6. Optimize for the returning user instead of new user acquisition.

7. Use only a subset of your desktop workflow within you app workflow. Keep it simple. 

8. The Point of Entry (POE) for your app and the point of entry of your web app are not the same. Always use the login page as the POE of your mobile app unless you know what you're doing.

### Example:

    POE → facebook.com ❌
    POE → facebook.com/login ✅

9. Lose the footer at the bottom of your mobile website. See how [Red Goose](https://goose.red) uses a semantic footer element with a full-page dedicated to footer links.

10. Go for an "app-like" interface on your webapp at every opportunity, especially on mobile views. 

11. Simplicity is the ultimate sophistication. Use a simple slide-in or slide-out for menus. Less fancy is fast and better.

12. Split your webapp's functionality into levels and bring out only the most essential worflow into the fold of your app.

13. If possible, use `viewport` units `vw, vh, vmax, vmin` to specify the UI elements of your app. Take a look at [Toucaan CSS framework](https://toucaan.com) for app-like interface on mobile and tablets.

14. Make sure that your web app is fast and performant. Checkout [Lighthouse](https://developers.google.com/web/tools/lighthouse) to understand performance-budgeting and test for speed.

15. Your website must be at least responsive. A non-responsive website cannot be converted into an "acceptable" mobile app.

16. Intrinsic design is recommended for "native-like" app experience. Refer the documentation of [Toucaan CSS framework](https://toucaan.com) to implement intrinsic design on your app.

17. It is recommended to setup your development toolchain with a running Red Goose iOS or Android simulator. Point the url of your Red Goose app to `localhost` to develop for the mobile with hot reloading.

Read more about [app development](https://github.com/Red-Goose/app.fitspacepro.com#local-web-app-development) using Red Goose with the webstack.

18. It is always better (and economical) to use less code on the native side. Unless it is absolutely necessary, avoid adding native features to your Red Goose app. MAKE WEB DO YOUR BIDDING instead.

19. Resist the urge to add native functionality on your mobile app by keeping all your UX/UI related decisions on your web-app. That way you can control all the three mediums using one application.

20. Use native bundles in places where web functionality isn't available or not allowed by the owners of the app store i.e. Apple or Google. 


:::tip
There isn't much that the web cannot do today. ❤️
:::

21. Sometimes Apple or Google will reject your app for a seemingly ad-hoc reason. Look at the reasons provided by them for such a rejection, alleviate those issues (or appeal) and re-submit your app for approval. This is the normal process.

## The Donts

1. No footer with links. An app screen will never carry a footer like a website does. Try and create a page for the collection of footer links and provide just one inconspicuous link to such a page (view).

2. No beta tag anywhere on the product or near the logo. All apps on the App Store must be final.

3. No third party or competitor branding (like an Android logo inside an iOS app) or names must be present on your app. Apple & Google are extremely sensitive about this.

4. No third party payments are allowed inside the App Store. Use in-app purchases for payment functionality on your app. Custom development may be required on case-to case basis.

In general it is safe to say that any web-app could be converted into a great looking and performant mobile app no matter what space of business they're in. It is in the app owner's interest to not overdo or overbuild native functionality so as to keep the maintenance cost low.

Always consider the web-based option first!

