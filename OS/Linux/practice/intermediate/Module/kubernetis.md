# k8: kubernetis 

### about

- k8 is an open-source container orchestration platform that automates the deployment, scailing, and management of containerized app.

### architecture

- Master node(Control plane): Manages the kobernetes cluster. It includes components such as the API server, scheduler controller manager and etcd.
- Worker node               : Run the containerized app. Each node contains components like the kubelet, kube-proxy, and container runtime(e.g., Docker).

### component

- Pods          : The smallest deployable units in k8. A pod can contain one or more containers that share the same network namespace and storage.
- Services      : Define a logical set of pods and a policy by which to access them. Services provide load balancing and stable endpoints for pods.
- Deployments   : Manage the deployment and scailing of a set of pods. They provide declarative updates to app.
- Replicasets   : Ensure a specified number of pod replicas and running at any given time.
- Namespaces    : Provide a way to divide cluster resources between multiple users or teams.

