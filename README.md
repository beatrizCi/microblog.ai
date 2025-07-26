##                                                              Microblog AI Generator

<img width="1882" height="935" alt="home-page" src="https://github.com/user-attachments/assets/e780cb1b-9757-4d66-a4b2-179297208b5d" />

## The problem solved

In today’s social media world, creating engaging and optimized content is a constant challenge for:

* **Content creators** who need to stay consistent
* **Marketing professionals** managing multiple accounts
* **Entrepreneurs** looking to grow their online presence
* **Developers** who want to learn AI hands-on

Our solution? A smart tool that uses A.I to generate optimized microblog content with the right tone and strategic hashtags.

## 🚀 app overview


Smart Microblog Generator, a modern web application that includes:

**1. Engaging Landing Page**

* Hero section with call-to-action
* Highlights of main features
* Modern, responsive design

**2. Smart Content Generation Page**

* Intuitive form with real-time validation
* Visual tone selector
* Instant preview of generated content
* Copy system with visual feedback

**3. Robust API**

* Integration with GitHub Models (GPT-4o)
* Rate limiting for protection
* Detailed error handling

## Application Demo

Here’s a preview of what the app looks like:

![App Demo](../../resources/images/demo.gif)

## 🛠️ Technologies Used

**1. Next.js 15 with App Router**

* **What it is:** React framework by Vercel
* **Why we use it:**

  * Server Components for better performance
  * App Router is more intuitive than Pages Router
  * Automatic optimizations (images, fonts, etc.)
  * Integrated API Routes
  * Easy deployment on Vercel. Also supports cloud providers like AWS, Azure, and Google Cloud.

**2. GitHub Models**

* **What it is:** Free access to AI models through GitHub
* **Why we use it:**

  * Access to cutting-edge models, including GPT-4o, for free
  * Easy integration for personal projects and learning (ideal for PoCs and MVPs)
  * No credit card required (for PoC/MVP usage)

**3. TypeScript**

* **What it is:** JavaScript with static typing
* **Why we use it:**

  * Catches errors during development
  * Better IntelliSense in Visual Studio Code
  * Auto-generated documentation
  * Safer refactoring

**4. Tailwind CSS**

* **What it is:** Utility-first CSS framework
* **Why we use it:**

  * Rapid UI development
  * Consistent design
  * Easy responsiveness
  * Optimized production size

**5. React Hooks**

* **What it is:** Functions for managing state and side effects
* **Why we use it:**

  * Cleaner, reusable code
  * Modern React standard
  * Improved performance
  * Easier to test

## 📋 Key Features

### 1. ✍️ Generation with 3 Voice Tones

* Technical

  * Precise, professional language
  * Data and statistics
  * Domain-specific terminology
  * Example: *"We implemented a microservices-based solution that reduced latency by 47%..."*

* Casual

  * Conversational and friendly tone
  * Everyday language
  * Emojis and informal expressions
  * Example: *"Dude, you won’t believe what I discovered today! 🤯"*

* Motivational

  * Inspiring language
  * Focus on action and growth
  * Strong calls-to-action
  * Example: *"Today is the perfect day to turn your ideas into reality! 💪"*

### 2. 🏷️ Optimized Hashtag Suggestions

One of the biggest challenges content creators face is choosing relevant hashtags to expand their post’s reach. In this project, the AI automatically analyzes the generated microblog, identifies key themes, and suggests 5–7 optimized hashtags to boost engagement.

The algorithm mixes popular hashtags—with high reach—with niche ones that help target segmented audiences. All hashtags are pre-formatted with the `#` symbol and ready to copy and use on LinkedIn, Twitter, or Instagram.

**How does it work in practice?**
Each time you generate a microblog, hashtags appear separately, making it easy to pick and copy them all at once.

### 3. 💡 Strategic Insights

Beyond text generation, the app also provides practical tips to improve your social media presence. For each microblog, the AI analyzes engagement potential and suggests:

* Best times to publish (based on general trends)
* Tips to expand reach
* Strategies to boost follower engagement
* Trends related to your topic

These insights appear with the generated content, helping you post **better**, at the right time, and with a higher chance of going viral.

### 4. 📋 Copy-to-Clipboard System

User experience is a priority. That’s why you can quickly copy just the microblog text, just the hashtags, or both (text + hashtags) with a single click. A visual feedback appears confirming the content is ready to paste on any social network, email, or document.

The system is fully compatible with modern browsers and social platforms, making it fast, easy, and error-free to share your microblog.

### 5. 🛡️ Rate Limiting and Validation

To keep the service fast and stable for everyone, the backend limits each user to 10 microblog generations per minute. If that limit is exceeded, a friendly error message appears, advising to wait before trying again.

Also, all form fields are validated in real time. You’ll be notified immediately if you miss a required field or exceed the character limit, helping prevent frustration. These measures also protect against spam and abuse.

### 6. 🎨 Responsive Interface

The interface is designed to work perfectly on both desktop and mobile. The mobile-first design ensures that all buttons, forms, and content areas are easy to use on any screen size.

Smooth animations enhance the experience, adding a sense of modernity and professionalism.

Lastly, the app follows accessibility best practices, with ARIA labels and proper semantic structure—making it usable for people with screen readers or other specific needs.$

## 🖥️ How to Run Locally

You can run the application locally using **GitHub Models**. Follow these steps:

1. 📦 Install dependencies:

   ```bash
   npm install
   ```

2. 🏗️ Build the application:

   ```bash
   npm run build
   ```

3. ⚙️ Create a `.env` file at the root of the project:

   ```env
   NEXT_PUBLIC_GITHUB_MODELS_TOKEN=
   NEXT_PUBLIC_GITHUB_MODELS_ENDPOINT=
   ```

   > Fill in the values with your own GitHub Models environment credentials.

4. ▶️ Start the application:

   ```bash
   npm run start
   ```


### 6. contact
olgabeatrizs@icloud.com

