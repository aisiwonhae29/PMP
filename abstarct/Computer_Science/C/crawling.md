# crawling

### about

- This refers to the automated process of systematically browsing the WWW to collect data from websites.
- This process istypically carried out by web crawlers, also known as spiders or bots.

### install

- pip install Scrapy
- conda install -c conda-forge scrapy (recommended)
 
### components

\# Web Crawler: Spider/Bot

- A web crawler is a program or automated script that methodically scans web pages.
- It follows links on a webpage to find and index new pages.

\# Indexing

- The data collected by crawlers is stored in a large database called an index.
- Indexing helps search engines quickly retrieve relevant information when a user performs a search query.

\# Seed Urls

- Crawling usually starts with a list of initial URLs known as seed URls.
- From these URLs, the crawler follows hyperlinks to discover additional pages.

\# Parsing

- The content of the fetched web pages is analyzed to extract useful info.
- This can include text, metadata, images, links, and other elements.

\# Politeness and Throttling

- Crawlers must respect the load they place on websites.
- They use mechanisms like delay between requests(politeness) and limiting the number of requests persecond (throttling) to avoid overwhelming servers.

\# robots.txt

- A special file located at the root of websites that provides instructions to crawlers.
- It can specify which pages or sections of the site should not be crawled.