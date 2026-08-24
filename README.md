Agrivex Website

Official website project for Agrivex Pvt. Ltd., an agricultural company focused on building trust with farmers, dealers, and business partners through reliable agricultural products, practical field understanding, and strong relationships.

The website is designed as a responsive, single-page experience with a clean agricultural visual language, image-led sections, interactive capability cards, contact actions, and a dedicated careers section.

Project Overview

The Agrivex website presents the company through several core areas:

Agriculture vision and field understanding

Agrivex ecosystem

Strategic capabilities

Dealer partnership

Farmer solutions

Contact and business enquiries

Careers

Footer navigation and company information

The design emphasizes practical agriculture, credibility, relationships, and a modern but lightweight web experience.

Tech Stack

React 19 — UI development

TypeScript — type-safe application code

Vite — development server and production build tooling

CSS — component and section styling

HTML5 — semantic page structure

Google Fonts — Inter and Plus Jakarta Sans

No UI framework is required. The project uses custom React components and CSS.

Features

Responsive Single-Page Layout

The website is structured as a single scrolling page with navigation anchors for the major sections.

Interactive Navigation

The navigation includes:

About

Capabilities

Dealer

Farmer

Contact

Careers

The navbar changes appearance when the page is scrolled and tracks the currently visible section.

Strategic Capabilities Showcase

The capabilities section presents five areas:

Knowledge

Innovation

Crop Management

Aerial

Irrigation

The cards support hover interaction and automatic movement when the user is not interacting with the showcase.

Dealer Partnership

A dedicated dealer section communicates Agrivex's partnership model and provides a direct path to the contact section.

Farmer Solutions

The farmer section presents practical support areas including:

Crop Planning

Crop Nutrition Guidance

Pest & Disease Management

Water Management

Contact Actions

The contact section provides direct actions for:

Business email

Phone calls

Google Maps address

Business hours

The primary Talk to Agrivex action opens a pre-addressed email with a business enquiry subject.

Careers

The careers section provides a dedicated call-to-action that directs visitors to the contact section.

Footer

The footer includes:

Agrivex branding

Short company description

Section navigation

Email and phone contact

Location

Privacy Policy and Terms of Use placeholders

Agricultural landscape imagery

Accessibility & UX

The project uses semantic HTML elements, accessible labels, keyboard-visible focus states, image alt text, reduced-motion support for navigation animations, and responsive layouts.

Project Structure

agrivex_website/
├── public/
│   └── robots.txt
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── agriculture-vision/
│   │   │   ├── capabilities/
│   │   │   ├── dealership/
│   │   │   ├── farmer/
│   │   │   ├── footer/
│   │   │   ├── hero/
│   │   │   └── vision/
│   │   └── logo/
│   │
│   ├── components/
│   │   └── shared/
│   │       ├── BackToTop/
│   │       ├── Button/
│   │       ├── Container/
│   │       ├── Logo/
│   │       ├── Reveal/
│   │       └── ScrollProgress/
│   │
│   ├── config/
│   │   └── navigation.ts
│   │
│   ├── hooks/
│   │   └── useScrollReveal.ts
│   │
│   ├── layouts/
│   │   ├── AppLayout.tsx
│   │   └── Navbar.tsx
│   │
│   ├── sections/
│   │   ├── AgricultureVision/
│   │   ├── AgrivexEcosystem/
│   │   ├── Careers/
│   │   ├── Contact/
│   │   ├── DealerPartnership/
│   │   ├── FarmerSolutions/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   ├── StrategicCapabilities/
│   │   └── TechnologyInnovation/
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   ├── tokens.css
│   │   └── typography.css
│   │
│   └── main.tsx
│
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts

Getting Started

Requirements

Install:

Node.js

npm

Check your installed versions:

node -v
npm -v

Installation

Clone the repository and enter the project directory:

git clone <repository-url>
cd agrivex_website

Install dependencies:

npm install

Start Development Server

npm run dev

Vite will start the local development server and provide the local URL in the terminal.

Create Production Build

npm run build

This runs the TypeScript build followed by the Vite production build.

Preview Production Build

npm run preview

Available Scripts

Command

Purpose

npm run dev

Start the Vite development server

npm run build

Type-check and create the production build

npm run preview

Preview the production build locally

Design Principles

The website follows a few deliberate design principles:

Agriculture first — visuals and messaging should remain grounded in real agricultural contexts.

Trust over hype — the interface prioritizes credibility and clear communication.

Farmer-friendly — content and interactions should remain understandable and accessible.

Lightweight — avoid unnecessary dependencies and heavy UI frameworks.

Responsive — layouts should work across desktop, tablet, and mobile screens.

Purposeful motion — animation is used to support hierarchy and interaction rather than distract from the content.

Reusable components — shared UI elements are centralized under components/shared.

Content & Contact

Current business contact details used by the website:

Email: contact@agrivexglobal.com

Phone:

+91 72760 21972

+91 95036 50545

Location: Pune, Maharashtra, India

Deployment

The project is a standard Vite React application and can be deployed to any static hosting platform that supports a Vite production build.

The production output is generated with:

npm run build

The resulting build can then be deployed according to the hosting provider's static-site deployment process.

Notes for Future Development

Before production launch, review and replace any placeholder or future-facing functionality, including:

Social media links when official Agrivex accounts are created

Privacy Policy destination

Terms of Use destination

Final production contact details if they change

Production domain and deployment configuration

Final SEO and social-sharing metadata

Production image optimization

License

This repository contains the Agrivex website project and its associated design, content, and assets.

Unless otherwise stated, the website source code and visual assets are intended for the Agrivex project and should not be redistributed as a separate product.
