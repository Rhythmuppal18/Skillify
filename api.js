/**
 * ====================================================================
 * QUIZZE PHASE 2 - FRONTEND API CLIENT HELPER (Vanilla JS)
 * Handles all HTTP communication between the browser and Express backend.
 * Team PID-6: Rhythm Uppal, Heemanshu Singh, Pehoo Angrish
 * ====================================================================
 */

const API_BASE_URL = 'http://localhost:5000/api';

const QuizzeAPI = {
    // ----------------------------------------------------------------
    // 1. AUTHENTICATION & USER SESSION
    // ----------------------------------------------------------------
    
    // Save authentication state in localStorage
    setAuthSession(token, user) {
        localStorage.setItem('quizze_token', token);
        localStorage.setItem('quizze_user', JSON.stringify(user));
    },

    // Retrieve active logged-in user
    getCurrentUser() {
        try {
            const userStr = localStorage.getItem('quizze_user');
            return userStr ? JSON.parse(userStr) : null;
        } catch {
            return null;
        }
    },

    // Retrieve active JWT token
    getToken() {
        return localStorage.getItem('quizze_token');
    },

    // Logout user
    logout() {
        localStorage.removeItem('quizze_token');
        localStorage.removeItem('quizze_user');
        window.location.reload();
    },

    // Register user
    async register(fullName, email, password, role = 'student') {
        try {
            const res = await fetch(`${API_BASE_URL}/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ fullName, email, password, role })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Registration failed');
            this.setAuthSession(data.token, data.user);
            return data;
        } catch (err) {
            console.error('API Register Error:', err.message);
            throw err;
        }
    },

    // Login user
    async login(email, password) {
        try {
            const res = await fetch(`${API_BASE_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Login failed');
            this.setAuthSession(data.token, data.user);
            return data;
        } catch (err) {
            console.error('API Login Error:', err.message);
            throw err;
        }
    },

    // ----------------------------------------------------------------
    // 2. QUESTIONS (Fetched from MySQL Database)
    // ----------------------------------------------------------------
    
    async getQuestions(subject = 'cpp', mode = 'standard', limit = 10) {
        try {
            const url = `${API_BASE_URL}/questions?subject=${encodeURIComponent(subject)}&mode=${encodeURIComponent(mode)}&limit=${limit}`;
            const res = await fetch(url);
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to fetch questions');
            return data.questions || [];
        } catch (err) {
            console.warn('API getQuestions warning (backend may be offline, using fallback):', err.message);
            return null; // Signals caller to use local fallback if offline
        }
    },

    // ----------------------------------------------------------------
    // 3. SECURE SERVER-SIDE QUIZ SUBMISSION (ANTI-CHEAT)
    // ----------------------------------------------------------------
    
    async submitQuiz({ subjectSlug, gameMode, timeTakenSec, submissions }) {
        try {
            const token = this.getToken();
            const user = this.getCurrentUser();
            
            const headers = { 'Content-Type': 'application/json' };
            if (token) headers['Authorization'] = `Bearer ${token}`;

            const res = await fetch(`${API_BASE_URL}/quiz/submit`, {
                method: 'POST',
                headers,
                body: JSON.stringify({
                    userId: user ? user.id : null,
                    subjectSlug,
                    gameMode,
                    timeTakenSec,
                    submissions
                })
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Submission failed');
            return data;
        } catch (err) {
            console.error('API submitQuiz Error:', err.message);
            throw err;
        }
    },

    // ----------------------------------------------------------------
    // 4. LEADERBOARD & STATS (Calculated by MySQL)
    // ----------------------------------------------------------------
    
    async getLeaderboard() {
        try {
            const res = await fetch(`${API_BASE_URL}/leaderboard`);
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to fetch leaderboard');
            return data.leaderboard || [];
        } catch (err) {
            console.warn('API getLeaderboard warning:', err.message);
            return [];
        }
    },

    async getPlatformStats() {
        try {
            const res = await fetch(`${API_BASE_URL}/leaderboard/stats`);
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to fetch stats');
            return data;
        } catch (err) {
            console.warn('API getPlatformStats warning:', err.message);
            return null;
        }
    }
};

// Expose globally so existing HTML files can access window.QuizzeAPI directly
window.QuizzeAPI = QuizzeAPI;
