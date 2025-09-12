# markdown

### vanilla markdown

**bold**

*itlicized*

> blockquote

`code`

---

[link](https://youtube.com)

![img](file.jps)

here's  simple footnote, [^1] 

[^bignote]

[^1]: This is the first foot note

[^bignote]: here's one with multiple paragraphs nd code

    Indent paragraphs to include them in the foot note.

    `{ my code }`

### Mermaid markdown

**\# flowchart**

```mermaid

graph TD;
  %% Left-Right Arrows
  C --- A --- B
  C<-->z


  %% Up-Down Arrows
  A --> D
  A --> E

```


**\# sequence diagram**

```mermaid
sequenceDiagram
    participant A
    participant B
    A->>B: Hello, B!
    B->>A: Hi, A!
```

**\# gantt chart**

```mermaid
gantt
    title A Gantt Diagram
    dateFormat  YYYY-MM-DD
    section Section
    A task           :a1, 2020-06-01, 30d
    Another task     :after a1  , 20d
```

**\# class diagram**

```mermaid
classDiagram
    Class01 <|-- AveryLongClass : Cool
    Class03 *-- Class04
    Class05 o-- Class06
    Class07 .. Class08
    Class09 --> C2 : Where am i
    Class09 --* C3

    class Class01{
        <<service>>
        String name
        int id
        String name
        List data
        eat(line)
    }
```

**\#Pie chart**

```mermaid
pie
    title Sales Distribution
    "Product A" : 40
    "Product B" : 25
    "Product C" : 35
```