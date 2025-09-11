# import scrapy
import scrapy
from scrapy.spiders import CrawlSpider, Rule
from scrapy.linkextractors import LinkExtractor
from urllib.parse import urlparse, parse_qs, urlencode, urlunparse

class ExampleSpider(CrawlSpider):
    name = "example"
    allowed_domains = ["saramin.co.kr"]
    start_urls = ["https://www.saramin.co.kr/zf_user/search?search_area=main&search_done=y&search_optional_item=n&searchType=search&searchword=%EB%B0%B1%EC%97%94%EB%93%9C"]
    rules = {
        Rule(
            LinkExtractor(restrict_css="h2.job_tit a"),
            process_links="normalize_rec_idx",
            callback="parse_detail",
            follow=False
        ),
        # Rule(
        #     LinkExtractor(restrict_css="h2.job_tit a::attr(href)"),
        #     callback="parse_detail",
        #     follow=True
        # ),
    }

    def normalize_rec_idx(self, links):
        for link in links:
            u = urlparse(link.url)
            rec = parse_qs(u.query).get("rec_idx", [""])[0]
            if rec:
                link.url = urlunparse((u.scheme, u.netloc, "zf_user/jobs/relay/view-detail?rec_idx=", "", urlencode({"rec_idx": rec}), ""))
        print(123)
        return links

    def parse_detail(self, response):
        response.css("div.job-content ::text").getall()
        print(123)
        # for href in response.css("#recruit_info_list a.btn-apply::attr(href)").getall():
        #     yield response.follow(href, callback=self.parse_detail)
        pass
