# pipeline

### what is pipeline

- Concept: in general sense, pipeline refers to a system or series of connected elements through which something flows. In technology and various industries, the term is commonly used to describe a process
  where tasks are divided into stages, and each stage performs a specific operation on the input, passing the transformed output to the next stage.

1. Data Processing Pipeline: Series of steps or stages where data flows through various operations, from ingestion to analysis or storage.

2. Software Development Pipeline: Series of automated steps involved in the development, testing, and deployment of software. it include tasks like code compilation, testing, code analysis, and deployment.

3. Pipeline in Continuous Integration/Continuous Deployment (CI/CD): In devops practices, a pipeline refers to the automated process of delivering code changes from version control to production. It involves
   stages like building, testing, and deploying software in a controlled and automated manner.
4. Hardware Pipeline: In computer architecture, it's a technique where multiple instructions are overlapped in execution to improve throughput. Each stage of the pipeline handles a different instruction.

5. Data Pipeline in Machine Learning: It,s a sequence of data processing components used to prepare data, tran models, evaluate performance, and deploy machine learning models.

### sequence

\# ver.java

```java
InputStream fileIn              = new FileINputStream("file.txt");
BufferedInputStream bufferedIn  = new BufferedInputStream(fileIn);
InputStreamReader reader        = new InputStreamReader(bufferedIn, "UTF-8");
BufferedReader bufferedReader   = new BufferedReader(reader);
```

0. InputStream: This class plays a fundamental role. That represents an input stream of bytes.(Deal with raw data)
1. FileInputStream reads raw bytes from the file.
2. BufferedinputSteram adds buffering to improve read efficiency.
3. InpuStreamReader converts bytes to characters using specified encoding.
4. BufferedReader adds line-reading capability and additional buffering.



### conclusion

- pipeline is a sequence of processing steps or tasks arranged in a linear process.