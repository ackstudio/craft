# Craft CMS 5 Boilerplate with Vite and Tailwind

Welcome to the Craft CMS 5 Boilerplate by [ACK STUDIO](https://ackstudio.com). This starter kit is specifically crafted for in-house use at ACK STUDIO, providing a solid, opinionated foundation for launching any new Craft CMS project.

## Tech Stack

- [Craft CMS 5.x](https://craftcms.com) - Powerful Content Management System
- [DDEV](https://ddev.com) - Docker-powered Local Development Environment
- [Vite 5.x](https://vitejs.dev) - Fast Front-end Build Tool with Hot Module Replacement (HMR)
- [Tailwind CSS 4.x](https://tailwindcss.com) - Utility-first CSS Framework for efficient UI development

## System Requirements

- [DDEV](https://ddev.com) - Ensure DDEV is installed for smooth local development

## Key Features

- **Template System**
  - Pre-structured layout templates with base layouts, global headers, footers, and page templates
  - Custom error pages for 404, maintenance, and generic errors

- **Configuration Management**
  - Pre-configured settings for Craft CMS and essential plugins

- **Optimized Build Process**
  - Hot Module Replacement (HMR) for real-time front-end updates
  - Automatic minification and purging of CSS and JS for optimized performance

## Included Plugins

### Craft CMS Plugins

- **Vite** - Integrated front-end build tool for streamlined development
- **Sprig** - Enables reactive, interactive components within Twig templates

## Installation

1. **Clone or Fork the Repository**

Use Composer to create a new project:

```bash
composer create-project ackstudio/craft-cms
```

2.	Start DDEV, Install Craft CMS, and Dependencies

Firstly, edit .ddev/config.yaml and change the name field to your project name.
Then run the following commands to start DDEV and install dependencies:

``` ddev start ```
``` ddev composer install ```
``` ddev craft setup ```

3.	Start Vite for Front-end Development

Install Node.js dependencies and start Vite for development:

``` npm install ```
``` npm run dev ```

## Authors
- [ACK STUDIO](https://ackstudio.com)