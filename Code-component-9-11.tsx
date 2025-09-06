/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    line-height: 1.6;
    color: #333;
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Gradient Text Utilities */
.gradient-text {
    background: linear-gradient(135deg, #3B82F6, #8B5CF6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
}

.gradient-text-alt {
    background: linear-gradient(135deg, #8B5CF6, #EC4899);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
}

.gradient-text-light {
    background: linear-gradient(135deg, #60A5FA, #A78BFA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
}

/* Button Styles */
.btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    border: none;
    border-radius: 50px;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.btn-primary {
    background: linear-gradient(135deg, #3B82F6, #8B5CF6);
    color: white;
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
}

.btn-outline {
    background: transparent;
    color: #333;
    border: 2px solid #e5e7eb;
}

.btn-outline:hover {
    background: #3B82F6;
    color: white;
    border-color: #3B82F6;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
}

.btn-outline-light {
    background: transparent;
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
}

.btn-outline-light:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
}

.btn-light {
    background: white;
    color: #333;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.btn-light:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.btn-lg {
    padding: 16px 32px;
    font-size: 18px;
}

/* Floating Elements */
.floating-element {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    z-index: -1;
}

.floating-1 {
    top: -200px;
    right: -200px;
    width: 320px;
    height: 320px;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2));
    filter: blur(80px);
    animation: float1 8s ease-in-out infinite;
}

.floating-2 {
    bottom: -200px;
    left: -200px;
    width: 320px;
    height: 320px;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2));
    filter: blur(80px);
    animation: float2 10s ease-in-out infinite;
}

.floating-3 {
    top: 80px;
    left: 80px;
    width: 288px;
    height: 288px;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
    filter: blur(60px);
    animation: float3 12s ease-in-out infinite;
}

.floating-4 {
    bottom: 80px;
    right: 80px;
    width: 288px;
    height: 288px;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1));
    filter: blur(60px);
    animation: float4 10s ease-in-out infinite;
}

.floating-5 {
    top: -160px;
    right: -160px;
    width: 320px;
    height: 320px;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
    filter: blur(80px);
    animation: float5 15s ease-in-out infinite;
}

.floating-6 {
    bottom: -160px;
    left: -160px;
    width: 320px;
    height: 320px;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1));
    filter: blur(80px);
    animation: float6 12s ease-in-out infinite;
}

.floating-7 {
    top: 80px;
    left: 80px;
    width: 160px;
    height: 160px;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05));
    filter: blur(40px);
    animation: float7 20s ease-in-out infinite;
}

.floating-8 {
    bottom: 80px;
    right: 80px;
    width: 160px;
    height: 160px;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(236, 72, 153, 0.05));
    filter: blur(40px);
    animation: float8 18s ease-in-out infinite;
}

@keyframes float1 {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(30px, -30px); }
}

@keyframes float2 {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(-30px, 30px); }
}

@keyframes float3 {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(50px, -50px); }
}

@keyframes float4 {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(-50px, 50px); }
}

@keyframes float5 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(50px, -50px) scale(1.1); }
}

@keyframes float6 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(-50px, 50px) scale(1.2); }
}

@keyframes float7 {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(30px, -30px); }
}

@keyframes float8 {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(-30px, 30px); }
}

/* Header Styles */
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    transition: all 0.3s ease;
    padding: 16px 0;
}

.header.scrolled {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(20px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    transition: transform 0.3s ease;
}

.logo:hover {
    transform: scale(1.05);
}

.logo-icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #3B82F6, #8B5CF6);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 18px;
}

.logo-text {
    font-size: 24px;
    font-weight: 800;
    background: linear-gradient(135deg, #3B82F6, #8B5CF6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
}

.nav-desktop {
    display: flex;
    align-items: center;
    gap: 32px;
}

.nav-link {
    text-decoration: none;
    color: #374151;
    font-weight: 500;
    position: relative;
    transition: color 0.3s ease;
}

.nav-link:hover {
    color: #3B82F6;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: #3B82F6;
    transition: width 0.3s ease;
}

.nav-link:hover::after {
    width: 100%;
}

.mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    font-size: 24px;
    color: #374151;
    cursor: pointer;
    position: relative;
}

.mobile-menu-btn i {
    transition: all 0.3s ease;
}

.close-icon {
    display: none;
}

.mobile-menu-btn.active .menu-icon {
    display: none;
}

.mobile-menu-btn.active .close-icon {
    display: block;
}

.mobile-menu {
    display: none;
    background: white;
    border-top: 1px solid #e5e7eb;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.mobile-menu.active {
    display: block;
    animation: slideDown 0.3s ease;
}

.mobile-menu-content {
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.mobile-nav-link {
    text-decoration: none;
    color: #374151;
    font-weight: 500;
    padding: 8px 0;
    transition: color 0.3s ease;
}

.mobile-nav-link:hover {
    color: #3B82F6;
}

.btn-mobile {
    margin-top: 16px;
}

@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Hero Section */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 50%, #f3e8ff 100%);
    overflow: hidden;
    padding-top: 80px;
}

.hero-bg {
    position: absolute;
    inset: 0;
    overflow: hidden;
}

.hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: center;
    z-index: 1;
}

.hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    padding: 8px 16px;
    border-radius: 50px;
    border: 1px solid rgba(59, 130, 246, 0.2);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    margin-bottom: 24px;
    font-size: 14px;
    font-weight: 500;
    color: #374151;
}

.hero-badge i {
    color: #10B981;
}

.hero-title {
    font-size: 4rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 24px;
    color: #1F2937;
}

.hero-subtitle {
    font-size: 20px;
    color: #6B7280;
    margin-bottom: 32px;
    line-height: 1.6;
    max-width: 500px;
}

.hero-buttons {
    display: flex;
    gap: 16px;
    margin-bottom: 32px;
    flex-wrap: wrap;
}

.trust-indicators {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    font-size: 14px;
    color: #6B7280;
}

.trust-item {
    display: flex;
    align-items: center;
    gap: 8px;
}

.trust-item i {
    color: #10B981;
}

.hero-image {
    position: relative;
}

.hero-image img {
    width: 100%;
    height: auto;
    border-radius: 24px;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease;
}

.hero-image:hover img {
    transform: scale(1.02);
}

.floating-card {
    position: absolute;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    padding: 16px;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    gap: 12px;
    transition: transform 0.3s ease;
    z-index: 2;
}

.floating-card:hover {
    transform: translateY(-5px);
}

.card-1 {
    bottom: -24px;
    left: -24px;
}

.card-2 {
    top: -24px;
    right: -24px;
}

.card-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}

.card-1 .card-icon {
    background: linear-gradient(135deg, #10B981, #059669);
}

.card-2 .card-icon {
    background: linear-gradient(135deg, #3B82F6, #2563EB);
}

.card-content h4 {
    font-size: 14px;
    font-weight: 600;
    color: #1F2937;
    margin: 0;
}

.card-content p {
    font-size: 12px;
    color: #6B7280;
    margin: 0;
}

.scroll-indicator {
    position: absolute;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
}

.scroll-mouse {
    width: 24px;
    height: 40px;
    border: 2px solid #9CA3AF;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    position: relative;
    animation: scrollBounce 2s infinite;
}

.scroll-dot {
    width: 4px;
    height: 12px;
    background: #9CA3AF;
    border-radius: 2px;
    margin-top: 8px;
    animation: scrollDot 2s infinite;
}

@keyframes scrollBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(10px); }
}

@keyframes scrollDot {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(10px); }
}

/* Section Styles */
.section-header {
    margin-bottom: 64px;
}

.section-header.text-center {
    text-align: center;
}

.section-badge {
    display: inline-block;
    background: linear-gradient(135deg, #3B82F6, #8B5CF6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    font-weight: 600;
    margin-bottom: 16px;
    font-size: 16px;
}

.section-badge.light {
    background: linear-gradient(135deg, #60A5FA, #A78BFA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
}

.section-title {
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 24px;
    color: #1F2937;
}

.section-title.light {
    color: white;
}

.section-description {
    font-size: 18px;
    color: #6B7280;
    line-height: 1.7;
    max-width: 800px;
}

.section-description.light {
    color: #D1D5DB;
}

.text-center .section-description {
    margin: 0 auto;
}

/* About Section */
.about {
    padding: 80px 0 120px;
    background: white;
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: center;
}

.about-image {
    position: relative;
}

.about-image img {
    width: 100%;
    height: auto;
    border-radius: 24px;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease;
}

.about-image:hover img {
    transform: scale(1.02);
}

.achievement-card {
    position: absolute;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    padding: 16px;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    gap: 12px;
    transition: transform 0.3s ease;
    z-index: 2;
}

.achievement-card:hover {
    transform: translateY(-5px) scale(1.05);
}

.achievement-1 {
    top: 10%;
    left: -5%;
}

.achievement-2 {
    top: 50%;
    right: -10%;
}

.achievement-3 {
    bottom: 15%;
    right: -5%;
}

.achievement-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
    display: flex;
    align-items: center;
    justify-content: center;
    color: #3B82F6;
}

.achievement-content h4 {
    font-size: 14px;
    font-weight: 600;
    color: #1F2937;
    margin: 0;
}

.achievement-content p {
    font-size: 12px;
    color: #6B7280;
    margin: 0;
}

.features-list {
    margin-bottom: 32px;
}

.feature-item {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
    color: #374151;
    transition: all 0.3s ease;
}

.feature-item:hover {
    color: #1F2937;
    transform: translateX(5px);
}

.feature-item i {
    color: #10B981;
    flex-shrink: 0;
    transition: transform 0.3s ease;
}

.feature-item:hover i {
    transform: scale(1.1);
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

.stat-card {
    text-align: center;
    padding: 24px;
    border-radius: 16px;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05));
    transition: all 0.3s ease;
    cursor: pointer;
}

.stat-card:hover {
    transform: translateY(-5px);
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
}

.stat-number {
    font-size: 2.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, #3B82F6, #8B5CF6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    margin-bottom: 8px;
    transition: transform 0.3s ease;
}

.stat-card:hover .stat-number {
    transform: scale(1.1);
}

.stat-label {
    color: #6B7280;
    font-size: 14px;
    transition: color 0.3s ease;
}

.stat-card:hover .stat-label {
    color: #1F2937;
}

/* Services Section */
.services {
    padding: 80px 0 120px;
    background: linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #e0f2fe 100%);
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 48px;
    margin-bottom: 80px;
}

.service-card {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    border-radius: 24px;
    padding: 32px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.service-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.02), rgba(139, 92, 246, 0.02));
    opacity: 0;
    transition: opacity 0.3s ease;
}

.service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

.service-card:hover::before {
    opacity: 1;
}

.service-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
}

.service-icon {
    width: 64px;
    height: 64px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    color: white;
    transition: all 0.3s ease;
}

.service-card:hover .service-icon {
    transform: scale(1.1) rotate(5deg);
}

.service-icon.blue {
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(96, 165, 250, 0.1));
    background: linear-gradient(135deg, #3B82F6, #60A5FA);
}

.service-icon.green {
    background: linear-gradient(135deg, #10B981, #34D399);
}

.service-icon.purple {
    background: linear-gradient(135deg, #8B5CF6, #A78BFA);
}

.service-icon.orange {
    background: linear-gradient(135deg, #F59E0B, #FBBF24);
}

.service-arrow {
    opacity: 0;
    transition: all 0.3s ease;
    color: #9CA3AF;
}

.service-card:hover .service-arrow {
    opacity: 1;
    color: #3B82F6;
    transform: translateX(5px);
}

.service-title {
    font-size: 24px;
    font-weight: 700;
    color: #1F2937;
    margin-bottom: 16px;
    transition: color 0.3s ease;
}

.service-card:hover .service-title {
    color: #3B82F6;
}

.service-description {
    color: #6B7280;
    line-height: 1.6;
    margin-bottom: 24px;
}

.service-features {
    list-style: none;
    margin-bottom: 24px;
}

.service-features li {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 8px;
    color: #374151;
    transition: all 0.3s ease;
}

.service-features li:hover {
    color: #1F2937;
    transform: translateX(5px);
}

.service-features li i {
    color: #10B981;
    flex-shrink: 0;
    transition: transform 0.3s ease;
}

.service-features li:hover i {
    transform: scale(1.1);
}

.service-btn {
    width: 100%;
    transition: all 0.3s ease;
}

.service-card:hover .service-btn {
    background: linear-gradient(135deg, #3B82F6, #8B5CF6);
    color: white;
    border-color: transparent;
    transform: scale(1.05);
}

.services-cta {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
}

.services-cta h3 {
    font-size: 2rem;
    font-weight: 700;
    color: #1F2937;
    margin-bottom: 16px;
}

.services-cta p {
    color: #6B7280;
    margin-bottom: 32px;
    font-size: 18px;
}

/* Stats Section */
.stats {
    padding: 80px 0 120px;
    background: linear-gradient(135deg, #1F2937 0%, #1E40AF 50%, #7C3AED 100%);
    position: relative;
    overflow: hidden;
}

.stats-bg {
    position: absolute;
    inset: 0;
    overflow: hidden;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
    margin-bottom: 80px;
}

.stat-box {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border-radius: 24px;
    padding: 32px;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.5s ease;
    position: relative;
    overflow: hidden;
}

.stat-box::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
    opacity: 0;
    transition: opacity 0.3s ease;
}

.stat-box:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 25px 50px rgba(59, 130, 246, 0.2);
}

.stat-box:hover::before {
    opacity: 1;
}

.stat-box .stat-icon {
    width: 64px;
    height: 64px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    color: white;
    margin: 0 auto 24px;
    transition: all 0.3s ease;
}

.stat-box:hover .stat-icon {
    transform: scale(1.1) rotate(10deg);
}

.stat-box .stat-icon.blue {
    background: linear-gradient(135deg, #3B82F6, #60A5FA);
}

.stat-box .stat-icon.green {
    background: linear-gradient(135deg, #10B981, #34D399);
}

.stat-box .stat-icon.purple {
    background: linear-gradient(135deg, #8B5CF6, #A78BFA);
}

.stat-box .stat-icon.orange {
    background: linear-gradient(135deg, #F59E0B, #FBBF24);
}

.stat-number {
    font-size: 3rem;
    font-weight: 800;
    color: white;
    margin-bottom: 8px;
    display: inline-block;
    transition: transform 0.3s ease;
}

.stat-suffix {
    font-size: 3rem;
    font-weight: 800;
    color: white;
    display: inline-block;
}

.stat-box:hover .stat-number,
.stat-box:hover .stat-suffix {
    transform: scale(1.1);
}

.stat-title {
    font-size: 20px;
    font-weight: 600;
    color: white;
    margin-bottom: 8px;
    transition: color 0.3s ease;
}

.stat-box:hover .stat-title {
    color: #60A5FA;
}

.stat-desc {
    color: #D1D5DB;
    font-size: 14px;
    transition: color 0.3s ease;
}

.stat-box:hover .stat-desc {
    color: #F3F4F6;
}

.stats-cta {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
}

.stats-cta h3 {
    font-size: 2rem;
    font-weight: 700;
    color: white;
    margin-bottom: 16px;
}

.stats-cta p {
    color: #D1D5DB;
    margin-bottom: 32px;
    font-size: 18px;
}

/* Testimonials Section */
.testimonials {
    padding: 80px 0 120px;
    background: white;
}

.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    margin-bottom: 80px;
}

.testimonial-card {
    background: linear-gradient(135deg, #ffffff 0%, rgba(248, 250, 252, 0.5) 100%);
    border-radius: 24px;
    padding: 32px;
    border: 1px solid #f1f5f9;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    transition: all 0.5s ease;
    position: relative;
    overflow: hidden;
}

.testimonial-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.02), rgba(139, 92, 246, 0.02));
    opacity: 0;
    transition: opacity 0.3s ease;
}

.testimonial-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

.testimonial-card:hover::before {
    opacity: 1;
}

.testimonial-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
}

.testimonial-rating {
    display: flex;
    gap: 4px;
}

.testimonial-rating i {
    color: #FBBF24;
    font-size: 16px;
    animation: starPop 0.3s ease;
}

.testimonial-rating i:nth-child(1) { animation-delay: 0.1s; }
.testimonial-rating i:nth-child(2) { animation-delay: 0.2s; }
.testimonial-rating i:nth-child(3) { animation-delay: 0.3s; }
.testimonial-rating i:nth-child(4) { animation-delay: 0.4s; }
.testimonial-rating i:nth-child(5) { animation-delay: 0.5s; }

@keyframes starPop {
    0% { transform: scale(0) rotate(-180deg); }
    100% { transform: scale(1) rotate(0deg); }
}

.testimonial-quote {
    opacity: 0.1;
    transition: all 0.3s ease;
}

.testimonial-card:hover .testimonial-quote {
    opacity: 0.2;
    transform: scale(1.1) rotate(10deg);
}

.testimonial-quote i {
    font-size: 32px;
    color: #3B82F6;
}

.testimonial-content {
    color: #374151;
    line-height: 1.7;
    margin-bottom: 24px;
    font-style: italic;
    transition: color 0.3s ease;
}

.testimonial-card:hover .testimonial-content {
    color: #1F2937;
}

.testimonial-author {
    display: flex;
    align-items: center;
    gap: 16px;
}

.testimonial-author img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #e5e7eb;
    transition: all 0.3s ease;
}

.testimonial-card:hover .testimonial-author img {
    border-color: #3B82F6;
    transform: scale(1.1);
}

.author-info h4 {
    font-size: 16px;
    font-weight: 600;
    color: #1F2937;
    margin: 0;
    transition: color 0.3s ease;
}

.testimonial-card:hover .author-info h4 {
    color: #3B82F6;
}

.author-info p {
    font-size: 14px;
    color: #6B7280;
    margin: 0;
    transition: color 0.3s ease;
}

.testimonial-card:hover .author-info p {
    color: #374151;
}

.author-info span {
    font-size: 12px;
    color: #9CA3AF;
    transition: color 0.3s ease;
}

.testimonial-card:hover .author-info span {
    color: #6B7280;
}

.testimonials-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    text-align: center;
}

.testimonial-stat {
    padding: 24px;
    border-radius: 16px;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05));
    transition: all 0.3s ease;
    cursor: pointer;
}

.testimonial-stat:hover {
    transform: translateY(-5px) scale(1.05);
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
}

.testimonial-stat h3 {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 8px;
    transition: transform 0.3s ease;
}

.testimonial-stat:hover h3 {
    transform: scale(1.1);
}

.testimonial-stat p {
    color: #6B7280;
    font-size: 14px;
    transition: color 0.3s ease;
}

.testimonial-stat:hover p {
    color: #1F2937;
}

/* CTA Section */
.cta {
    padding: 80px 0 120px;
    background: linear-gradient(135deg, #1E3A8A 0%, #7C3AED 50%, #4338CA 100%);
    position: relative;
    overflow: hidden;
    color: white;
}

.cta-bg {
    position: absolute;
    inset: 0;
    overflow: hidden;
}

.cta-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: center;
    margin-bottom: 80px;
}

.cta-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    padding: 8px 16px;
    border-radius: 50px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    margin-bottom: 24px;
    font-size: 14px;
    font-weight: 500;
}

.cta-badge i {
    color: #60A5FA;
}

.cta-title {
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 24px;
}

.cta-subtitle {
    font-size: 18px;
    color: #D1D5DB;
    margin-bottom: 32px;
    line-height: 1.7;
    max-width: 500px;
}

.cta-buttons {
    display: flex;
    gap: 16px;
    margin-bottom: 32px;
    flex-wrap: wrap;
}

.cta-contact {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    color: #D1D5DB;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;
    cursor: pointer;
}

.contact-item:hover {
    color: white;
    transform: scale(1.05);
}

.contact-item i {
    color: #60A5FA;
    transition: color 0.3s ease;
}

.contact-item:hover i {
    color: #93C5FD;
}

.cta-image {
    position: relative;
}

.cta-image img {
    width: 100%;
    height: auto;
    border-radius: 24px;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;
}

.cta-image:hover img {
    transform: scale(1.02);
}

.cta-floating-card {
    position: absolute;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(20px);
    padding: 16px;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    gap: 12px;
    transition: transform 0.3s ease;
    z-index: 2;
}

.cta-floating-card:hover {
    transform: translateY(-5px) scale(1.05);
}

.card-3 {
    bottom: -24px;
    left: -24px;
}

.card-4 {
    top: -24px;
    right: -24px;
}

.cta-floating-card .card-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}

.card-3 .card-icon {
    background: linear-gradient(135deg, #10B981, #059669);
}

.card-4 .card-icon {
    background: linear-gradient(135deg, #3B82F6, #2563EB);
}

.cta-floating-card .card-content h4 {
    font-size: 14px;
    font-weight: 600;
    color: #1F2937;
    margin: 0;
}

.cta-floating-card .card-content p {
    font-size: 12px;
    color: #6B7280;
    margin: 0;
}

.cta-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
    text-align: center;
}

.cta-stat {
    transition: all 0.3s ease;
    cursor: pointer;
}

.cta-stat:hover {
    transform: scale(1.05) translateY(-5px);
}

.cta-stat h3 {
    font-size: 2rem;
    font-weight: 700;
    color: white;
    margin-bottom: 8px;
    transition: all 0.3s ease;
}

.cta-stat:hover h3 {
    color: #60A5FA;
    transform: scale(1.1);
}

.cta-stat p {
    color: #D1D5DB;
    font-size: 14px;
    transition: color 0.3s ease;
}

.cta-stat:hover p {
    color: white;
}

/* Footer */
.footer {
    background: linear-gradient(135deg, #1F2937 0%, #1E40AF 50%, #7C3AED 100%);
    color: white;
    position: relative;
    overflow: hidden;
}

.footer-bg {
    position: absolute;
    inset: 0;
    overflow: hidden;
}

.newsletter-section {
    padding: 64px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.newsletter-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: center;
}

.newsletter-left h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 16px;
}

.newsletter-left p {
    color: #D1D5DB;
    font-size: 18px;
}

.newsletter-form {
    display: flex;
    gap: 16px;
}

.newsletter-form input {
    flex: 1;
    padding: 16px 20px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    font-size: 16px;
    backdrop-filter: blur(20px);
    transition: all 0.3s ease;
}

.newsletter-form input::placeholder {
    color: #D1D5DB;
}

.newsletter-form input:focus {
    outline: none;
    border-color: #3B82F6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.footer-main {
    padding: 64px 0;
}

.footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1.5fr;
    gap: 48px;
}

.footer-column h4 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 24px;
    color: white;
}

.footer-column h5 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 16px;
    color: white;
}

.footer-logo {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;
}

.footer-logo .logo-icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #3B82F6, #8B5CF6);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: transform 0.3s ease;
}

.footer-logo:hover .logo-icon {
    transform: scale(1.1) rotate(5deg);
}

.footer-logo .logo-text {
    font-size: 20px;
    font-weight: 700;
    background: linear-gradient(135deg, #60A5FA, #A78BFA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
}

.footer-description {
    color: #D1D5DB;
    line-height: 1.6;
    margin-bottom: 24px;
}

.footer-contact {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.footer-contact .contact-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    color: #D1D5DB;
    transition: all 0.3s ease;
    cursor: pointer;
}

.footer-contact .contact-item:hover {
    color: white;
    transform: translateX(5px);
}

.footer-contact .contact-item i {
    color: #60A5FA;
    margin-top: 2px;
    transition: color 0.3s ease;
}

.footer-contact .contact-item:hover i {
    color: #93C5FD;
}

.footer-links {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.footer-links li a {
    color: #D1D5DB;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 12px;
    transition: all 0.3s ease;
}

.footer-links li a:hover {
    color: white;
    transform: translateX(5px);
}

.footer-links li a i {
    color: #60A5FA;
    width: 16px;
    transition: color 0.3s ease;
}

.footer-links li a:hover i {
    color: #93C5FD;
}

.business-hours {
    margin-bottom: 24px;
    color: #D1D5DB;
    line-height: 1.8;
}

.business-hours .emergency {
    color: #60A5FA;
    font-weight: 500;
}

.social-links {
    display: flex;
    gap: 12px;
}

.social-link {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #D1D5DB;
    text-decoration: none;
    transition: all 0.3s ease;
}

.social-link:hover {
    transform: translateY(-3px) scale(1.1);
    background: rgba(255, 255, 255, 0.2);
}

.social-link.facebook:hover {
    color: #1877F2;
}

.social-link.twitter:hover {
    color: #1DA1F2;
}

.social-link.linkedin:hover {
    color: #0A66C2;
}

.social-link.instagram:hover {
    color: #E4405F;
}

.footer-bottom {
    padding: 24px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-bottom-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;
}

.footer-bottom-content p {
    color: #D1D5DB;
    font-size: 14px;
}

.footer-bottom-links {
    display: flex;
    gap: 24px;
}

.footer-bottom-links a {
    color: #D1D5DB;
    text-decoration: none;
    font-size: 14px;
    transition: all 0.3s ease;
}

.footer-bottom-links a:hover {
    color: white;
    transform: translateY(-2px);
}

/* Counter Animation */
@keyframes countUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.counting {
    animation: countUp 0.8s ease-out;
}

/* Responsive Design */
@media (max-width: 1200px) {
    .container {
        max-width: 960px;
    }
}

@media (max-width: 992px) {
    .container {
        max-width: 720px;
    }

    .hero-content,
    .about-content,
    .cta-content {
        grid-template-columns: 1fr;
        gap: 48px;
        text-align: center;
    }

    .services-grid {
        grid-template-columns: 1fr;
        gap: 32px;
    }

    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .testimonials-grid {
        grid-template-columns: 1fr;
        gap: 24px;
    }

    .footer-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 32px;
    }

    .cta-stats {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .nav-desktop,
    .btn-cta {
        display: none;
    }

    .mobile-menu-btn {
        display: block;
    }

    .hero-title {
        font-size: 2.5rem;
    }

    .section-title {
        font-size: 2rem;
    }

    .hero-buttons {
        flex-direction: column;
        align-items: center;
    }

    .trust-indicators {
        flex-direction: column;
        gap: 12px;
        align-items: center;
    }

    .stats-grid {
        grid-template-columns: 1fr;
        gap: 24px;
    }

    .testimonials-stats {
        grid-template-columns: 1fr;
        gap: 24px;
    }

    .cta-buttons {
        flex-direction: column;
        align-items: center;
    }

    .cta-contact {
        flex-direction: column;
        align-items: center;
        gap: 12px;
    }

    .cta-stats {
        grid-template-columns: repeat(2, 1fr);
    }

    .newsletter-content {
        grid-template-columns: 1fr;
        gap: 32px;
        text-align: center;
    }

    .newsletter-form {
        flex-direction: column;
    }

    .footer-grid {
        grid-template-columns: 1fr;
        gap: 32px;
        text-align: center;
    }

    .footer-bottom-content {
        flex-direction: column;
        text-align: center;
    }
}

@media (max-width: 576px) {
    .container {
        padding: 0 16px;
    }

    .hero-title {
        font-size: 2rem;
    }

    .section-title {
        font-size: 1.75rem;
    }

    .cta-title {
        font-size: 2rem;
    }

    .floating-card,
    .achievement-card,
    .cta-floating-card {
        position: static;
        margin: 16px 0;
    }

    .hero-image,
    .about-image,
    .cta-image {
        margin-top: 32px;
    }

    .stats-grid {
        gap: 16px;
    }

    .stat-box {
        padding: 24px;
    }

    .service-card {
        padding: 24px;
    }

    .testimonial-card {
        padding: 24px;
    }

    .cta-stats {
        grid-template-columns: 1fr;
    }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }

    .floating-element {
        animation: none;
    }
}