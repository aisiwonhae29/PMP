# google serch engine

> quote: https://www.analistaseo.es/posicionamiento-buscadores/how-google-works-working-algorithms/

### pmp points

- search-click related values records and use for making products.

### about

### Tech

\# Navboost

- collects data on how users interact with - search results specifically through their clicks on different queries.
- This system tabulates clicks and uses algorithms that learn from human-made quality ratings to improve the ranking of results.
- Differntiates between phone, PC and considers location.
- Records a click data from querioes.

**conclusion** Making qualified data.

\# RankBrain

- This is a Google AI and machine learning system, essential in processing search results.
- This uses Tensor Processing Unit to enhance its processing capability and enrgy efficiency.
- This continually improves its ability to understand language and the intentions behind searches and particularly effective in interpreting ambiguous or complex queries.
- QBST and Term Weighting are components of RanBrain.
  - QBST(Query Based Salient Terms)
    - QBST focuses on the most important terms within a query and related documents, using this information to influence how results are ranked.
  - Term Weighting
    - Adjusts the relative importance of individual terms within a query, based on how users interact with search results.\
    - This helps determine how relevant certain terms are in teh context of the query.

**conclusion** Make accurately results with terms.

\# DeepRank
  
- DeepRank is the internal name for BERT
- By pre-training on large amount of document and adjusting with human feedback, DeepRank can fine-tune search results to be more intuitive and relevant to qualified result.

**conclusion** Understand more on query

\# RankEmbed & RankEmbed-BERT

#### RankEmbed

- RankEmbed focuses on the task of embedding relevant features for ranking.
- This assumed that handled by deep learning system to improve google's search classification process.

#### RankEmbed-BERT

- This is enhanced version of RankedEmbed, integrating the algorithm and structure of BERT.
- This integration was carried out to significantly improve Rankembed's language comprehension capabilities.
- This trained after retrieve the data.

**conclusion** Setting about ranking score

\# MUM

- It's approximately 1,000 times more powerful than BERT and represents a major advancement in google's search.
- Good performance makes from MUM but complexity of logic makes this module used selectively.

**conclusion** Good performance to make natural languages, high complexity.

\# Tangram & Glue

- All these systems work together within the framework of Tangram, which is responsible for assembling the SERP with data from Glue.
- This is not just a matter of ranking results, but organizing them in a way that is useful and accessible to users, considering elements like image carousels, direct answers, and other non textual elements.
  - Tangram: Assembles the SERP by organizaing elements such as web results, carousels, and snippets.
  - Glue: Generalization and extension of Navboost. Unified model of user interaction signals for all types of search results.
  
**conclusion** Integrates the results and make SERP:Searching Engine Result Page

\# Freshness node & Instant Glue

- Giving more weight to recent information, which is especially crucial in searches about news or current events.

### summary

- Navboost: collect data with search result.
- RankBrain: AI machine learning system, it train with user's search result.
  - QBST: focuses on the most important terms within a query and related documents, make a good result for ambiguous and complex query
  - Term Weighting: Make a decision for the relative importance each terms within a query, based on search engine's db term's are rare or often occurs and making balance.