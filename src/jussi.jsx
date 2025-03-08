<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Farm to Form</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }
        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: #ffffff;
            text-align: center;
        }
        .logo-container {
            width: 300px;
            height: 300px;
            border: 2px solid black;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
            transition: all 0.5s ease-in-out;
        }
        .logo-text {
            font-size: 24px;
            font-weight: bold;
            z-index: 2;
            cursor: pointer;
            transition: opacity 0.3s ease-in-out;
            position: absolute;
        }
        .logo-container:hover .logo-text {
            opacity: 0;
        }
        .logo-container:hover::before {
            content: "FRIEND TO FRIEND";
            font-size: 24px;
            font-weight: bold;
            color: black;
            position: absolute;
        }
        .mind-map {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('/mnt/data/image.png') no-repeat center;
            background-size: cover;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
        }
        .logo-container:hover {
            background: url('/mnt/data/image.png') no-repeat center;
            background-size: cover;
            border-radius: 0;
        }
        .logo-container:hover .mind-map {
            opacity: 1;
        }
        .home-button {
            position: absolute;
            top: 20px;
            left: 20px;
            width: 50px;
            height: 50px;
            border: 2px solid black;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            font-weight: bold;
            text-decoration: none;
            color: black;
            background-color: white;
            cursor: pointer;
        }
        .nav-container {
            position: absolute;
            top: 20px;
            left: 80px;
            display: flex;
            gap: 20px;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
        }
        .home-button:hover + .nav-container, .nav-container:hover {
            opacity: 1;
        }
        .nav-container a {
            text-decoration: none;
            color: black;
            font-size: 18px;
            cursor: pointer;
        }
        .content {
            display: none;
            position: absolute;
            top: 100px;
            background: white;
            width: 80%;
            height: 70vh;
            border: 2px solid black;
            padding: 20px;
            text-align: left;
        }
        .content.active {
            display: block;
        }
        .main-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    </style>
    <script>
        function showContent(section) {
            document.querySelector('.main-content').style.display = 'none';
            document.querySelectorAll('.content').forEach(div => div.classList.remove('active'));
            document.getElementById(section).classList.add('active');
        }
    </script>
</head>
<body>
    <a href="index.html" class="home-button">F2F</a>
    <div class="nav-container">
        <a onclick="showContent('about')">About</a>
        <a onclick="showContent('manifesto')">Manifesto</a>
        <a onclick="showContent('contact')">Contact</a>
    </div>
    
    <div class="main-content">
        <div class="logo-container">
            <div class="logo-text">FARM TO FORM</div>
            <div class="mind-map"></div>
        </div>
    </div>
    
    <div id="about" class="content"> <h2>About</h2> <p>Farm to Form is an initiative to collaborate between craftspeople, alternative thinkers, optimists, friends, artists, etc. This website is a testing ground of integration.</p> </div>
    <div id="manifesto" class="content"> <h2>Manifesto</h2> </div>
    <div id="contact" class="content"> <h2>Contact</h2> </div>
</body>
</html>
