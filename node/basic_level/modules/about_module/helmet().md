# helmet()

**What is helmet?**

helps you secure your Node.js application by 'setting several HTTP headers'.

acts like Express and simmilar technologies, automatically adding or removing HTTP headers 'to comply with web security standards',

**benefits**

protect from 'Cross-Site Scripting (XSS)' & 'click-jacking attacks'

**why use**

because of Express applications do not come with security HTTP headers out of the box, use of helmet is good decision.

**contentSecurityPolicy**

helps you mitigate several attacks. csp allows you to speify what sources of content a web page is allowed to load and execute. known as CSP. 



<details><summary> usage </summary>

```
helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
        "font-src": ["'self'", "external-website.com"],
        "style-src": null,
    },
})
```
</details>

**Referrer-Policy**

