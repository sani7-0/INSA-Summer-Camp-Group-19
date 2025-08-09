# Software Requirements Specification (SRS) for EduConnect

## Table of Contents
1. [Introduction](#1-introduction)  
    1.1 [Purpose](#11-purpose)  
    1.2 [Document Conventions](#12-document-conventions)  
    1.3 [Intended Audience and Reading Suggestions](#13-intended-audience-and-reading-suggestions)  
    1.4 [Project Scope](#14-project-scope)  
    1.5 [References](#15-references)  
2. [Overall Description](#2-overall-description)  
    2.1 [Product Perspective](#21-product-perspective)  
    2.2 [Product Features](#22-product-features)  
    2.3 [User Classes and Characteristics](#23-user-classes-and-characteristics)  
    2.4 [Operating Environment](#24-operating-environment)  
    2.5 [Design and Implementation Constraints](#25-design-and-implementation-constraints)  
    2.6 [Assumptions and Dependencies](#26-assumptions-and-dependencies)  
3. [System Features](#3-system-features)  
    3.1 [Functional Requirements](#31-functional-requirements)  
4. [External Interface Requirements](#4-external-interface-requirements)  
    4.1 [User Interfaces](#41-user-interfaces)  
    4.2 [Hardware Interfaces](#42-hardware-interfaces)  
    4.3 [Software Interfaces](#43-software-interfaces)  
    4.4 [Communications Interfaces](#44-communications-interfaces)  
5. [Nonfunctional Requirements](#5-nonfunctional-requirements)  
    5.1 [Performance Requirements](#51-performance-requirements)  
    5.2 [Safety Requirements](#52-safety-requirements)  
    5.3 [Security Requirements](#53-security-requirements)  
    5.4 [Software Quality Attributes](#54-software-quality-attributes)  
6. [Appendix](#6-appendix)  

---

## 1. Introduction

### 1.1 Purpose
This Software Requirements Specification (SRS) document outlines the requirements for the EduConnect web-based platform — a student-centric social media platform designed to empower learning, spark collaboration, and share educational victories.  
It serves as a guideline for developers, stakeholders, and testers to ensure the platform meets its objectives.

### 1.2 Document Conventions
- Headings follow a hierarchical structure (e.g., 1.1, 2.1).  
- Requirements are labeled as **FR** (Functional Requirement) or **NFR** (Non-Functional Requirement) followed by a unique identifier.  
- Markdown syntax is used for formatting.

### 1.3 Intended Audience and Reading Suggestions
- **Audience:**  
  - Project Team Lead (Fetehadin)  
  - Developers (Yehabesha, Merwa, Fetehadin, Deresani)  
  - UI/UX Designers (Merwa, Yehabesha)  
  - Testers and educational stakeholders  
- **Suggestions:** Review [Section 3](#3-system-features) for functional requirements first, then [Section 5](#5-nonfunctional-requirements) for security and non-functional constraints.

### 1.4 Project Scope
EduConnect is a web-based platform that bridges the gap between students by providing a modern, focused environment for academic collaboration, resource sharing, and communication.  
Key features include:
- User authentication  
- Post system  
- Commenting  
- Educational resource sharing  
- Admin announcements  
- Discussion forums  
- Event calendar  
- Contests, legacy points, mentorship system, daily challenges, study groups, analytics, and social interactions.  

The platform addresses educational inequality with accessible, scalable technology.

### 1.5 References
- Project Summary and README provided by the Team Lead.  
- **Tech Stack:**  
  - Frontend: React, HTML, CSS, JavaScript  
  - Backend: Python with Django, RESTful APIs  
  - Database: PostgreSQL  
  - AI: GPT-based API or similar LLM  

---

## 2. Overall Description

### 2.1 Product Perspective
EduConnect is an independent, web-based, mobile-friendly educational platform designed to empower students across Ethiopia, under the belief that **"Education must be free"**.  
It integrates with educational data sources where applicable and includes an AI Assistant powered by GPT-based or similar LLM.

### 2.2 Product Features
- **User Authentication:** Secure sign-up/sign-in with 2FA  
- **Post System:** CRUD for posts with text, images, and links  
- **Commenting:** Threaded comments  
- **Educational Resource Sharing**  
- **Admin Announcements**  
- **Discussion Forums**  
- **Event Calendar** with integrations  
- **Contests** & **Legacy Points**  
- **Mentorship System**  
- **Daily Challenges/Quiz Games**  
- **Study Groups**  
- **Analytics for Students**  
- **Social Interactions**

### 2.3 User Classes and Characteristics
- **Students:** Primary users  
- **Administrators:** Manage content, contests, and mentorship  
- **Support Staff:** Handle queries, moderate content  

### 2.4 Operating Environment
- Frontend: React, HTML, CSS, JavaScript  
- Backend: Django (Python), RESTful APIs  
- Database: PostgreSQL  
- AI: GPT-based API or equivalent  
- Deployment: Cloud (AWS, Azure)  

### 2.5 Design and Implementation Constraints
- GDPR & FERPA compliance  
- Secure authentication  
- Scalability for thousands of concurrent users  
- Cross-browser compatibility  

### 2.6 Assumptions and Dependencies
- GPT-based API availability  
- Reliability of third-party APIs for contests/mentorship  

---

## 3. System Features

### 3.1 Functional Requirements
#### 3.1.1 User Authentication
- **FR1.1:** Secure password policy  
- **FR1.2:** 2FA sign-in option  
- **FR1.3:** Passwords encrypted with bcrypt  

#### 3.1.2 Post System
- **FR2.1:** Create, edit, delete posts  
- **FR2.2:** Support text, images, links  
- **FR2.3:** Admin moderation  

#### 3.1.3 Commenting
- **FR3.1:** Threaded comments  
- **FR3.2:** Edit/delete own comments  
- **FR3.3:** Admin moderation  

#### 3.1.4 Educational Resource Sharing
- **FR4.1:** Upload/share resources  
- **FR4.2:** Secure storage  
- **FR4.3:** Admin approval  

... *(Continue with all requirements as listed in your provided text)*  

---

## 4. External Interface Requirements

### 4.1 User Interfaces
- Responsive web UI  
- Mobile-optimized for iOS/Android  

### 4.2 Hardware Interfaces
- Standard devices  

### 4.3 Software Interfaces
- GPT API  
- Calendar API  
- Third-party APIs for contests/mentorship  

### 4.4 Communications Interfaces
- HTTPS  
- SMTP for notifications  
- WebSocket for real-time  

---

## 5. Nonfunctional Requirements

### 5.1 Performance Requirements
- 10,000 concurrent users (<2s response)  

### 5.2 Safety Requirements
- Data breach safeguards  

### 5.3 Security Requirements
- **NFR3.1:** Password encryption  
- **NFR3.2:** 2FA  
- **NFR3.3:** RBAC  
- **NFR3.4:** AI & manual moderation  
- **NFR3.5:** GDPR/FERPA compliance  
- **NFR3.6:** Auto-logout after 15 minutes inactivity  

### 5.4 Software Quality Attributes
- <10-minute learning curve  
- 99.9% uptime  
- Strong moderation  

---

## 6. Appendix
**Glossary:**  
- **Smart Search:** AI-driven search  
- **Legacy Points:** Engagement rewards  

**Stakeholders:**  
- Project Lead: Fetehadin  
- Frontend Dev: Yehabesha, Merwa  
- Backend Dev: Fetehadin, Deresani  
- UI/UX Designer: Merwa, Yehabesha
