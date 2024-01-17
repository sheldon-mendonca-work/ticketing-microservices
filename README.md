<h1>Ticketing Microservice project</h1>

<h2>Summary</h2>
This ticketing app is a full-stack micro-service app to handle various aspects of ticketing. The following services are provided:
<ol>
  <li>User Authentication</li>
  <li>Ticketing Booking</li>
  <li>Server side rendered frontend app.</li>
  <li>NATS streaming server to handle all requests.</li>
  <li>Individual MongoDB database are used for each microservice.</li>
  <l1>Deployment and services for Kubernetes are created using YAML files. </l1>
  <l1>Image for each microservice is created in <b>Docker</b></l1>
</ol>

<h2>Features:</h2>
<ol>
  <li>Each microservice runs on a <b>Kubernetes</b> node and cross-pod networking is taken care by <b>NATS streaming server</b> and <b>Ingress-Nginx Controller</b>. </li>
  <li>Testing is done using <b>Jest, Supertest and MongoDB memory server</b>.</li>
  <li><b>Cookies</b> are used for authentication.</li>
  <li>All microservices are writted in <b>Typescript</b>.</li>
  <li>Deploying and updating of pods are handled by <b>Skaffold</b>.</li>
</ol>


Note: This project will be fully completed once I can create an AWS / GCP / Azure account :)
