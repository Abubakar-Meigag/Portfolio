import serverEC2 from "../assets/cloud/python-server-with-db-CI-CD-pipeline.png"
import staticS3 from "../assets/cloud/aws-CI-CD-for-static-website.png";
import terraform from "../assets/cloud/terraform-practice-project.png";
import AutoScaling  from "../assets/cloud/auto-scaling.png";
import database from "../assets/cloud/migrate-to-RDS.png";
import cloudFormation from "../assets/cloud/automationg-deployment.png";



export const cloudData = [
  {
    id: 1,
    name: "CI/CD Pipeline for server EC2",
    image: serverEC2,
    Technology: "GitHub Actions - Amazon EC2 - YAML Script - Python",
    github: "https://github.com/Abubakar-Meigag/Contact-Manager",
    live: "https://github.com/Abubakar-Meigag/Contact-Manager/actions",
  },
  {
    id: 2,
    name: "CI/CD for S3 Static Hosting",
    image: staticS3,
    Technology: "HTML - CSS - Amazon S3 - GitHub Actions - YAML Script",
    github: "http://my-piplein-bucket-3377.s3-website.eu-west-2.amazonaws.com/",
    live: "https://github.com/Abubakar-Meigag/project-aws-pipeline",
  },
  {
    id: 3,
    name: "Terraform Project and Practice",
    image: terraform,
    Technology: "Terraform - Shell",
    github: "https://github.com/Abubakar-Meigag/terraform-sessions",
    live: "https://github.com/Abubakar-Meigag/terraform-sessions/blob/main/project/main.tf",
  },
  {
    id: 4,
    name: "Auto-Scaling - Lab",
    image: AutoScaling,
    Technology: "AWS CLI - Amazon EC2 - Application Load Balancer - Auto Scaling - AMI",
    github: "https://www.notion.so/Lab-175-Auto-Scaling-1297b56aa31880f7b0d8fee6b3486476",
    live: "https://www.notion.so/Lab-175-Auto-Scaling-1297b56aa31880f7b0d8fee6b3486476",
  },
  {
    id: 5,
    name: "Migrate to Amazon RDS - Lab",
    image: database,
    Technology: "AWS CLI - Amazon EC2 - Amazon RDS - MariaDB - CloudWatch - Systems Manager Parameter Store - MySQL",
    github: "https://www.notion.so/Lab-179-Migrate-to-Amazon-RDS-12c7b56aa31880df982fdefd4fba1cf6",
    live: "https://www.notion.so/Lab-179-Migrate-to-Amazon-RDS-12c7b56aa31880df982fdefd4fba1cf6",
  },
  {
    id: 6,
    name: "Automated Deployments with CloudFormation - Lab",
    image: cloudFormation,
    Technology: "AWS CloudFormation - Amazon EC2 - Amazon S3 - VPC - Security Groups - YAML",
    github: "https://www.notion.so/Lab-190-Automating-Deployments-with-AWS-CloudFormation-12d7b56aa31880939836dd531d5c7b16",
    live: "https://www.notion.so/Lab-190-Automating-Deployments-with-AWS-CloudFormation-12d7b56aa31880939836dd531d5c7b16",
  },
];