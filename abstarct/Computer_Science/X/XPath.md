# XPath: XML Path Language

### about

- The XPath is a query language for selecting nodes from an XML document.
- It provides a way to navigate through elements and attribute in XML.

### concept

1. Nodes and Node types

- Element nodes     : <book>
- Attribute nodes   : 'category="cooking"'
- Text nodes        : 'Everyday Italian'
- Namespace nodes
- Processing instruction nodes
- Commnet nodes
- Document nodes

2. Basic XPath syntax

- /     : Selects from the root node.
- //    : Selects nodes in the document from the current node that match the selection no matter where they are.
- .     : Selects the current node.
- ..    : Selects the parent of the current node.
- @     : Selects attributes.

### usage

\# example files

```

<bookstore>
  <book category="cooking">
    <title lang="en">Everyday Italian</title>
    <author>Giada De Laurentiis</author>
    <year>2005</year>
    <price>30.00</price>
  </book>
  <book category="children">
    <title lang="en">Harry Potter</title>
    <author>J K. Rowling</author>
    <year>2005</year>
    <price>29.99</price>
  </book>
  <book category="web">
    <title lang="en">XQuery Kick Start</title>
    <author>James McGovern</author>
    <author>Per Bothner</author>
    <author>Kurt Cagle</author>
    <author>James Linn</author>
    <author>Vaidyanathan Nagarajan</author>
    <year>2003</year>
    <price>49.99</price>
  </book>
  <book category="web" cover="paperback">
    <title lang="en">Learning XML</title>
    <author>Erik T. Ray</author>
    <year>2003</year>
    <price>39.95</price>
  </book>
</bookstore>

```

- Selecting all book elements                               : /bookstore/book
- Selecting all title elemnts                               : //title
- Selecting the first book elemnt                           : /bookstore/book[1]
- Selecting the last book element                           : /bookstore/book[last()]
- Selecting all books with a specific category attribute    : /bookstore/book[@category='web]
- Selecting all titles with a specific language             : //title[@lang='en]
- Selecting all books with price less than 40.              : /bookstore/book[price<40]
- Selecting all authors of the third book                   : /bookstore/book[3]/author

### node js

- npm module [xmldom, xpath]