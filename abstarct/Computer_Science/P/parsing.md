# parsing

### about

- parsing refers to the process of analyzing a string of symbols, either in natural language, computer languages, or data structures, acording to the rules of a formal grammar.
- Parsing is a fundamental concept in computer science, especially in the fields of compilers, interpreters, and data processing.

### feature

1. Syntax anlysis: Syntax or code breaking down to make ease to know.

2. Parsing Techniques
- Top-Down parsing  : Start from the highest-level contruct and works down the parse tree.
- Bottom-up parsing : Begins with the input symbols and works up to construct the parse tree.

3. Parse Tree(Syntax Tree): A hierarchical tree structure that represents the syntactic structure of the input based on the grammar rules. Each node in the tree represents a construct occurring in the input.

4. Abstract Syntax Tree(AST): A simplified version of the parse tree that omits certain syntactic details and focuses on the hierarchical structure of the source code elements.

5. Parser Generators: Tools that automatically generate parsers from a given grammar specification, such as Yacc, Bison, and ANTLR.

6. Lexical Analysis: Often the first step in parsing, where the input is divided into tokens(words or symbols) before further syntatic analysis.