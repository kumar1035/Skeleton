🧠 Real-Time Human Pose Detection Web App
📌 Overview

This project is a real-time human pose detection web application built using PoseNet and p5.js.
It captures live video from the user’s webcam, detects human body keypoints using AI, and visualizes them as a skeleton overlay directly in the browser.

The entire application runs client-side, without any backend server.

🎯 What Does This Project Do?

Accesses the user’s webcam

Uses an AI model (PoseNet) to detect human body joints

Identifies 17 body keypoints (nose, eyes, shoulders, elbows, knees, etc.)

Draws:

🟢 Keypoints (joints)

🔵 Skeleton connections (bones)

Updates everything in real-time

🛠️ Tech Stack Used
Frontend

HTML5 – Structure of the web page

CSS3 – Basic styling

JavaScript – Application logic

Libraries & Tools

p5.js – Canvas rendering and real-time drawing

ml5.js (v0.12.2) – Machine learning library for the browser

PoseNet – Pretrained deep learning model for pose estimation

WebRTC – Browser API used for webcam access

🌍 Real-World Use Cases

Fitness posture analysis

Gesture-based controls

Augmented reality filters

Sports motion analysis

Human–computer interaction

🤖