:root {
    --primary: #2d2d2d;
    --secondary: #6c63ff;
    --accent: #ff4d4d;
    --text: #444444;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', sans-serif;
}

body {
    display: grid;
    grid-template-columns: 1fr 2fr;
    min-height: 100vh;
}

.sidebar {
    background: #f8f9fa;
    padding: 2rem;
    position: fixed;
    width: 33.33%;
    height: 100vh;
    border-right: 1px solid #ddd;
}

.profile img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1.5rem;
    border: 5px solid var(--secondary);
}

.content {
    padding: 4rem;
    margin-left: 33.33%;
}

.section {
    margin-bottom: 4rem;
}

h2 {
    font-size: 2rem;
    color: var(--primary);
    margin-bottom: 2rem;
    padding-bottom: 0.5rem;
    border-bottom: 3px solid var(--secondary);
}

.project-grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.project-card {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.project-card:hover {
    transform: translateY(-5px);
}

.project-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.timeline {
    border-left: 3px solid var(--secondary);
    padding-left: 2rem;
}

.timeline-item {
    margin-bottom: 2rem;
    position: relative;
}

.timeline-item::before {
    content: '';
    position: absolute;
    left: -2.5rem;
    top: 0;
    width: 15px;
    height: 15px;
    background: var(--secondary);
    border-radius: 50%;
}

.contact-info ul {
    list-style: none;
    margin: 2rem 0;
}

.contact-info li {
    margin: 1rem 0;
    display: flex;
    align-items: center;
    gap: 1rem;
}

.skills ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr));
    gap: 1rem;
    list-style: none;
}

.skills li {
    background: white;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
    body {
        grid-template-columns: 1fr;
    }
    
    .sidebar {
        position: static;
        width: 100%;
        height: auto;
    }
    
    .content {
        margin-left: 0;
        padding: 2rem;
    }
}
