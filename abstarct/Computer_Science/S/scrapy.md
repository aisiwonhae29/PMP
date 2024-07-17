# scrapy

### cmd

- scrapy startproject [String]: Set up the new scrapy project.
  - name/
    - scrapy.cfg        : deploy configuration file.
    - name/             : project's python module, you'll import your code from here.
      - __init__.py     : 
      - items.py        : project items definition file
      - middlewares.py  : project middlewares file
      - pipelines.py    : project pipelines file
      - settings.py     : project settings file
      - spiders/        : A directory where you'll later put your spiders..
        - __init__.py

### component

\# Spider 

- Spiders are classes that we define and that scrapy uses to scrape info from a website.
- They must subclass spider and define the initial requests to make, optionally how to follow links in the pages, and how to parse the downloaded page content to extract data.

### code

- start_urls(array): The crawl started by making requests to the URLs defined in the 'start_urls' attribute.
- parse: callback method.

### feature

- scheduled
- processed asynchronously

# scrapy usecase

\# start project

1. cmd[scrapy startproject [name]]
2. make the spiders and store this in spiders folder.
3. cmd[scrapy crawl quotes]

\# shell usage

- case 1

1. cmd[scrapy shell "https://quotes.toscrape.com/page/1/"]
2. cmd[response.css("title")] <br>
   cmd[response.css("title::text").getall()]<br>
   cmd[response.css("title::text").get()]<br>
   cmd[response.css("title::text")[0].get()]<br>
   cmd[response.css("title::text").re(r"Quotes.*)]
   cmd[response.css("title::text").re(r"Q\w+")]

- case 2

1. cmd[scrapy shell ""]

# Spider 

### logic

1. Start by generating the initial Requests to crawl the first URLs, and specify a callback function to be called with the response downloaded from those requests.

- The first requets to perform are obtained by calling the "start_requests()" method which generates Request for the URLs specified in the start_urls and the "parse" method as callback function for the Requests.

2. In the callback function, we parse the response(web page) and return item objects, request objects, or an iterable of these objects. Those Requests will also contain a callback(maybe the same) and will then be downloaded by Scrapy and then their response handled by the specified callback.
3. In callback functions, we parse the page contents, typically using selectors and generate items with the parsed data.

4. Finally, the items returned from the spider will be typically persisted to a database(in some item pipeline) or written to a file using feed exports.