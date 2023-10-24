# Project YOLO

This project aims to containerize and deply an application using Docker, along with provisioning infrastructure using Terraform and configuring servers with Ansible.

## Requirements
Make sure that you have the following installed:
- [Node.js](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04) 
- npm 
- [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/) and start the MongoDB service with `sudo service mongod start`

## Setup Instructions
1. Clone the repository to your local machine.
2. Navigate to the `client` folder and run `npm install` to install frontend dependencies.
3. Start the frontend application using `npm start`.
4. Open a new terminal, navigate to the `backend` folder, and run `npm install` to install backend dependencies.
5. Start the backend application using `npm start`.

## Terraform Implementation
For the infrastructure setup, we utilized Terraform scripts to provision the required resources on the Google Cloud Platform (GCP). The scripts automate the creation of virtual machines and other necessary infrastructure components. For detailed information, refer to the `terraform/` directory.

## Ansible Configuration
The application server setup and configuration were handled using Ansible playbooks. These playbooks triggered both resource provisioning using Terraform and server configuration using defined Ansible roles. For more details, see the `ansible/` directory.

## Contributors
- Janice Keller